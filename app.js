const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const socials=[['Discord','ABpzNAhj3r','https://discord.com/invite/ABpzNAhj3r','M4 5l5-2 1 2h4l1-2 5 2 3 13-6 3-1-3H8l-1 3-6-3z M8 10v4h2v-4z M14 10v4h2v-4z'],['YouTube','Nanonaitor Gaming','https://www.youtube.com/channel/UCWCYaVYwLEqziWmDrc6p81Q?sub_confirmation=1','M3 4h18v16H3z M10 8v8l7-4z'],['Twitch','nanonaitor','https://www.twitch.tv/nanonaitor','M3 2h20v14l-6 6h-5l-3 2v-4H3z M8 5v11h4v3l3-3h4V5z M11 7h2v6h-2z M16 7h2v6h-2z'],['X','NanonaitorG','https://x.com/NanonaitorG','M3 3h5l5 7 6-7h2l-7 9 8 9h-6l-5-7-6 7H3l7-9z'],['Reddit','Nanonaitor-Gaming','https://www.reddit.com/user/Nanonaitor-Gaming/','M11 7l2-5 7 2-1 2-5-2-1 4c8 0 11 4 9 8-2 6-18 6-20 0-2-4 2-8 9-9z M6 11v3h3v-3z M15 11v3h3v-3z M8 16v2h8v-2z'],['CurseForge','nanonaitor','https://www.curseforge.com/members/nanonaitor/projects','M2 4h20l-3 5h-8l3 4h5l-3 4h-4l-3 5H3l6-8-4-5z']];
document.querySelectorAll('.socials').forEach(n=>n.innerHTML=socials.map(([name,handle,url,d])=>`<a href="${url}" title="${name}: ${handle}" aria-label="${name}: ${handle}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="${d}"/></svg></a>`).join(''));
const fallback='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#7b549f" stroke="#d9b9f3" stroke-width="3" d="M12 8h38v44H12z"/><path fill="#ccbede" d="M12 49h38v7H12z"/><path stroke="#e9d498" stroke-width="3" fill="none" d="M19 14h25v27H19z"/><path fill="#b7e68e" d="m31 19 3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/></svg>');
let data=[],icons={},sounds=[],enabled=false;
const activeSounds=new Set();
const hoveredEnchantments=new WeakSet();
const clickSound='assets/minecraft-click.mp3';
let hoverSound=null;
let pendingHoverBook=null;
let enchantSoundSuppressedUntil=0;
const personal=r=>/^(defenders|nanonaitors_arsenal):/.test(r.id);
const curse=r=>/curse|cursed|pandora|inefficient|bluntness|powerless|instability|drawback|harmful enchantment/i.test(r.name+' '+r.equipment)||r.id==='somanyenchantments:meltdown';
function category(r){if(r.id==='somanyenchantments:ancientsealedcurses')return 'Utility';if(curse(r))return 'Curse';if(/armor|helmet|boots|leggings|chestplate|shield|defender/i.test(r.equipment))return 'Defensive';if(/melee|weapon|sword|bow|combat|attack|arrow|spear|dagger|hammer|flail/i.test(r.equipment))return 'Offensive';return 'Utility';}
function icon(r){return icons[r.id]?.file||icons[r.profiles.Dregora.id]?.file||icons[r.profiles.RLCraft.id]?.file||fallback;}
function image(r){return `<img class="book" src="${esc(icon(r))}" alt="${icon(r)===fallback?'Generic book illustration':esc(r.name)+' book artwork'}" loading="lazy">`;}
function play(){
  if(!enabled||!sounds.length)return;
  try{
    const sound=new Audio(sounds[Math.floor(Math.random()*sounds.length)]);
    sound.volume=.24;
    activeSounds.add(sound);
    const release=()=>activeSounds.delete(sound);
    sound.addEventListener?.('ended',release,{once:true});
    sound.addEventListener?.('error',release,{once:true});
    sound.play().catch(()=>{});
  }catch{}
}
function playClick(){
  if(!enabled)return;
  try{const sound=new Audio(clickSound);sound.volume=.34;sound.play().catch(()=>{});}catch{}
}
function playHover(book){
  if(!enabled||!sounds.length||!book)return;
  if(hoverSound){
    if(pendingHoverBook&&pendingHoverBook!==book)hoveredEnchantments.delete(pendingHoverBook);
    pendingHoverBook=book;
    hoveredEnchantments.add(book);
    return;
  }
  hoveredEnchantments.add(book);
  try{
    const sound=new Audio(sounds[Math.floor(Math.random()*sounds.length)]);
    sound.volume=.24;
    hoverSound=sound;
    activeSounds.add(sound);
    const release=()=>{
      if(hoverSound===sound)hoverSound=null;
      activeSounds.delete(sound);
      const next=pendingHoverBook;
      pendingHoverBook=null;
      if(next?.isConnected)playHover(next);
    };
    sound.addEventListener?.('ended',release,{once:true});
    sound.addEventListener?.('error',release,{once:true});
    sound.play().catch(release);
  }catch{hoverSound=null;}
}
const enchantControl=target=>target.closest?.('#entries .book-wrap,#build-list .build-book');
function suppressEnchantHoverSound(milliseconds=500){enchantSoundSuppressedUntil=Date.now()+milliseconds;}
document.addEventListener('pointerover',event=>{
  const book=enchantControl(event.target);
  if(!book||hoveredEnchantments.has(book)||Date.now()<enchantSoundSuppressedUntil)return;
  if(!event.relatedTarget||!book.contains(event.relatedTarget))playHover(book);
},true);
document.addEventListener('click',event=>{
  const enchant=enchantControl(event.target);
  if(enchant){suppressEnchantHoverSound();play();return;}
  const control=event.target.closest?.('button,a,.button,summary,input[type="checkbox"],select');
  if(control&&!control.disabled)playClick();
},true);
function soundLabel(){$('#sound').textContent='♫ '+t(enabled?'Sound on':'Sound off');}
$('#sound').onclick=()=>{enabled=!enabled;soundLabel();$('#sound').setAttribute('aria-pressed',enabled);};
function chosen(){return ['RLCraft','Dregora'].filter(p=>$(p==='RLCraft'?'#regular':'#dregora').checked);}
function render(){const packs=chosen(),q=$('#search').value.trim().toLocaleLowerCase(),equipmentQuery=$('#equipment').value.trim().toLocaleLowerCase();const rows=data.filter(r=>(r.name.toLocaleLowerCase().includes(q)||localRow(r).name.toLocaleLowerCase().includes(q))&&(r.equipment.toLocaleLowerCase().includes(equipmentQuery)||localRow(r).equipment.toLocaleLowerCase().includes(equipmentQuery))&&(!$('#category').value||category(r)===$('#category').value)&&(!$('#mod').value||r.mod===$('#mod').value)&&($('#curses').checked||!curse(r))&&($('#addons').checked||!personal(r))&&packs.some(p=>$('#inactive').checked?(r.profiles[p].present||r.profiles[p].status.startsWith('Disabled')):r.profiles[p].present&&!r.profiles[p].status.startsWith('Disabled'))).sort((a,b)=>a.mod.localeCompare(b.mod)||localRow(a).name.localeCompare(localRow(b).name,lang));
$('#count').textContent=`${rows.length} ${t('matching enchantments')}`;
$('#entries').innerHTML=rows.map(original=>{const r=localRow(original);const max=packs.map(p=>`${p}: ${r.profiles[p].max===null?t('max unverified'):r.profiles[p].max===0?t('disabled'):t('max ')+r.profiles[p].max}`).join(' · ');return `<article class="enchant"><div class="book-wrap" tabindex="0" aria-label="${esc(r.name)}">${image(r)}</div><div><h3>${esc(r.name)}<span class="max">${esc(max)}</span></h3>${lang!=='en'?`<span class="english-name" lang="en">${esc(original.name)}</span>`:''}<div class="tags"><span class="tag purpose">${t(category(original))}</span><span class="tag">${esc(r.equipment)}</span><span class="tag">${esc(r.mod)}</span></div><p>${esc(r.effect)}</p><div class="differences">${packs.map(p=>`<div class="difference"><b>${p}</b><span class="status">${esc(status(r.profiles[p].status))}</span>${esc(p==='RLCraft'?r.regular:r.dregora)}</div>`).join('')}</div>${lang!=='en'?`<details class="reference"><summary>${t('English technical reference')}</summary><p lang="en">${esc(original.effect)}</p></details>`:''}</div></article>`;}).join('')||`<p class="empty">${t('No enchantments match. Try a broader equipment term or reset the filters.')}</p>`;}
const builds=[
['Dregora 1.1.2b | Max Melee Cursed Edge [by Cathy & Nischhelm]','High-risk damage build. Cursed Edge can kill its user; only use it with serious damage reduction and a tested backup plan.','Swifter Slashes V|Advanced Looting III|Arc Slash III|Advanced Sharpness V|Spellbreaker V|Counter Attack III|Lifesteal II|Cursed Edge V|Fiery Edge II|Adept III|Parry|Purging Blade V|Luck Magnification II|Curse of Possession|Advanced Mending|Upgraded Potentials|Mortalitas VIII|Rune: Piercing Capabilities IV|Ancient Sword Mastery III|Sol’s Blessing V|Butchering V|Combo III|Vampirism II|Subject Math V|Disorientating Blade IV|Smite V|Unbreaking III|Unsheathing II|Atomic Deconstructor II|Unreasonable II|True Strike','Cursed Edge is high risk and high reward. Do not use it without enough damage reduction. Do not pair it with Sinful and an off-hand Sentient Greatcleaver unless you have 60%+ magic-adapted Living/Sentient Armor. Silver armor, a Cross Necklace and natural blocking are alternatives. Consider Ash Destroyer instead.\n• Butchering and Smite contribute extremely little to the weapon and it can be worth it to exclude these to save on experience.\n• Subject PE is superior to Mathematics if you do not want to maintain combat buffs with Wine.','melee'],
['Dregora 1.1.2b | Max Melee Ash Destroyer [by Cathy & Nischhelm]','A fire-focused melee build for players who want sustained burning damage without the self-risk of Cursed Edge.','Swifter Slashes V|Advanced Looting III|Arc Slash III|Advanced Sharpness V|Spellbreaker V|Counter Attack III|Lifesteal II|Ash Destroyer V|Supreme Fire Aspect II|Adept III|Parry|Purging Blade V|Luck Magnification II|Curse of Possession|Advanced Mending|Upgraded Potentials|Mortalitas VIII|Rune: Piercing Capabilities IV|Ancient Sword Mastery III|Sol’s Blessing V|Butchering V|Combo III|Vampirism II|Subject P.E. V|Subject Mathematics V|Disorientating Blade IV|Smite V|Unbreaking III|Unsheathing II|Atomic Deconstructor II|Unreasonable II|True Strike','Ash Destroyer scales with the target’s remaining burn time. Confirm your weapon, fire resistance and target matchups before using it as a general-purpose weapon.\n• Butchering and Smite contribute extremely little to the weapon and it can be worth it to exclude these to save on experience.\n• Subject PE is superior to Mathematics if you do not want to maintain combat buffs with Wine.','melee'],
['Dregora 1.1.2b | Max Bow [by Cathy]','A high-damage ranged foundation focused on draw speed, piercing and ammunition support.','Advanced Power V|Rune: Arrow Piercing IV|Multishot IV|Rapid Fire II|Supreme Flame|Infinity|Advanced Mending|Adept III|Unbreaking III|Range','Choose your arrow and firing branch carefully. Test ammunition behavior in your exact profile before committing Infinity.','bows'],
['Dregora 1.1.2b | Max Sentient Bow [by Cathy]','The Living and Sentient Bow has an Overcharge ability, so this specialized build prioritizes draw speed and damage-heavy arrows.','Power VI|Rune: Arrow Piercing IV|Multishot IV|Rapid Fire II|Supreme Flame|Advanced Mending|Strafe IV|Arrow Recovery III|Unbreaking III|Range','The Overcharge ability is why this build differs from the general ranged build. With draw-speed investment and diamond arrows, it can reach roughly 260 damage per shot in the right setup.','bows'],
['Dregora 1.1.3 | Max Helmet [by Cathy]','Core helmet enchantments are shown first, followed by optional additions.','Advanced Protection|Combat Medic|Unbreaking|Optional:|Respiration|Aqua Affinity|Rune: Revival|Heating',"Heating can make you overheat if you don't have Fire Dragon's Eye or Dragon Transformation for heat immunity.",'helmets'],
['Dregora 1.1.3 | Max Chestplate [by Cathy]','Core chestplate enchantments are shown first, followed by optional additions.','Strengthened Vitality|Advanced Protection|Unbreaking|Mending|Optional:|Inner Berserk|Rune: Revival|Heating',"Heating can make you overheat if you don't have Fire Dragon's Eye or Dragon Transformation for heat immunity.",'chestplates'],
['Dregora 1.1.3 | Max Leggings [by Cathy]','Core leggings enchantments are shown first, followed by optional additions.','Advanced Protection 4|Unbreaking 3|Mending|Optional:|Agility 2|Rune: Revival|Evasion|Heating',"If using Sentient/Living armor, it is recommended to use Advanced Fire Protection 4 instead of Advanced Protection given the armor gets disabled by fire and you take double damage. This enchant at max level negates fire.\n• Heating can make you overheat if you don't have Fire Dragon's Eye or Dragon Transformation for heat immunity.",'platelegs'],
['Dregora 1.1.3 | Max Boots [by Cathy]','Core boots enchantments are shown first, followed by optional additions.','Advanced Protection|Unbreaking|Mending|Optional:|Depth Strider|Light Weight|High Jump|Rune: Revival|Double Jump|Heating',"Feather Falling can't reduce more damage than Advanced Protection. Depth Strider is slower than Underwater Strider at base, however Depth Strider scales with speed.\n• Heating can make you overheat if you don't have Fire Dragon's Eye or Dragon Transformation for heat immunity.",'boots'],
['Dregora 1.1.2b & RLCraft 2.9.3 | Max Axe, Pickaxe & Shovel [by KKHR]','A complete everyday tool build for fast mining, automatic smelting and improved drops.','Advanced Efficiency|Smelter|Fortune|Unbreaking|Mending|Optional:|Magnetic|Tunneling','• Smelter can give undesired drops like charcoal instead of wooden logs.\n• Magnetic does not work on every item.\n• Tunneling can be detrimental for precise building/mining.','axes|pickaxes|shovels'],
['Dregora 1.1.2b & RLCraft 2.9.3 | Max Hoe [by KKHR]','The complete tool build adapted for a hoe, with Moisturized added for farming.','Advanced Efficiency|Smelter|Fortune|Unbreaking|Mending|Moisturized|Optional:|Magnetic|Tunneling','• Smelter can give undesired drops like charcoal instead of wooden logs.\n• Magnetic does not work on every item.\n• Tunneling can be detrimental for precise building/mining.\n• KKHR mentioned this is a redundant build, but I believe someone out there will do it, be a hero - Nanonaitor.','hoes'],
['Dregora 1.1.2b & RLCraft 2.10 | Max Shield [by KKHR]','A durable shield build with optional enchantments for stronger blocking, retaliation and emergency survival.','Natural Blocking|Unbreaking|Mending|Optional:|Empowered Defence|Burning Shield|Rune: Resurrection','• Swinging a weapon is always more efficient than blocking with a shield past early game, so any enchants that boost your shield’s blocking capabilities are not that desirable.\n• Rune: Resurrection functions identically to a Totem of Undying. Since Totems do not give immunity frames, they are nowhere near as effective as life savers as Undershirt or Broken Heart.\n• In Dregora and RLCraft 2.10, Bauble Shields like Cobalt Shield, Obsidian Shield and Ankh Shield work with Natural Blocking, but they do not in RLCraft 2.9.3.','shields']
];
function romanNumber(s){if(!/^[IVXLCDM]+$/i.test(s))return s;const v={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};let n=0,last=0;for(const c of s.toUpperCase().split('').reverse()){const x=v[c];n+=x<last?-x:x;last=Math.max(last,x);}return n;}
function buildLookup(label){const cleaned=label.replace(/\s+(?:[IVXLCDM]+|\d+)$/i,'').trim();const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');const key=norm(cleaned),exact=data.filter(r=>norm(r.name)===key);const original=key==='magnetic'?(exact.find(r=>r.id==='charm:magnetic')||exact[0]):(exact[0]||data.find(r=>norm(r.name).startsWith(key))||data.find(r=>key.startsWith(norm(r.name))));const level=(label.match(/\s+([IVXLCDM]+|\d+)$/i)||[])[1]||'';return {original,r:original&&localRow(original),level:romanNumber(level)};}
let buildFilter='all',buildProfile='all';
const inactiveBuildBooks=new Set();
const buildTypes=[['all','assets/build-filters/hide-all.png'],['melee','assets/build-filters/melee.png'],['axes','assets/build-filters/axes.png'],['pickaxes','assets/build-filters/pickaxes.png'],['shovels','assets/build-filters/shovels.png'],['hoes','assets/build-filters/hoes.png'],['bows','assets/build-filters/bows.png'],['helmets','assets/build-filters/helmet.png'],['chestplates','assets/build-filters/chestplate.png'],['platelegs','assets/build-filters/platelegs.png'],['boots','assets/build-filters/boots.png'],['shields','assets/build-filters/shield.svg']];
const buildCopy={
  en:{types:{all:'Show All',melee:'Swords / Melee',axes:'Axes',pickaxes:'Pickaxes',shovels:'Shovels',hoes:'Hoes',bows:'Bows',helmets:'Helmets',chestplates:'Chestplates',platelegs:'Platelegs',boots:'Boots',shields:'Shields'},both:'Both',notes:'Notes:',empty:'No Builds Found',level:'Level'},
  es:{types:{all:'Mostrar todo',melee:'Espadas / Cuerpo a cuerpo',axes:'Hachas',pickaxes:'Picos',shovels:'Palas',hoes:'Azadas',bows:'Arcos',helmets:'Cascos',chestplates:'Peto',platelegs:'Grebas',boots:'Botas',shields:'Escudos'},both:'Ambos',notes:'Notas:',empty:'No se encontraron configuraciones',level:'Nivel'},
  zh:{types:{all:'显示全部',melee:'剑 / 近战',axes:'斧',pickaxes:'镐',shovels:'锹',hoes:'锄',bows:'弓',helmets:'头盔',chestplates:'胸甲',platelegs:'护腿',boots:'靴子',shields:'盾牌'},both:'两者',notes:'备注：',empty:'未找到配装！',level:'等级'}
};
const buildNoteTranslations={
  es:{
    'Dregora 1.1.2b | Max Melee Cursed Edge [by Cathy & Nischhelm]':'Filo maldito ofrece mucho daño a cambio de un gran riesgo. No lo uses sin suficiente reducción de daño. No lo combines con Sinful y un Sentient Greatcleaver en la mano secundaria a menos que tengas armadura Living/Sentient adaptada a magia al 60% o más. Como alternativa puedes usar armadura de plata, un Cross Necklace y Natural Blocking. Si no, usa la configuración Ash Destroyer.\n• Butchering y Smite aportan muy poco al arma y puede valer la pena excluirlos para ahorrar experiencia.\n• Subject PE es superior a Mathematics si no quieres mantener bonificaciones de combate con Wine.',
    'Dregora 1.1.2b | Max Melee Ash Destroyer [by Cathy & Nischhelm]':'Ash Destroyer aumenta su daño según el tiempo de quemadura restante del objetivo. Comprueba tu arma, resistencia al fuego y enfrentamientos antes de usarla como arma general.\n• Butchering y Smite aportan muy poco al arma y puede valer la pena excluirlos para ahorrar experiencia.\n• Subject PE es superior a Mathematics si no quieres mantener bonificaciones de combate con Wine.',
    'Dregora 1.1.2b | Max Bow [by Cathy]':'Elige con cuidado la flecha y la rama de disparo. Prueba el comportamiento de la munición en tu versión antes de comprometerte con Infinity.',
    'Dregora 1.1.2b | Max Sentient Bow [by Cathy]':'La habilidad Overcharge hace que esta configuración sea distinta a la de distancia general. Con velocidad de tensado y flechas de diamante puede alcanzar aproximadamente 260 de daño por disparo con la preparación adecuada.',
    'Dregora 1.1.3 | Max Helmet [by Cathy]':"Heating puede hacer que te sobrecalientes si no tienes Fire Dragon's Eye o Dragon Transformation para obtener inmunidad al calor.",
    'Dregora 1.1.3 | Max Chestplate [by Cathy]':"Heating puede hacer que te sobrecalientes si no tienes Fire Dragon's Eye o Dragon Transformation para obtener inmunidad al calor.",
    'Dregora 1.1.3 | Max Leggings [by Cathy]':"Si usas armadura Sentient/Living, se recomienda Advanced Fire Protection 4 en lugar de Advanced Protection, porque el fuego desactiva la armadura y hace que recibas el doble de daño. Al nivel máximo, este encantamiento anula el fuego.\n• Heating puede hacer que te sobrecalientes si no tienes Fire Dragon's Eye o Dragon Transformation para obtener inmunidad al calor.",
    'Dregora 1.1.3 | Max Boots [by Cathy]':"Feather Falling no puede reducir más daño que Advanced Protection. Depth Strider es más lento que Underwater Strider como base, pero Depth Strider aumenta con la velocidad.\n• Heating puede hacer que te sobrecalientes si no tienes Fire Dragon's Eye o Dragon Transformation para obtener inmunidad al calor.",
    'Dregora 1.1.2b & RLCraft 2.9.3 | Max Axe, Pickaxe & Shovel [by KKHR]':'• Smelter puede producir resultados no deseados, como carbón vegetal en lugar de troncos.\n• Magnetic no funciona con todos los objetos.\n• Tunneling puede ser perjudicial para construir o minar con precisión.',
    'Dregora 1.1.2b & RLCraft 2.9.3 | Max Hoe [by KKHR]':'• Smelter puede producir resultados no deseados, como carbón vegetal en lugar de troncos.\n• Magnetic no funciona con todos los objetos.\n• Tunneling puede ser perjudicial para construir o minar con precisión.\n• KKHR mencionó que esta configuración es redundante, pero creo que alguien lo hará; sé un héroe - Nanonaitor.',
    'Dregora 1.1.2b & RLCraft 2.10 | Max Shield [by KKHR]':'• Después del inicio del juego, atacar con un arma siempre es más eficiente que bloquear con un escudo, por lo que los encantamientos que mejoran el bloqueo no son tan deseables.\n• Rune: Resurrection funciona igual que un Totem of Undying. Como los tótems no dan fotogramas de inmunidad, son mucho menos eficaces como salvavidas que Undershirt o Broken Heart.\n• En Dregora y RLCraft 2.10, los escudos de abalorio Cobalt Shield, Obsidian Shield y Ankh Shield funcionan con Natural Blocking, pero no en RLCraft 2.9.3.'
  },
  zh:{
    'Dregora 1.1.2b | Max Melee Cursed Edge [by Cathy & Nischhelm]':'诅咒之刃以极高风险换取极高伤害。没有足够减伤时不要使用。除非你的 Living/Sentient 护甲拥有至少 60% 的魔法适应，否则不要同时使用 Sinful 和副手 Sentient Greatcleaver。银制护甲、Cross Necklace 与 Natural Blocking 可作为替代方案；否则请使用 Ash Destroyer 配装。\n• Butchering 与 Smite 对武器的贡献极小，为节省经验可以考虑不添加。\n• 如果不想用 Wine 维持战斗增益，Subject PE 优于 Mathematics。',
    'Dregora 1.1.2b | Max Melee Ash Destroyer [by Cathy & Nischhelm]':'Ash Destroyer 会根据目标剩余燃烧时间提高伤害。把它作为通用武器前，请先确认武器、火焰抗性与目标类型。\n• Butchering 与 Smite 对武器的贡献极小，为节省经验可以考虑不添加。\n• 如果不想用 Wine 维持战斗增益，Subject PE 优于 Mathematics。',
    'Dregora 1.1.2b | Max Bow [by Cathy]':'请仔细选择箭矢和射击路线。在决定使用 Infinity 前，请先测试当前版本中的弹药行为。',
    'Dregora 1.1.2b | Max Sentient Bow [by Cathy]':'Overcharge 能力让这套配装不同于普通远程配装。配合拉弓速度与钻石箭，在合适配置下每发伤害可接近 260。',
    'Dregora 1.1.3 | Max Helmet [by Cathy]':"如果没有 Fire Dragon's Eye 或 Dragon Transformation 提供热量免疫，Heating 可能会让你过热。",
    'Dregora 1.1.3 | Max Chestplate [by Cathy]':"如果没有 Fire Dragon's Eye 或 Dragon Transformation 提供热量免疫，Heating 可能会让你过热。",
    'Dregora 1.1.3 | Max Leggings [by Cathy]':"使用 Sentient/Living 护甲时，建议用 Advanced Fire Protection 4 代替 Advanced Protection，因为火焰会禁用护甲并让你受到双倍伤害。该附魔在最高等级可完全抵消火焰。\n• 如果没有 Fire Dragon's Eye 或 Dragon Transformation 提供热量免疫，Heating 可能会让你过热。",
    'Dregora 1.1.3 | Max Boots [by Cathy]':"Feather Falling 的减伤不会超过 Advanced Protection。Depth Strider 的基础速度低于 Underwater Strider，但会随角色速度提高。\n• 如果没有 Fire Dragon's Eye 或 Dragon Transformation 提供热量免疫，Heating 可能会让你过热。",
    'Dregora 1.1.2b & RLCraft 2.9.3 | Max Axe, Pickaxe & Shovel [by KKHR]':'• Smelter 可能产生不需要的掉落物，例如把木头变成木炭。\n• Magnetic 并非对所有物品都有效。\n• Tunneling 不利于精确建造或采矿。',
    'Dregora 1.1.2b & RLCraft 2.9.3 | Max Hoe [by KKHR]':'• Smelter 可能产生不需要的掉落物，例如把木头变成木炭。\n• Magnetic 并非对所有物品都有效。\n• Tunneling 不利于精确建造或采矿。\n• KKHR 说这套配装有些多余，但我相信总会有人去做——成为英雄吧。— Nanonaitor',
    'Dregora 1.1.2b & RLCraft 2.10 | Max Shield [by KKHR]':'• 游戏前期过后，挥动武器通常比举盾格挡更有效，因此增强格挡能力的附魔并不十分理想。\n• Rune: Resurrection 的作用与 Totem of Undying 完全相同。由于图腾不提供无敌帧，它作为保命手段远不如 Undershirt 或 Broken Heart。\n• 在 Dregora 和 RLCraft 2.10 中，Cobalt Shield、Obsidian Shield、Ankh Shield 等饰品盾可触发 Natural Blocking；在 RLCraft 2.9.3 中则不行。'
  }
};
const localizedBuildNote=(title,note)=>lang==='en'||!note?note:(buildNoteTranslations[lang]?.[title]||note);
const buildTitleTranslations={
  es:{
    'Dregora 1.1.2b | Max Bow [by Cathy]':'Dregora 1.1.2b | Arco máximo [por Cathy]',
    'Dregora 1.1.2b | Max Sentient Bow [by Cathy]':'Dregora 1.1.2b | Arco Sensible máximo [por Cathy]',
    'Dregora 1.1.2b & RLCraft 2.9.3 | Max Axe, Pickaxe & Shovel [by KKHR]':'Dregora 1.1.2b y RLCraft 2.9.3 | Hacha, pico y pala máximos [por KKHR]',
    'Dregora 1.1.2b & RLCraft 2.9.3 | Max Hoe [by KKHR]':'Dregora 1.1.2b y RLCraft 2.9.3 | Azada máxima [por KKHR]',
    'Dregora 1.1.2b & RLCraft 2.10 | Max Shield [by KKHR]':'Dregora 1.1.2b y RLCraft 2.10 | Escudo máximo [por KKHR]'
  },
  zh:{
    'Dregora 1.1.2b | Max Bow [by Cathy]':'Dregora 1.1.2b｜满配弓［Cathy］',
    'Dregora 1.1.2b | Max Sentient Bow [by Cathy]':'Dregora 1.1.2b｜满配感知弓［Cathy］',
    'Dregora 1.1.2b & RLCraft 2.9.3 | Max Axe, Pickaxe & Shovel [by KKHR]':'Dregora 1.1.2b 与 RLCraft 2.9.3｜满配斧、镐与锹［KKHR］',
    'Dregora 1.1.2b & RLCraft 2.9.3 | Max Hoe [by KKHR]':'Dregora 1.1.2b 与 RLCraft 2.9.3｜满配锄［KKHR］',
    'Dregora 1.1.2b & RLCraft 2.10 | Max Shield [by KKHR]':'Dregora 1.1.2b 与 RLCraft 2.10｜满配盾牌［KKHR］'
  }
};
const localizedBuildTitle=title=>lang==='en'?title:(buildTitleTranslations[lang]?.[title]||title);
function renderBuilds(){
  const host=$('#build-list');
  const visibleBuilds=buildFilter==='none'?[]:builds.filter(b=>(buildProfile==='all'||b[0].includes(buildProfile))&&(buildFilter==='all'||b[4].split('|').includes(buildFilter)));
  const words=buildCopy[lang];
  const results=visibleBuilds.map(build=>{const buildIndex=builds.indexOf(build),[title,why,names,note]=build,localizedNote=localizedBuildNote(title,note).replace(/\s*\n\s*•\s*/g,' ').replace(/•\s*/g,''),localizedTitle=localizedBuildTitle(title),titleHtml=esc(localizedTitle).replace(/Sentient Bow|Arco Sensible|感知弓/,'<span class="sentient-bow-highlight">$&</span>');return `<article class="build-card"><h3>${titleHtml}</h3><p>${esc(why)}</p><div class="build-books">${names.split('|').filter(Boolean).map((label,bookIndex)=>{if(label==='Optional:')return `<h4 class="build-section-label">${lang==='es'?'Opcional':lang==='zh'?'可选':'Optional'}</h4>`;const {r,level}=buildLookup(label),key=`${buildIndex}:${bookIndex}`,active=!inactiveBuildBooks.has(key);return r?`<button type="button" class="build-book${active?'':' is-inactive'}" data-build-book="${key}" aria-pressed="${active}" aria-label="${esc(r.name)} — ${active?'active':'inactive'}">${image(r)}<span class="build-name">${esc(r.name)}</span>${level?`<span class="build-level">${words.level} ${esc(level)}</span>`:''}<span class="tooltip">${esc(r.effect)}${r.dregora?'<br><br>Dregora: '+esc(r.dregora):''}</span></button>`:`<span class="build-missing">${esc(label.replace(/\s+(?:[IVXLCDM]+|\d+)$/i,''))}</span>`;}).join('')}</div>${localizedNote?`<p class="build-notes"><strong>${words.notes}</strong> ${esc(localizedNote)}</p>`:''}</article>`;}).join('');
  host.innerHTML=`<div class="build-profile-bar" role="group" aria-label="Pack filters"><button type="button" class="build-filter ${buildProfile==='all'?'active':''}" data-build-profile="all"><img src="assets/build-filters/hide-all.png" alt=""><span>${words.both}</span></button><button type="button" class="build-filter ${buildProfile==='RLCraft'?'active':''}" data-build-profile="RLCraft"><img src="assets/build-filters/rlcraft.png" alt=""><span>RLCraft</span></button><button type="button" class="build-filter ${buildProfile==='Dregora'?'active':''}" data-build-profile="Dregora"><img src="assets/build-filters/dregora.png" alt=""><span>Dregora</span></button></div><div class="build-filter-bar" role="group" aria-label="Build type filters">${buildTypes.map(([key,src])=>`<button type="button" class="build-filter ${buildFilter===key?'active':''}" data-build-filter="${key}"><img src="${src}" alt=""><span>${words.types[key]}</span></button>`).join('')}</div><div class="build-results">${results||`<div class="build-empty"><img src="assets/scared-pose.png" alt=""><p>${words.empty}</p></div>`}</div>`;
  host.querySelectorAll('[data-build-filter]').forEach(b=>{b.onclick=()=>{buildFilter=b.dataset.buildFilter;renderBuilds();};});
  host.querySelectorAll('[data-build-profile]').forEach(b=>{b.onclick=()=>{buildProfile=b.dataset.buildProfile;renderBuilds();};});
  host.querySelectorAll('[data-build-book]').forEach(b=>{b.onclick=()=>{const key=b.dataset.buildBook,active=inactiveBuildBooks.has(key);if(active)inactiveBuildBooks.delete(key);else inactiveBuildBooks.add(key);b.classList.toggle('is-inactive',!active);b.setAttribute('aria-pressed',String(active));b.setAttribute('aria-label',b.getAttribute('aria-label').replace(active?'inactive':'active',active?'active':'inactive'));b.blur();};});
}
function route(){const page=(location.hash.slice(1).split('/')[0]||'guide'),builds=page==='builds',about=page==='about',obtaining=page==='obtaining',incompatibilities=page==='incompatibilities';$('#guide').hidden=builds||about||obtaining||incompatibilities;$('#builds').hidden=!builds;$('#about').hidden=!about;$('#guide-tab').classList.toggle('active',page==='guide');$('#builds-tab').classList.toggle('active',builds);$('#about-tab').classList.toggle('active',about);}
document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>queueMicrotask(()=>translatePage())));
window.addEventListener('load',()=>translatePage());
window.addEventListener('hashchange',route);route();
Promise.all([fetch('data.json?v=7').then(r=>r.json()),fetch('local-assets/icons.json').then(r=>r.ok?r.json():{}).catch(()=>({})),fetch('local-assets/sounds.json?v=1').then(r=>r.ok?r.json():[]).catch(()=>([])),fetch('locales.json?v=2').then(r=>r.json())]).then(([d,i,s,l])=>{data=d;icons=i;sounds=s;locales=l;$('#mod').innerHTML+=[...new Set(data.map(r=>r.mod))].sort().map(m=>`<option>${esc(m)}</option>`).join('');document.querySelectorAll('.filters option').forEach(e=>e.value=e.value);document.querySelectorAll('.filters input,.filters select').forEach(e=>e.addEventListener('input',render));$('#reset').onclick=()=>{document.querySelectorAll('.filters input:not([type=checkbox]),.filters select').forEach(e=>e.value='');['regular','dregora','curses'].forEach(id=>$('#'+id).checked=true);['inactive','addons'].forEach(id=>$('#'+id).checked=false);render();};document.querySelectorAll('[data-language]').forEach(b=>b.onclick=()=>{lang=b.dataset.language;try{localStorage.setItem('atlas-language',lang);}catch{}translatePage();render();renderBuilds();soundLabel();});try{const saved=localStorage.getItem('atlas-language');if(['en','es','zh'].includes(saved))lang=saved;}catch{}$('#sound').disabled=false;translatePage();render();renderBuilds();soundLabel();}).catch(e=>{console.error(e);$('#entries').textContent='The catalogue could not load. Open this site through its local server, not as a file.';});
