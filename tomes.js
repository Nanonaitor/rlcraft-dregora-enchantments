(()=>{
  const $=selector=>document.querySelector(selector);
  const language=()=>document.documentElement.lang.startsWith('es')?'es':document.documentElement.lang.startsWith('zh')?'zh':'en';
  const copy={
    en:{tab:'Tomes',title:'Ancient Tomes',lead:'Tomes, also known as Ancient Tomes, are consumables from the Quark mod that upgrade an enchantment one level above its normal maximum. For example, Fortune III plus its tome becomes Fortune IV. They can only be found as loot around the world.',applies:'Applicable enchantments',apply:'How to apply a tome',steps:['Ensure the item already has the highest normal level of the enchantment, such as Lure III.','Hold the item you want to upgrade in your main hand and the matching tome in your off-hand.','Right-click to consume the tome and raise that enchantment by one level.'],notes:'Important notes',noteItems:['Tomes can be processed in a Disenchantment Table and used as normal enchantments.','Curse Break is the only tome applied through an anvil. It removes the topmost curse from the item.','Sweeping Edge, Fortune and Unbreaking are usually the most useful tome upgrades because the other listed enchantments have stronger alternatives in RLCraft.'],captions:['An Unbreaking III Ancient Tome.','Hold the item in the main hand and its tome in the off-hand.','The finished item has Unbreaking IV.']},
    es:{tab:'Tomos',title:'Tomos antiguos',lead:'Los tomos, también llamados Tomos antiguos, son consumibles del mod Quark que aumentan un encantamiento un nivel por encima de su máximo normal. Por ejemplo, Fortuna III más su tomo se convierte en Fortuna IV. Solo se encuentran como botín por el mundo.',applies:'Encantamientos compatibles',apply:'Cómo aplicar un tomo',steps:['Asegúrate de que el objeto ya tenga el nivel normal máximo del encantamiento, como Atracción III.','Sostén el objeto que quieres mejorar en la mano principal y el tomo correspondiente en la mano secundaria.','Haz clic derecho para consumir el tomo y aumentar el encantamiento un nivel.'],notes:'Notas importantes',noteItems:['Los tomos pueden procesarse en una Mesa de desencantamiento y usarse como encantamientos normales.','Romper maldiciones es el único tomo que se aplica mediante un yunque. Elimina la maldición situada más arriba en el objeto.','Filo arrasador, Fortuna e Irrompibilidad suelen ser las mejoras más útiles, porque los demás encantamientos de la lista tienen alternativas superiores en RLCraft.'],captions:['Un Tomo antiguo de Irrompibilidad III.','Sostén el objeto en la mano principal y el tomo en la secundaria.','El objeto terminado tiene Irrompibilidad IV.'],tomeAlt:'Tomo antiguo'},
    zh:{tab:'古籍',title:'远古附魔书',lead:'古籍（又称远古附魔书）是 Quark 模组中的消耗品，可以把附魔提升到正常上限以上一级。例如，时运 III 使用对应古籍后会变成时运 IV。它们只能作为世界各处的战利品找到。',applies:'可升级的附魔',apply:'古籍使用方法',steps:['确认物品已经拥有该附魔的正常最高等级，例如饵钓 III。','主手持需要升级的物品，副手持对应的古籍。','右键使用古籍，将该附魔提升一级；古籍会被消耗。'],notes:'重要说明',noteItems:['古籍可以通过分解台提取，并作为普通附魔使用。','破咒是唯一必须通过铁砧使用的古籍；它会移除物品上最上方的诅咒。','横扫之刃、时运和耐久通常最实用，因为列表中的其他附魔在 RLCraft 中拥有更强的替代版本。'],captions:['耐久 III 远古附魔书。','主手持物品，副手持对应古籍。','升级完成后物品拥有耐久 IV。'],tomeAlt:'远古附魔书'}
  };
  copy.en.tomeAlt='Ancient Tome';
  const enchantments={
    en:['Sharpness V','Smite V','Bane of Arthropods V','Sweeping Edge III','Fire Aspect II','Knockback II','Looting III','Power V','Punch II','Thorns III','Feather Falling IV','Efficiency V','Fortune III','Lure III','Luck of the Sea III','Unbreaking III','Curse Break'],
    es:['Filo V','Castigo V','Perdición de los artrópodos V','Filo arrasador III','Aspecto ígneo II','Empuje II','Saqueo III','Poder V','Retroceso II','Espinas III','Caída de pluma IV','Eficiencia V','Fortuna III','Atracción III','Suerte marina III','Irrompibilidad III','Romper maldiciones'],
    zh:['锋利 V','亡灵杀手 V','节肢杀手 V','横扫之刃 III','火焰附加 II','击退 II','抢夺 III','力量 V','冲击 II','荆棘 III','摔落缓冲 IV','效率 V','时运 III','饵钓 III','海之眷顾 III','耐久 III','破咒']
  };
  const tab=document.createElement('a');tab.id='tomes-tab';tab.href='#tomes';
  const aboutTab=$('#about-tab'),sound=$('#sound');
  $('.tabs').insertBefore(tab,aboutTab||sound);
  const section=document.createElement('section');section.id='tomes';section.hidden=true;
  $('.tabs').after(section);
  const renderTomes=()=>{
    const c=copy[language()];tab.textContent=c.tab;
    section.innerHTML=`<div class="list-heading"><h2>${c.title}</h2><span>Quark</span></div><article class="tomes-document"><div class="tomes-intro"><img src="assets/tomes/ancient-tome.png" alt="${c.tomeAlt}"><p class="tomes-lead">${c.lead}</p></div><h3>${c.applies}</h3><ul class="tome-enchants">${enchantments[language()].map(name=>`<li>${name}</li>`).join('')}</ul><h3>${c.apply}</h3><ol class="tome-steps">${c.steps.map(step=>`<li>${step}</li>`).join('')}</ol><h3>${c.notes}</h3><ul class="tome-notes">${c.noteItems.map(note=>`<li>${note}</li>`).join('')}</ul><div class="tome-gallery"><figure><img src="assets/tomes/unbreaking-3-tome.png" alt="${c.captions[0]}"><figcaption>${c.captions[0]}</figcaption></figure><figure><img src="assets/tomes/main-hand-off-hand.png" alt="${c.captions[1]}"><figcaption>${c.captions[1]}</figcaption></figure><figure><img src="assets/tomes/unbreaking-4-result.png" alt="${c.captions[2]}"><figcaption>${c.captions[2]}</figcaption></figure></div></article>`;
  };
  const blueCopy={en:['Blue0666','Chinese Translator','A dedicated programmer who has translated RLCraft for the Chinese community and helped translate this site.'],es:['Blue0666','Traductor al chino','Un programador dedicado que ha traducido RLCraft para la comunidad china y también ayudó con las traducciones de este sitio.'],zh:['Blue0666','中文翻译','一位认真负责的程序员，为中文社区翻译并推广了 RLCraft，也协助完成了本网站的翻译。']};
  const renderBlue=()=>{
    document.querySelector('[data-about-blue0666]')?.remove();
    const contributors=$('#about-content .about-section');if(!contributors)return;
    const [name,title,description]=blueCopy[language()];
    contributors.insertAdjacentHTML('beforeend',`<article class="about-row" data-about-blue0666><img class="about-avatar" src="assets/blue0666-head.png" alt="${name}"><div><h4>${name} <span>| ${title}</span></h4><p>${description}</p></div></article>`);
  };
  const route=()=>{
    const active=location.hash.slice(1).split('/')[0]==='tomes';section.hidden=!active;tab.classList.toggle('active',active);
    if(active){['guide','builds','obtaining','incompatibilities','about'].forEach(id=>{const node=document.getElementById(id);if(node)node.hidden=true;});}
  };
  const refresh=()=>{renderTomes();queueMicrotask(renderBlue);route();};
  const aboutContent=$('#about-content');
  if(aboutContent)new MutationObserver(()=>{if(!aboutContent.querySelector('[data-about-blue0666]'))renderBlue();}).observe(aboutContent,{childList:true});
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setTimeout(refresh,50)));
  window.addEventListener('hashchange',route);window.addEventListener('load',refresh);refresh();
})();
