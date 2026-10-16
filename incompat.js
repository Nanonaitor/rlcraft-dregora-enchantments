(() => {
  const $=s=>document.querySelector(s);
  const tab=document.createElement('a');
  tab.href='#incompatibilities';
  tab.id='incompat-tab';
  tab.textContent='Incompatibilities';
  $('.tabs').insertBefore(tab,$('#sound'));

  const section=document.createElement('section');
  section.id='incompatibilities';
  section.hidden=true;
  section.innerHTML=`
    <div class="incompat-view-switch" aria-label="View">
      <span data-incompat-label="view">View</span>
      <button type="button" data-incompat-view-button="matrix" aria-pressed="true">Table</button>
      <button type="button" data-incompat-view-button="groups" aria-pressed="false">Groups</button>
    </div>
    <div class="list-heading"><h2>Weapon Enchantment Incompatibilities</h2><span>RLCraft Dregora 1.1.0</span></div>
    <p class="incompat-intro" data-incompat-intro></p>
    <div data-incompat-view="matrix">
      <div class="incompat-table-wrap"><table class="incompat-matrix"><thead><tr><th>Enchantment</th></tr></thead><tbody></tbody></table></div>
    </div>
    <div class="incompat-groups" data-incompat-view="groups" hidden></div>
    <p class="incompat-credit">Chart based on Nischhelm’s incompatibility guide.</p>
    <p class="incompat-note">If you wish to contribute, contact Nanonaitor!</p>`;
  $('.tabs')?.after(section);
  if($('#about-tab')&&$('#sound'))$('.tabs').insertBefore($('#about-tab'),$('#sound'));

  const ui={
    en:{tab:'Incompatibilities',view:'View',matrix:'Table',groups:'Groups',title:'Weapon Enchantment Incompatibilities',matrixIntro:'Matrix view of every incompatibility. A checkmark means the row and column enchantments cannot be combined.',groupsIntro:'Grouped view of every supplied incompatibility set. Enchantments inside the same box cannot be combined with one another.',enchantment:'Enchantment',credit:'Chart based on Nischhelm’s incompatibility guide.',note:'If you wish to contribute, contact Nanonaitor!',items:n=>`${n} enchantments`},
    es:{tab:'Incompatibilidades',view:'Vista',matrix:'Tabla',groups:'Grupos',title:'Incompatibilidades de encantamientos de armas',matrixIntro:'Vista matricial de todas las incompatibilidades. Una marca indica que los encantamientos de la fila y la columna no se pueden combinar.',groupsIntro:'Vista por grupos de todos los conjuntos proporcionados. Los encantamientos dentro de la misma caja no se pueden combinar entre sí.',enchantment:'Encantamiento',credit:'Tabla basada en la guía de incompatibilidades de Nischhelm.',note:'Si deseas contribuir, ¡contacta a Nanonaitor!',items:n=>`${n} encantamientos`},
    zh:{tab:'不兼容组合',view:'视图',matrix:'表格',groups:'分组',title:'武器附魔不兼容组合',matrixIntro:'所有不兼容组合的矩阵视图。勾号表示对应行与列的附魔无法组合。',groupsIntro:'所有不兼容组合的分组视图。同一个方框内的附魔无法互相组合。',enchantment:'附魔',credit:'本表基于 Nischhelm 的附魔不兼容指南。',note:'如需贡献内容，请联系 Nanonaitor！',items:n=>`${n} 个附魔`}
  };
  const specialGroupNames={
    es:{'Depth Strider vs Frost Walker':'Agilidad acuática vs. Paso helado','Infinity vs Mending':'Infinidad vs. Reparación'},
    zh:{'Depth Strider vs Frost Walker':'深海探索者 vs. 冰霜行者','Infinity vs Mending':'无限 vs. 经验修补'}
  };
  let selectedView='matrix',groups=[],catalogue=[],translations={};
  const currentLanguage=()=>typeof lang!=='undefined'&&['es','zh'].includes(lang)?lang:'en';
  const localizedGroupName=(name,language)=>{
    const number=name.match(/^Group (\d+)$/)?.[1];
    if(number)return language==='es'?`Grupo ${number}`:language==='zh'?`第 ${number} 组`:name;
    return specialGroupNames[language]?.[name]||name;
  };
  const localizedEnchant=(id,language)=>{
    const row=catalogue.find(item=>item.id===id);
    return translations[language]?.[id]?.name||row?.name||id;
  };
  const modName=id=>id.split(':')[0].replace(/^minecraft$/,'Minecraft').replace(/^somanyenchantments$/,'SME').replace(/^mujmajnkraftsbettersurvival$/,'Better Survival').replace(/^spartanweaponry$/,'Spartan Weaponry').replace(/^simpledifficulty$/,'Simple Difficulty');

  function renderGroups(){
    if(!groups.length)return;
    const language=currentLanguage(),copy=ui[language];
    section.querySelector('.incompat-groups').innerHTML=groups.map(group=>`
      <article class="incompat-group-card">
        <header><h3>${localizedGroupName(group.name,language)}</h3><span>${copy.items(group.enchantments.length)}</span></header>
        <div class="incompat-group-members">
          ${group.enchantments.map((id,index)=>`<div class="incompat-group-member" title="${id}"><span class="incompat-member-index">${index+1}</span><span><strong>${localizedEnchant(id,language)}</strong><small>${modName(id)}</small></span></div>`).join('')}
        </div>
      </article>`).join('');
  }
  function localize(){
    const language=currentLanguage(),copy=ui[language];
    tab.textContent=copy.tab;
    section.querySelector('[data-incompat-label="view"]').textContent=copy.view;
    section.querySelector('[data-incompat-view-button="matrix"]').textContent=copy.matrix;
    section.querySelector('[data-incompat-view-button="groups"]').textContent=copy.groups;
    section.querySelector('.list-heading h2').textContent=copy.title;
    section.querySelector('[data-incompat-intro]').textContent=selectedView==='matrix'?copy.matrixIntro:copy.groupsIntro;
    section.querySelector('.incompat-matrix thead th').textContent=copy.enchantment;
    section.querySelector('.incompat-credit').textContent=copy.credit;
    section.querySelector('.incompat-note').textContent=copy.note;
    renderGroups();
  }
  function selectView(view){
    selectedView=view;
    section.querySelectorAll('[data-incompat-view]').forEach(panel=>panel.hidden=panel.dataset.incompatView!==view);
    section.querySelectorAll('[data-incompat-view-button]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.incompatViewButton===view)));
    localize();
  }
  section.querySelectorAll('[data-incompat-view-button]').forEach(button=>button.addEventListener('click',()=>selectView(button.dataset.incompatViewButton)));

  Promise.all([
    fetch('incompatibilities.json?v=2').then(r=>r.json()),
    fetch('incompatibility-groups.json?v=2').then(r=>r.json()),
    fetch('data.json?v=9').then(r=>r.json()),
    fetch('locales.json').then(r=>r.json())
  ]).then(([rows,groupData,data,localeData])=>{
    groups=groupData.filter(group=>/^Group \d+$/.test(group.name));catalogue=data;translations=localeData;
    const names=[...new Set(rows.flatMap(x=>[x.name,...x.conflicts]))].sort((a,b)=>a.localeCompare(b));
    const pairs=new Set(rows.flatMap(x=>x.conflicts.map(y=>`${x.name}\u0000${y}`)));
    const head=section.querySelector('thead tr');
    names.forEach(name=>{const th=document.createElement('th');th.scope='col';th.textContent=name;head.append(th);});
    const body=section.querySelector('tbody');
    names.forEach(rowName=>{const tr=document.createElement('tr'),th=document.createElement('th');th.scope='row';th.textContent=rowName;tr.append(th);names.forEach(colName=>{const td=document.createElement('td');if(pairs.has(`${rowName}\u0000${colName}`)||pairs.has(`${colName}\u0000${rowName}`)){td.textContent='✓';td.title=`${rowName} / ${colName}`;td.className='incompat-hit';}tr.append(td);});body.append(tr);});
    localize();
  });

  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setTimeout(localize,0)));
  function route(){
    const key=location.hash.slice(1).split('/')[0]||'guide',incompatible=key==='incompatibilities',obtaining=key==='obtaining',about=key==='about';
    $('#guide').hidden=incompatible||key==='builds'||obtaining||about;
    $('#builds').hidden=incompatible||key!=='builds'||obtaining;
    $('#about').hidden=!about;
    section.hidden=!incompatible;
    $('#guide-tab').classList.toggle('active',key==='guide');
    $('#builds-tab').classList.toggle('active',key==='builds');
    $('#about-tab').classList.toggle('active',about);
    tab.classList.toggle('active',incompatible);
    if(incompatible)localize();
  }
  window.addEventListener('hashchange',route);route();
})();
