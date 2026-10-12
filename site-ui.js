/* Presentation layer: catalogue data stays separate from the interface. */
(() => {
  const translations = {
    en:{enchants:'Enchantments',builds:'Builds',about:'About',visits:'Times Visited:',subtitle:'Every single enchantment in RLCraft & Dregora Explained.',mods:'Added by',all:'All on',none:'All off',xp:'Base book application',levels:'Levels',level:'Book level',variable:'Cost unavailable',xpNote:'Fresh book → compatible item. Prior anvil work, repairs, renaming and other enchantments add to the total. This is not the enchanting-table requirement.',absent:'Not available here',disabled:'Disabled',unknown:'Unverified',art:'No matching artwork in this pack',support:'If this guide helped you, watching a video or leaving a tip helps me keep making things for the community.',creditTitle:'Made with help from the community',sound:'Sound',on:'on',off:'off'},
    es:{enchants:'Encantamientos',builds:'Recomendaciones',about:'Acerca de',visits:'Veces visitado:',subtitle:'Todos los encantamientos de RLCraft y Dregora, explicados.',mods:'Mod de origen',all:'Activar todos',none:'Desactivar todos',xp:'Aplicación base del libro',levels:'Niveles',level:'Nivel del libro',variable:'Coste no disponible',xpNote:'Libro nuevo → objeto compatible. El trabajo previo de yunque, reparaciones, nombres y otros encantamientos aumentan el total. No es el requisito de la mesa de encantamientos.',absent:'No está disponible',disabled:'Desactivado',unknown:'Sin verificar',art:'Sin ilustración correspondiente',support:'Si esta guía te ayudó, ver un video o dejar una propina me ayuda a seguir creando para la comunidad.',creditTitle:'Hecho con ayuda de la comunidad',sound:'Sonido',on:'activado',off:'desactivado'},
    zh:{enchants:'附魔',builds:'配装',about:'关于',visits:'访问次数：',subtitle:'RLCraft 与 Dregora 的每一种附魔，逐一详解。',mods:'所属模组',all:'全部开启',none:'全部关闭',xp:'附魔书基础应用费用',levels:'级经验',level:'附魔书等级',variable:'费用不可用',xpNote:'全新附魔书 → 适用物品。先前铁砧操作、修理、重命名及其他附魔会增加总费用。这不是附魔台等级要求。',absent:'此处不可用',disabled:'已禁用',unknown:'未核实',art:'没有匹配插画',support:'如果这份指南帮到了你，观看视频或留下小额支持，都能帮助我继续为社区创作。',creditTitle:'感谢社区的帮助',sound:'音效',on:'开启',off:'关闭'}
  };
  const copy=()=>translations[lang];
  const roman=n=>{if(!Number.isInteger(n)||n<1)return '—';let s='';for(const [v,t] of [[1000,'M'],[900,'CM'],[500,'D'],[400,'CD'],[100,'C'],[90,'XC'],[50,'L'],[40,'XL'],[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']])while(n>=v){s+=t;n-=v;}return s;};
  const clean=text=>String(text||'').split(/(?<=[.!?。！？])\s*|(?<=。)/).filter(s=>!/(?:incompatib|conflict|cannot stack|competes with|compete with|can coexist|can be paired|compatibility restrictions|compatibility rules|incompatible|compatible con|incompatibilidad|no combines|no puede combinar|互斥|冲突|兼容规则|可.*共存|不能叠加)/i.test(s)).join(' ').replace(/See the detailed comparison below\.?|See detailed comparison[^.]*\./gi,'').replace(/(\d)\.\s+(?=\d)/g,'$1.').trim();
  function guideTone(text){
    let s=String(text||'');
    if(lang==='en') s=s
      .replace(/the checked regular (?:profiles?|versions?)/gi,'RLCraft')
      .replace(/the checked Dregora (?:profiles?|versions?)/gi,'Dregora')
      .replace(/\bRLCrafts\b/g,'RLCraft').replace(/\bRLC:/g,'RLCraft:')
      .replace(/^Disabled\. In Dregora,/i,'RLCraft is disabled. In Dregora,')
      .replace(/The versions config is/gi,'The chance is')
      .replace(/profile config/gi,'enchantment rules')
      .replace(/configured choices/gi,'possible summons')
      .replace(/configured list/gi,'list above')
      .replace(/configured three levels/gi,'three levels')
      .replace(/configured levels/gi,'available levels')
      .replace(/configured velocity value/gi,'fixed velocity multiplier')
      .replace(/configured falling-speed cutoff is 999999999/gi,'falling-speed limit is effectively unrestricted')
      .replace(/configured wall-run speed/gi,'wall-run speed')
      .replace(/Dregora sets the duration value to 2\.0, which the code converts to an 80-controller-tick limit/gi,'In Dregora, wall-running lasts for up to 80 ticks (4 seconds)')
      .replace(/The configured rules do not prioritize damaged items/gi,'Unlike normal Mending, Advanced Mending does not prioritize damaged items')
      .replace(/Dregora is configured to I/gi,'Dregora provides only level I')
      .replace(/The Dregora configuration uses 10% per level/gi,'In Dregora, each level reduces supported cooldowns by 10%')
      .replace(/with RLMixins overhaul,\s*/gi,'')
      .replace(/RLMixins(?:'s)?/g,'RLCraft')
      .replace(/checked patches give/gi,'The enchantment grants')
      .replace(/The The enchantment/gi,'The enchantment')
      .replace(/mods stun-immunity check/gi,'Stun-immunity rules')
      .replace(/Uses the older broad damage-enchantment incompatibilities/gi,'Uses RLCraft’s broader damage-enchantment restrictions')
      .replace(/The older implementation describes sword proficiency and enhanced damage-enchantment effects/gi,'RLCraft’s disabled form would improve sword proficiency and damage enchantments')
      .replace(/Uses the older burning-target damage bonus rather than Dregora's remaining-fire-duration scaling/gi,'Adds a fixed bonus against burning targets instead of scaling with remaining burn time')
      .replace(/Older weather logic can penalize damage outside favorable conditions/gi,'Reduces damage when the required weather is absent')
      .replace(/Reworked into a clear-weather bonus, with an extra benefit when exposed to the sky; unfavorable weather does not use the old curse-like penalty design/gi,'Adds damage in clear weather and adds a larger bonus under open sky, with no bad-weather damage penalty')
      .replace(/Uses the older critical-event implementation and compatibility rules/gi,'Uses RLCraft’s critical-hit rules')
      .replace(/Reworked critical behavior/gi,'Uses Dregora’s critical-hit calculation')
      .replace(/Old Freezing applies/gi,'Applies')
      .replace(/Cryogenic is the replacement (?:implementation|mechanics):/gi,'Cryogenic applies')
      .replace(/Its chances and scaling differ from RLCraft’s Freezing/gi,'Its trigger chances and scaling are different from RLCraft')
      .replace(/Older mechanics has special execution\/critical conditions; avoid assuming the rewritten Dregora trigger/gi,'Uses its own execution and critical-hit conditions')
      .replace(/Removes the older jump-boost requirement\/design and improves head-drop handling/gi,'Does not require Jump Boost and can produce supported mob heads')
      .replace(/Part of older broad damage-enchantment exclusions/gi,'Uses RLCraft’s broader damage-enchantment restrictions')
      .replace(/the old Weakness\/Slowness package is gone/gi,'it applies Nausea and, at III+, Blindness instead of Weakness and Slowness')
      .replace(/Uses the updated fire-aspect integration and a burning-target bypass handler/gi,'Applies fire and can bypass a burning target’s hurt-immunity window')
      .replace(/Uses the older debuff implementation/gi,'Uses RLCraft’s debuff set and durations')
      .replace(/Older target eligibility is narrower/gi,'Affects a narrower group of illager-related targets')
      .replace(/Also recognizes witches and vexes in the rework/gi,'Also affects witches and vexes')
      .replace(/Dummy healing and other interactions may be patched/gi,'Healing is based on the final eligible damage dealt')
      .replace(/Displayed as Lunar's Blessing\. Older time\/weather logic can reduce damage in unfavorable conditions/gi,"Displayed as Lunar's Blessing; it increases night damage and can reduce damage during the day")
      .replace(/Luna's Blessing is the reworked name\. Night damage bonus is larger with sky exposure; the old daytime damage penalty design is removed/gi,"Displayed as Luna's Blessing; the night bonus is larger under open sky and there is no daytime damage penalty")
      .replace(/Older version is an explosive retaliation enchantment/gi,'Can retaliate with an explosion when the wearer is hit')
      .replace(/Reclassified as a curse in the rework/gi,'Is a curse and severely damages the armor when it triggers')
      .replace(/Uses the older chance\/handling (?:implementation|mechanics)/gi,'Uses RLCraft’s parry chance and knockback rules')
      .replace(/Older bonus behavior can differ significantly in scaling/gi,'Scales its bonus from the target’s armor value')
      .replace(/RLCraft uses its older level-scaled Weakness\/Slowness durations/gi,'RLCraft applies level-scaled Weakness and Slowness')
      .replace(/Older mechanics uses combat compatibility patches/gi,'Converts 25% of the hit per level into armor-piercing damage')
      .replace(/Uses updated damage-source piercing integration/gi,'Makes 25% of the original hit per level bypass armor')
      .replace(/Older Glowing starts at 10 seconds and can be extended/gi,'Glowing begins at 10 seconds and can be extended by later hits')
      .replace(/This version replaces the default AI-task-count effect:\s*/gi,'')
      .replace(/at the listed level each qualifying category contributes \+5/gi,'At level V, each qualifying category contributes +5')
      .replace(/older intelligence\/AI-related damage specialist, handled by (?:the combat overhaul|RLCraft)/gi,'Deals bonus damage based on the target’s AI complexity')
      .replace(/The replacement mechanics, if, would scale damage with target-name length; do not recommend it as normally available here/gi,'Disabled')
      .replace(/the combat overhaul rewards/gi,'Dregora rewards')
      .replace(/at the listed level/gi,'at level V')
      .replace(/Uses the older Subject mechanics and combat patch/gi,'Uses RLCraft’s Subject P.E. effect set')
      .replace(/An older Subject enchantment that can cause explosions on attacks/gi,'Can cause an explosion on attack')
      .replace(/Removed from the new the enchantment registry/gi,'Disabled')
      .replace(/Reworked storm bonus with additional benefit from sky exposure, rather than the old unfavorable-weather penalty design/gi,'Adds damage during thunderstorms, with a larger bonus under open sky and no damage penalty outside storms')
      .replace(/Older weather logic can penalize attacks outside preferred conditions/gi,'Reduces damage when the required weather is absent')
      .replace(/The enchantment ID\/name changed in the rework; Dregora's resource override displays Swift Swimming as Underwater Strider/gi,'RLCraft displays it as Swift Swimming; Dregora displays it as Underwater Strider')
      .replace(/The legacy logic is unreliable in Survival because of its full-health\/attack timing conditions/gi,'Its trigger requires the target to be at full health and uses stricter attack timing')
      .replace(/uses combat compatibility patches/gi,'converts 25% of the hit per level into armor-piercing damage')
      .replace(/Uses updated damage-mechanic piercing integration/gi,'Makes 25% of the original hit per level bypass armor')
      .replace(/Uses the Subject and combat patch/gi,'Uses RLCraft’s Subject P.E. effect set')
      .replace(/\b(?:old|older|legacy|modern|reworked|implementation|source audit|source-reviewed|test notes?|snapshot)\b/gi,'')
      .replace(/combat handler/gi,'combat rules').replace(/\bhandlers?\b/gi,'rules')
      .replace(/\bimplemented by other mods\b/gi,'provided by other gameplay systems')
      .replace(/\bimplementations?\b/gi,'mechanics')
      .replace(/Not an? registered enchantment\s*Disabled\.?/gi,'Disabled.')
      .replace(/Disabled\s+Disabled\.?/gi,'Disabled.')
      .replace(/Disabled\.\s*;/gi,'Disabled;')
      .replace(/\bAND\b/g,'and').replace(/^Chance\s*=\s*/i,'The chance is ')
      .replace(/Do not use Dregora's ([^.]+) for this version\./gi,"RLCraft does not use Dregora's $1.");
    if(lang==='es') s=s
      .replace(/el perfil regular marcado/gi,'RLCraft').replace(/el perfil Dregora marcado/gi,'Dregora').replace(/\bRLC:/g,'RLCraft:')
      .replace(/^Desactivado\. En Dregora,/i,'En RLCraft está desactivado. En Dregora,')
      .replace(/No está registrado y activado en este perfil\.?/gi,'Desactivado.')
      .replace(/en este perfil/gi,'en esta versión')
      .replace(/la configuración del perfil es/gi,'la probabilidad es')
      .replace(/la configuración del perfil/gi,'las reglas del encantamiento')
      .replace(/las reglas del encantamiento es/gi,'la probabilidad es')
      .replace(/las reglas configuradas/gi,'las reglas del encantamiento')
      .replace(/los niveles configurados/gi,'los niveles disponibles')
      .replace(/las opciones configuradas/gi,'las invocaciones posibles')
      .replace(/los parches marcados otorgan/gi,'El encantamiento otorga')
      .replace(/parches? de compatibilidad de combate instalados/gi,'reglas de combate de RLCraft')
      .replace(/parche RLMixins/gi,'reglas de combate').replace(/RLMixins/gi,'RLCraft')
      .replace(/\bparches?\b/gi,'reglas').replace(/la fuente crea/gi,'el encantamiento crea')
      .replace(/Multishot es mutuamente excluyente con Blast en la fuente/gi,'Multishot no se puede combinar con Blast')
      .replace(/la configuración de Dregora/gi,'Dregora').replace(/implementación/gi,'mecánica')
      .replace(/parches comprobados/gi,'reglas del encantamiento').replace(/código convierte/gi,'juego convierte')
      .replace(/fuente verificada/gi,'mecánica verificada').replace(/\bthe enchantment\b/gi,'el encantamiento')
      .replace(/Desorienta a los enemigos\. Ver comparación detallada; el antiguo borrador llamaba incorrectamente Lentitud, Fatiga Minera\./gi,'Desorienta a los enemigos; los efectos cambian entre RLCraft y Dregora.')
      .replace(/No lo confundas con el vampirismo de el encantamiento/gi,'No lo confundas con Vampirismo')
      .replace(/Es posible que se parcheen la curación ficticia y otras interacciones\./gi,'La curación se calcula a partir del daño final válido.')
      .replace(/La mecánica anterior de RLCraft aplica/gi,'RLCraft aplica')
      .replace(/Usa las restricciones amplias de daño antiguas/gi,'Usa restricciones de daño más amplias')
      .replace(/La nueva mecánica acumula perjuicios por probabilidad y puede congelar; no reutilices todas las fórmulas antiguas/gi,'Acumula perjuicios con una probabilidad por golpe y puede congelar; sus probabilidades y escalado son distintos a RLCraft')
      .replace(/Usa condiciones antiguas especiales de ejecución y críticos/gi,'Usa sus propias condiciones de ejecución y golpe crítico')
      .replace(/Usa probabilidades y manejo antiguos/gi,'Usa las probabilidades y el empuje propios de RLCraft')
      .replace(/RLCraft utiliza sus duraciones de Debilidad\/Lentitud escaladas en niveles más antiguas/gi,'RLCraft aplica Debilidad y Lentitud con duración según el nivel')
      .replace(/El ID\/nombre del encantamiento cambió en la reelaboración; La anulación de recursos de Dregora muestra Swift Swimming como Underwater Strider/gi,'RLCraft lo muestra como Swift Swimming; Dregora lo muestra como Underwater Strider')
      .replace(/\b(?:antiguo|antigua|antiguos|antiguas|anterior|anteriores|versión anterior|rediseñado|rediseñada|reelaborado|reelaborada|reelaboración|implementación|código|borrador|prueba|perfil)\b/gi,'');
    if(lang==='zh') s=s
      .replace(/检查过的常规配置文件/g,'RLCraft').replace(/选中的 Dregora 配置文件/g,'Dregora')
      .replace(/^已禁用。\s*在 Dregora[，,]/,'RLCraft 已禁用。Dregora 中，')
      .replace(/此配置未作为启用附魔注册/g,'已禁用')
      .replace(/由安装的战斗兼容补丁处理/g,'使用 RLCraft 的战斗规则')
      .replace(/检查过的补丁给予/g,'该附魔提供').replace(/已检查的补丁给予/g,'该附魔提供')
      .replace(/配置文件设定/g,'附魔规则').replace(/配置的规则/g,'附魔规则')
      .replace(/配置的选项/g,'可能召唤的生物').replace(/配置的等级/g,'可用等级')
      .replace(/补丁/g,'机制').replace(/处理器/g,'机制').replace(/实现方式/g,'机制').replace(/实现/g,'机制')
      .replace(/代码将/g,'游戏会将').replace(/检查过的补丁/g,'附魔规则').replace(/the enchantment/g,'附魔系统')
      .replace(/旧名 Combat Veterancy，已禁用/g,'RLCraft 中名为 Combat Veterancy，并已禁用')
      .replace(/重制后属于诅咒/g,'在 Dregora 中属于诅咒')
      .replace(/旧版|旧的|旧机制|重制版|重新设计|测试说明|配置文件/g,'');
    return s.replace(/\bDisabled\.\s*Disabled\.?/gi,'Disabled.').replace(/\s+([,.;:])/g,'$1').replace(/\.{2,}/g,'.').replace(/\s{2,}/g,' ').trim();
  }
  const natural=text=>guideTone(String(text||'').replace(/\bpercent\b/gi,'%').replace(/(\d+)\s*\.\s*(\d+)/g,'$1.$2').replace(/\b(\d+(?:\.\d+)?)\s+times\b/gi,'x$1').replace(/\btimes\b/gi,'x').replace(/\bprofiles?\b/gi,'versions').replace(/(?:the )?(?:installed )?(?:Better Survival|So Many Enchantments) source/gi,'the enchantment').replace(/Better Survival Stun/gi,'Stun').replace(/\b(?:So Many Enchantments|Better Survival|SME)\b/gi,'the enchantment').replace(/\bDefiled Lands\b/gi,'supported').replace(/\bmod(?:'s)?\b/gi,'enchantment').replace(/\bevent hook\b/gi,'enchantment rules').replace(/\bsource\/config snapshot\b/gi,'available mechanics').replace(/\bsource\b/gi,'mechanic').replace(/\binstalled\b/gi,'available'));
  const applicableList=row=>{const id=row.id||'';if(/arrowrecovery$/.test(id))return ['Normal arrows'];if(/:diamonds$/.test(id))return ['Coal ore','Iron ore','Gold ore','Redstone ore','Lapis ore','Diamond ore','Emerald ore','Nether Quartz ore','Modded ore blocks using the same ore class'];if(/:tunneling$/.test(id))return ['Non-air blocks the held digging tool can harvest','Blocks within the (level + 1) / 2 block circular slice','Tile-entity blocks when the Dregora exclusion setting allows them'];if(/haunting_curse$/.test(id))return ['Zombie','Skeleton','Witch','Enderman','Spectre','Banshee','Reaper','Wraith'];if(/wateraspect$/.test(id))return ['Enderman','Blaze','Magma Cube'];if(/rune_magicalblessing$/.test(id))return ['Non-instant negative potion effects','Instant negative potion effects','Main-hand sword hits','Witch targets receive the reduced converted packet'];if(/pandorascurse$/.test(id))return data.filter(item=>item.id!==id&&curse(item)&&!personal(item)&&Object.values(item.profiles).some(profile=>profile.present)).map(item=>item.name).sort((a,b)=>a.localeCompare(b));if(/ancientsealedcurses$/.test(id))return ['Curse of Binding','Curse of Vanishing','Ascetic','Bluntness','Breached Plating','Cursed Edge','Curse of Decay','Curse of Holding','Curse of Inaccuracy','Curse of Possession','Curse of Vulnerability','Dragging','Extinguish','Heavy Weight','Inefficient','Instability','Meltdown','Powerless','Rusted','Unpredictable','Curse of Clumsiness','Curse of Harming','Curse of Haunting','Curse of Rusting'];return []};
  const applicableTerms={es:{'Normal arrows':'Flechas normales','Coal ore':'Mena de carbón','Iron ore':'Mena de hierro','Gold ore':'Mena de oro','Redstone ore':'Mena de redstone','Lapis ore':'Mena de lapislázuli','Diamond ore':'Mena de diamante','Emerald ore':'Mena de esmeralda','Nether Quartz ore':'Mena de cuarzo del Nether','Modded ore blocks using the same ore class':'Menas de mods que usan la misma clase de bloque','Non-air blocks the held digging tool can harvest':'Bloques no vacíos que la herramienta equipada puede recolectar','Blocks within the (level + 1) / 2 block circular slice':'Bloques dentro del corte circular de (nivel + 1) / 2 bloques','Tile-entity blocks when the Dregora exclusion setting allows them':'Bloques con entidad cuando Dregora permite incluirlos',Zombie:'Zombi',Skeleton:'Esqueleto',Witch:'Bruja',Enderman:'Enderman',Spectre:'Espectro',Banshee:'Banshee',Reaper:'Segador',Wraith:'Espectro iracundo','Non-instant negative potion effects':'Efectos de poción negativos no instantáneos','Instant negative potion effects':'Efectos de poción negativos instantáneos','Main-hand sword hits':'Golpes con espada en la mano principal','Witch targets receive the reduced converted packet':'Las brujas reciben el daño convertido reducido'},zh:{'Normal arrows':'普通箭','Coal ore':'煤矿石','Iron ore':'铁矿石','Gold ore':'金矿石','Redstone ore':'红石矿石','Lapis ore':'青金石矿石','Diamond ore':'钻石矿石','Emerald ore':'绿宝石矿石','Nether Quartz ore':'下界石英矿石','Modded ore blocks using the same ore class':'使用同一矿石方块类型的模组矿石','Non-air blocks the held digging tool can harvest':'手持挖掘工具能够采集的非空气方块','Blocks within the (level + 1) / 2 block circular slice':'位于（等级 + 1）/ 2 方块圆形截面内的方块','Tile-entity blocks when the Dregora exclusion setting allows them':'Dregora 排除设置允许时的方块实体',Zombie:'僵尸',Skeleton:'骷髅',Witch:'女巫',Enderman:'末影人',Spectre:'幽灵',Banshee:'报丧女妖',Reaper:'死神',Wraith:'怨灵','Non-instant negative potion effects':'非瞬时负面药水效果','Instant negative potion effects':'瞬时负面药水效果','Main-hand sword hits':'主手剑攻击','Witch targets receive the reduced converted packet':'女巫承受降低后的转换伤害'}};
  const applicableName=x=>{if(lang==='en')return x;const enchant=data.find(r=>r.name===x);return enchant?localRow(enchant).name:(applicableTerms[lang]?.[x]||x);};
  const applicableHtml=row=>{const list=applicableList(row);if(!list.length)return '';const id=row.id||'',isCurses=/(?:ancientsealedcurses|pandorascurse)$/.test(id),isMobs=/wateraspect$/.test(id);const summary=isCurses?(lang==='es'?'Ver maldiciones aplicables':lang==='zh'?'查看可施加的诅咒':'See applicable curses'):isMobs?(lang==='es'?'Ver monstruos afectados':lang==='zh'?'查看受影响的怪物':'See affected monsters'):(lang==='es'?'Ver objetos aplicables':lang==='zh'?'查看适用项目':'See applicable items');return `<details class="applicable-list"><summary>${summary}</summary><ul>${list.map(x=>`<li>${esc(applicableName(x))}</li>`).join('')}</ul></details>`;};
  const detailHtml=text=>String(text||'').split(/\n+/).map(part=>natural(clean(part))).filter(Boolean).map(part=>`<p>${esc(part)}</p>`).join('');
  const modState=new Map();
  const lvlState=new Map();
  let modsBuilt=false,animationNodes=[];
  const flags={en:['flag-us.png','English'],es:['flag-mx.png','Español'],zh:['flag-cn.png','简体中文']};
  document.querySelectorAll('[data-language]').forEach(b=>{const [file,label]=flags[b.dataset.language];b.innerHTML=`<img src="assets/${file}" alt=""> ${label}`;});
  $('.brand span').innerHTML='Made by Nanonaitor<small>A player by choice, a teacher by heart.</small>';
  $('.hero .eyebrow').remove();
  $('.hero h1').innerHTML='<img class="pack-title-art" src="assets/rlcraft-dregora-title.png" alt="RLCraft and Dregora"><img class="title-art" src="assets/enchantments-title.png" alt="Enchantments">';
  const artRow=document.createElement('div');artRow.className='support-community-art';artRow.innerHTML='<img src="assets/enchant-table.png" alt="Enchanting table"><img src="assets/dead-family-guy.png" alt="">';$('.credits').before(artRow);
  $('.hero-meta').remove();
  $('.scope').remove();
  const oldMod=$('#mod');oldMod.parentElement.hidden=true;
  const personalFilter=$('#addons');if(personalFilter){personalFilter.checked=false;personalFilter.closest('label')?.setAttribute('hidden','');}
  const equipmentIcons={'Armor':'🪖 Armor','Helmet':'🪖 Helmet','Boots':'👢 Boots','Melee':'⚔️ Melee','Bow':'🏹 Bow','Tools':'⛏️ Tools','Shield':'🛡️ Shield','Fishing':'🐟 Fishing'};
  $('#equipment').setAttribute('aria-label','Equipment');
  const gearList=$('#gear');gearList?.querySelectorAll('option').forEach(o=>{const value=o.value;o.value=equipmentIcons[value]||'⛏️ '+value;});
  $('#category').querySelectorAll('option').forEach(o=>{const value=o.value||o.textContent.trim();if(value==='Offensive'){o.value='Offensive';o.textContent='⚔️ Offensive';}if(value==='Defensive'){o.value='Defensive';o.textContent='🛡️ Defensive';}if(value==='Utility'){o.value='Utility';o.textContent='🧰 Utility';}if(value==='Curse'){o.value='Curse';o.textContent='☠️ Curse';}});
  function localizeFilterControls(){const labels={en:{Armor:'Armor',Boots:'Boots',Helmet:'Helmet',Melee:'Melee',Bow:'Bow',Tools:'Tools',Shield:'Shield',Fishing:'Fishing',Offensive:'Offensive',Defensive:'Defensive',Utility:'Utility',Curse:'Curse'},es:{Armor:'Armadura',Boots:'Botas',Helmet:'Casco',Melee:'Cuerpo a cuerpo',Bow:'Arco',Tools:'Herramientas',Shield:'Escudo',Fishing:'Pesca',Offensive:'Ofensivo',Defensive:'Defensivo',Utility:'Utilidad',Curse:'Maldición'},zh:{Armor:'盔甲',Boots:'靴子',Helmet:'头盔',Melee:'近战',Bow:'弓',Tools:'工具',Shield:'盾牌',Fishing:'钓鱼',Offensive:'进攻',Defensive:'防御',Utility:'实用',Curse:'诅咒'}}[lang];const icons={Armor:'🪖',Boots:'👢',Helmet:'🪖',Melee:'⚔️',Bow:'🏹',Tools:'⛏️',Shield:'🛡️',Fishing:'🐟',Offensive:'⚔️',Defensive:'🛡️',Utility:'🧰',Curse:'☠️'},keys=['Armor','Boots','Helmet','Melee','Bow','Tools','Shield','Fishing'],equipment=$('#equipment'),options=[...(gearList?.querySelectorAll('option')||[])],selected=options.find((o,i)=>o.value===equipment.value)?.dataset.equipmentKey;options.forEach((o,i)=>{const key=o.dataset.equipmentKey||keys[i];o.dataset.equipmentKey=key;o.value=`${icons[key]} ${labels[key]}`;});if(selected)equipment.value=`${icons[selected]} ${labels[selected]}`;$('#category').querySelectorAll('option').forEach(o=>{const key=o.value;if(labels[key])o.textContent=`${icons[key]} ${labels[key]}`;});}
  const modPanel=document.createElement('fieldset');modPanel.className='mod-panel';modPanel.innerHTML='<legend></legend><div class="mod-actions"><button type="button" data-mod-action="all"></button><button type="button" data-mod-action="none"></button></div><div class="mod-options"></div>';
  $('.filters').after(modPanel);
  modPanel.querySelectorAll('button').forEach(b=>b.onclick=()=>{modState.forEach((_,key)=>modState.set(key,b.dataset.modAction==='all'));syncMods();render();});
  function syncMods(){modPanel.querySelectorAll('input').forEach(i=>i.checked=modState.get(i.value));}
  function setupMods(){if(modsBuilt)return;modsBuilt=true;const active=new Set(['Better Survival','Charm','Defiled Lands','Locks','Minecraft / Vanilla','Simple Difficulty','So Many Enchantments','Spartan Shields','Spartan Weaponry','Switch-Bow','Grappling Hook Mod']);const names=[...new Set(data.map(r=>r.mod))].filter(m=>!/^Defenders|^Nanonaitor/i.test(m)).sort((a,b)=>Number(active.has(b))-Number(active.has(a))||a.localeCompare(b));names.forEach(m=>modState.set(m,active.has(m)));modPanel.querySelector('.mod-options').innerHTML=names.map(m=>`<label><input type="checkbox" value="${esc(m)}" ${active.has(m)?'checked':''}><span>${esc(m)}</span>${active.has(m)?'':'<small class="unused-mod">Unused</small>'}</label>`).join('');$('#addons')?.closest('label')?.setAttribute('hidden','');modPanel.querySelectorAll('input').forEach(i=>i.onchange=()=>{modState.set(i.value,i.checked);render();});}
  const artSet=r=>icons[r.id]||icons[r.profiles.Dregora.id]||icons[r.profiles.RLCraft.id];
  const variants=r=>{const a=artSet(r);return a?(a.variants||[a]):[];};
  const artFor=r=>{const list=variants(r);return list.find(a=>a.level===(lvlState.get(r.id)||1))||list[0];};
  image = function(r){const art=artFor(r);if(!art)return `<img class="book" src="assets/enchanted-book.gif" alt="${esc(r.name)} — vanilla book artwork" loading="lazy">`;const sequence=art.frames||[];if(sequence.length>1)return `<span role="img" aria-label="${esc(r.name)}" class="book animated-book" data-art="${esc(r.id)}" style="background-image:url('${esc(art.file)}')"></span>`;return `<img class="book" src="${esc(art.file)}" alt="${esc(r.name)}" loading="lazy">`;};
  function watchAnimations(){animationNodes=Array.from(document.querySelectorAll('.animated-book'),node=>{const row=data.find(r=>r.id===node.dataset.art);const art=artFor(row);return {node,frames:art.frames,total:art.frames.reduce((s,f)=>s+f.time,0)};});}
  setInterval(()=>{if(document.hidden||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const ticks=performance.now()/50;for(const item of animationNodes){if(!item.node.isConnected)continue;const box=item.node.getBoundingClientRect();if(box.bottom<0||box.top>innerHeight)continue;let n=ticks%item.total,index=0;for(const frame of item.frames){index=frame.index;n-=frame.time;if(n<0)break;}item.node.style.backgroundPosition=`0 ${-index*item.node.clientWidth}px`;}},50);
  const metadata=r=>chosen().map(p=>{const x=r.profiles[p];const label=p==='RLCraft'?'RLC':p;const value=!x.present?'—':x.max===0?copy().disabled:x.max==null?'?':roman(x.max);return `${label}: ${value}`;}).join(' | ');
  const completeComparisons=new Set(['somanyenchantments:advancedefficiency','somanyenchantments:advancedlooting','somanyenchantments:ancientsealedcurses','somanyenchantments:ancientswordmastery','somanyenchantments:advancedknockback','somanyenchantments:blessededge','somanyenchantments:criticalstrike','somanyenchantments:curseofholding','somanyenchantments:defusingedge','somanyenchantments:horsdecombat','somanyenchantments:lifesteal','somanyenchantments:meltdown','somanyenchantments:naturalblocking','somanyenchantments:pandorascurse','somanyenchantments:reviledblade','somanyenchantments:spellbreaker','somanyenchantments:subjecthistory','somanyenchantments:subjectpe','somanyenchantments:subjectphysics','somanyenchantments:subjectscience','somanyenchantments:swiftswimming','somanyenchantments:thunderstormsbestowment','somanyenchantments:unreasonable','somanyenchantments:wateraspect','somanyenchantments:wintersgrace','somanyenchantments:lesserfireaspect','somanyenchantments:plowing','somanyenchantments:purgingblade','somanyenchantments:rainsbestowment','somanyenchantments:rune_magicalblessing','somanyenchantments:rune_resurrection','somanyenchantments:rune_revival','somanyenchantments:subjectmathematics','somanyenchantments:viper','mujmajnkraftsbettersurvival:penetration']);
  const versionNote=text=>{const note=natural(clean(text));if(!note)return '';if(/^(?:Disabled|Desactivad[oa]|已禁用|禁用)\b/i.test(note))return copy().disabled+'.';return note;};
  function versions(original,row){if(completeComparisons.has(original.id))return '';const a=versionNote(row.regular),b=versionNote(row.dregora),disabled=note=>note===copy().disabled+'.';if(!a&&!b||a===b)return '';if(disabled(a)&&!disabled(b))return b?`<p>${esc(b)}</p>`:'';if(disabled(b)&&!disabled(a))return a?`<p>${esc(a)}</p>`:'';return `<div class="version-notes guide-comparison">${chosen().map(p=>{const note=p==='RLCraft'?a:b;if(!note)return '';return `<p><b>${p==='RLCraft'?'RLCraft':'Dregora'}:</b> ${esc(note)}</p>`;}).join('')}</div>`;}
  function cost(r){const level=artFor(r)?.level||1;const values=chosen().filter(p=>r.profiles[p].present&&r.profiles[p].max!==0).map(p=>{const n=r.profiles[p].bookCostPerLevel;return {p,cost:Number.isFinite(n)?n*level:null};});if(!values.length)return '';const costs=values.length===2&&values[0].cost===values[1].cost?[values[0]]:values;return `<div class="xp-row"><span class="xp-cost" title="${esc(copy().xpNote)}">${copy().xp} (${roman(level)}): ${costs.map(v=>(costs.length>1?`${v.p==='RLCraft'?'RLC':v.p}: `:'')+(v.cost===null?copy().variable:`[${v.cost} ${copy().levels}]`)).join(' | ')}</span></div>`;}
  // Do not replace a full explanation with a stock message.  Some entries only
  // have their concise in-game wording available, while source-reviewed entries
  // carry a detailed note in `details`; either way the player should see the
  // real text for that enchantment rather than a generic placeholder.
  const structuredFallback=(original,row)=>{const base=clean(row.effect||'');const regular=clean(row.regular||''),dregora=clean(row.dregora||'');const same=regular===dregora;const extra=same?regular:(regular||dregora?`${regular?`RLC: ${regular}`:''}${regular&&dregora?' ':''}${dregora?`Dregora: ${dregora}`:''}`:'');const text=extra&&extra!==base?`${base} ${extra}`:(base||extra);return `<div class="full-explanation"><p>${esc(natural(text))}</p>${applicableHtml(row)}</div>`;};
  render = function(){setupMods();const packs=chosen(),q=$('#search').value.trim().toLocaleLowerCase(),eq=$('#equipment').value.trim().replace(/^[^\p{L}\p{N}]+/u,'').toLocaleLowerCase();const rows=data.filter(r=>(r.name.toLocaleLowerCase().includes(q)||localRow(r).name.toLocaleLowerCase().includes(q))&&(r.equipment.toLocaleLowerCase().includes(eq)||localRow(r).equipment.toLocaleLowerCase().includes(eq))&&(!$('#category').value||category(r)===$('#category').value)&&modState.get(r.mod)&&($('#curses').checked||!curse(r))&&($('#addons').checked||!personal(r))&&packs.some(p=>$('#inactive').checked?(r.profiles[p].present||r.profiles[p].status.startsWith('Disabled')):r.profiles[p].present&&!r.profiles[p].status.startsWith('Disabled'))).sort((a,b)=>a.mod.localeCompare(b.mod)||localRow(a).name.localeCompare(localRow(b).name,lang));
    $('#count').textContent=`${rows.length} ${t('matching enchantments')}`;
    const emptyText=lang==='es'?'¡No se encontraron encantamientos! Prueba otros términos de búsqueda — Nanonaitor':lang==='zh'?'未找到附魔！请尝试其他搜索词 — Nanonaitor':'No Enchantments Found! Try other search Terms - Nanonaitor';
    const sectionLabels=lang==='es'?['Descripción en el juego:','Explicación completa:']:lang==='zh'?['游戏内描述：','完整说明：']:['In-Game Description:','Full Explanation:'];
    $('#entries').innerHTML=rows.map(original=>{const r=localRow(original),purpose=category(original);const full=original.details?.[lang]||original.details?.en;const fullHtml=full?`<div class="full-explanation">${detailHtml(full)}${versions(original,r)}${applicableHtml(original)}</div>`:structuredFallback(original,r);return `<article class="enchant"><div class="book-wrap" tabindex="0" aria-label="${esc(r.name)}">${image(r)}</div><div class="enchant-body"><h3>${esc(r.name)} <span class="max">${esc(metadata(r))}</span></h3>${lang==='en'?'':`<span class="english-name" lang="en">${esc(original.name)}</span>`}<div class="tags"><span class="tag purpose ${purpose.toLowerCase()}">${t(purpose)}</span><span class="tag">${esc(r.equipment)}</span><span class="tag">${esc(r.mod)}</span></div><div class="description-block"><strong>${sectionLabels[0]}</strong><p>${esc(r.effect)}</p><strong>${sectionLabels[1]}</strong>${fullHtml}</div>${cost(original)}</div></article>`;}).join('')||`<div class="empty enchant-empty"><p>${esc(emptyText)}</p><img src="assets/absolute-cinema-pose.png" alt="Nanonaitor absolute cinema pose"></div>`;
    // Detailed mechanics are rendered inside the labeled Full Explanation block above.
    $('#entries').querySelectorAll('.book-wrap').forEach((n,index)=>{const row=rows[index],list=variants(row),art=artFor(row);if(!list.length)return;const numeral=document.createElement('span');numeral.className='art-level';numeral.textContent=roman(art.level);n.append(numeral);if(list.length>1){n.setAttribute('role','button');n.setAttribute('aria-label',`${localRow(row).name} ${roman(art.level)} — ${lang==='es'?'Siguiente imagen':lang==='zh'?'下一等级插画':'Next level artwork'}`);n.title=lang==='es'?'Haz clic para cambiar de nivel':lang==='zh'?'点击切换等级':'Click to cycle book levels';const advance=()=>{suppressEnchantHoverSound();lvlState.set(row.id,list[(list.indexOf(art)+1)%list.length].level);render();$('#entries').querySelectorAll('.book-wrap')[index]?.focus({preventScroll:true});};n.onclick=advance;n.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();advance();}};}});watchAnimations();
  };
  const oldBuilds=renderBuilds;
  const paxelIndex=builds.findIndex(b=>b[0].startsWith('Paxel'));if(paxelIndex>=0)builds.splice(paxelIndex,1);
  renderBuilds=function(){oldBuilds();document.querySelectorAll('.build-card>p,.build-book .tooltip').forEach(p=>p.textContent=natural(clean(p.textContent)));watchAnimations();};
  const renderCredits=function(){const contents={
    en:[
      `<a class="credits-render-link" href="https://www.curseforge.com/minecraft/texture-packs/rl-enchanted-books" target="_blank" rel="noopener"><img class="credits-brand" src="assets/rl-enchanted-books-logo.png" alt="RL Enchanted Books"><strong>RL Enchanted Books</strong><small>Book renders by KameiB</small></a>`,
      `RLCraft by Shivaxi and the RLCraft Team. <a href="https://www.curseforge.com/minecraft/modpacks/rlcraft" target="_blank" rel="noopener">CurseForge ↗</a>`,
      `RLCraft Dregora by Shivaxi, NLBlackEagleNL and the Dregora Team. <a href="https://www.curseforge.com/minecraft/modpacks/rlcraft-dregora" target="_blank" rel="noopener">CurseForge ↗</a>`,
      `Thanks to KameiB for giving permission to use his RL Enchanted Books renders. <a href="https://www.curseforge.com/minecraft/texture-packs/rl-enchanted-books" target="_blank" rel="noopener">CurseForge ↗</a>`,
      `Thanks to Star Artsy for the amazing art and contribution to RL Enchanted Books renders.`,
      `Thanks to KKHR for providing guides and information; see the <a href="https://discord.com/channels/199155955206717440/1249748055859658803" target="_blank" rel="noopener">Shivaxi Discord community guides ↗</a>.`,
      `Thanks to Cath for providing and reviewing enchantment builds, as well as providing information.`,
      `Thanks to Nischhelm for providing enchantment builds and explanations.`,
      `This unofficial community guide is not affiliated with Mojang Studios or Microsoft. Minecraft sound effects and other Minecraft assets remain the property of Mojang Studios and Microsoft.`
    ],
    es:[
      `<a class="credits-render-link" href="https://www.curseforge.com/minecraft/texture-packs/rl-enchanted-books" target="_blank" rel="noopener"><img class="credits-brand" src="assets/rl-enchanted-books-logo.png" alt="RL Enchanted Books"><strong>RL Enchanted Books</strong><small>Renders de libros por KameiB</small></a>`,
      `RLCraft por Shivaxi y el equipo de RLCraft. <a href="https://www.curseforge.com/minecraft/modpacks/rlcraft" target="_blank" rel="noopener">CurseForge ↗</a>`,
      `RLCraft Dregora por Shivaxi, NLBlackEagleNL y el equipo de Dregora. <a href="https://www.curseforge.com/minecraft/modpacks/rlcraft-dregora" target="_blank" rel="noopener">CurseForge ↗</a>`,
      `Gracias a KameiB por dar permiso para usar sus renders de RL Enchanted Books. <a href="https://www.curseforge.com/minecraft/texture-packs/rl-enchanted-books" target="_blank" rel="noopener">CurseForge ↗</a>`,
      `Gracias a Star Artsy por su increíble arte y contribución a los renders de RL Enchanted Books.`,
      `Gracias a KKHR por proporcionar guías e información; consulta las <a href="https://discord.com/channels/199155955206717440/1249748055859658803" target="_blank" rel="noopener">guías comunitarias del Discord de Shivaxi ↗</a>.`,
      `Gracias a Cath por proporcionar y revisar configuraciones de encantamientos, además de aportar información.`,
      `Gracias a Nischhelm por proporcionar configuraciones y explicaciones de encantamientos.`,
      `Esta guía comunitaria no oficial no está afiliada con Mojang Studios ni Microsoft. Los efectos de sonido y demás recursos de Minecraft siguen siendo propiedad de Mojang Studios y Microsoft.`
    ],
    zh:[
      `<a class="credits-render-link" href="https://www.curseforge.com/minecraft/texture-packs/rl-enchanted-books" target="_blank" rel="noopener"><img class="credits-brand" src="assets/rl-enchanted-books-logo.png" alt="RL Enchanted Books"><strong>RL Enchanted Books</strong><small>附魔书渲染：KameiB</small></a>`,
      `RLCraft 由 Shivaxi 与 RLCraft 团队制作。<a href="https://www.curseforge.com/minecraft/modpacks/rlcraft" target="_blank" rel="noopener">CurseForge ↗</a>`,
      `RLCraft Dregora 由 Shivaxi、NLBlackEagleNL 与 Dregora 团队制作。<a href="https://www.curseforge.com/minecraft/modpacks/rlcraft-dregora" target="_blank" rel="noopener">CurseForge ↗</a>`,
      `感谢 KameiB 授权使用 RL Enchanted Books 渲染图。<a href="https://www.curseforge.com/minecraft/texture-packs/rl-enchanted-books" target="_blank" rel="noopener">CurseForge ↗</a>`,
      `感谢 Star Artsy 为 RL Enchanted Books 渲染图创作精美艺术并作出贡献。`,
      `感谢 KKHR 提供指南与资料；请参阅 <a href="https://discord.com/channels/199155955206717440/1249748055859658803" target="_blank" rel="noopener">Shivaxi Discord 社区指南 ↗</a>。`,
      `感谢 Cath 提供并审核附魔配装，以及补充资料。`,
      `感谢 Nischhelm 提供附魔配装与说明。`,
      `本非官方社区指南与 Mojang Studios 或 Microsoft 无关联。Minecraft 音效及其他 Minecraft 资源的所有权仍归 Mojang Studios 与 Microsoft 所有。`
    ]
  };$('.credits').innerHTML=`<h2>${copy().creditTitle}</h2>`+contents[lang].map((p,index)=>`<p class="${index?'credit-line':'credit-logo-line'}">${p}</p>`).join('');};
  const aboutCopy={
    en:{
      title:'About This Guide',
      intro:`The RLCraft community has been an amazing driving force behind the love and passion for creating games, guides and other projects, which eventually gave birth to this website. It was made with help from the community and friends met along the way. Thank you for visiting; I truly hope it helps you, the reader, on your next adventure.`,
      first:'Website & Guide Contributors',firstLead:'The people who helped build this website and shape the information inside it.',
      second:'Community & Project Creators',secondLead:'Important people whose work, creativity and leadership made RLCraft, Dregora and this guide possible.',
      people:[
        ['Nanonaitor','Website Creator','A programming teacher, streamer, YouTuber and father who created this website for the RLCraft community.'],
        ['Cathy','Dregora Developer','A passion-driven person who balances weapons in RLCraft and provided the builds for your enchanting needs on this website!'],
        ['KKHR','RLCraft Guide Developer','A dedicated writer with a heart set on Minecraft and sharing information with everyone.'],
        ['Nischhelm','RLCraft Developer','A senior programmer and RLCraft Dev Lead. Provided aid with enchantment builds, incompatibility information and detailed explanations used throughout the website.'],
        ['KameiB','RLCraft Spanish Lead','A talented programmer and artist who created the RLCraft enchanted-book sprites and gave permission to use them on this site.'],
        ['Shivaxi',"RLCraft's Original Creator",'A DJ and programmer best known for his work on RLCraft.'],
        ['NLBlackEagleNL',"RLCraft Dregora's Original Creator",'A programmer and rat enthusiast who loves his brother Heaven.'],
        ['NLBlackHeavenNL','RLCraft Dregora Co-founder',"A creative mind who loves making torturous content for Dregora's playerbase and loves his brother Eagle."],
        ['StarArtsy','RLCraft Artist','An amazing sprite artist who has made many assets for the game.']
      ]
    },
    es:{
      title:'Acerca de esta guía',
      intro:`La comunidad de RLCraft ha sido una fuerza increíble que ha impulsado el amor y la pasión por crear juegos, guías y otros proyectos, lo que finalmente dio origen a este sitio web. Fue creado con la ayuda de la comunidad y de los amigos conocidos en el camino. Gracias por visitarlo; de verdad espero que te ayude, a ti que lo lees, en tu próxima aventura.`,
      first:'Colaboradores del sitio y la guía',firstLead:'Las personas que ayudaron a construir este sitio y a dar forma a la información que contiene.',
      second:'Creadores de la comunidad y los proyectos',secondLead:'Personas importantes cuyo trabajo, creatividad y liderazgo hicieron posibles RLCraft, Dregora y esta guía.',
      people:[
        ['Nanonaitor','Creador del sitio','Profesor de programación, streamer, YouTuber y padre que creó este sitio para la comunidad de RLCraft.'],
        ['Cathy','Desarrolladora de Dregora','Una persona guiada por su pasión, encargada de equilibrar las armas de RLCraft, que proporcionó las configuraciones de encantamientos de este sitio.'],
        ['KKHR','Desarrollador de guías de RLCraft','Un escritor dedicado, con el corazón puesto en Minecraft y en compartir información con todos.'],
        ['Nischhelm','Desarrollador principal de RLCraft','Programador sénior y desarrollador principal de RLCraft. Ayudó con configuraciones de encantamientos, información de incompatibilidades y explicaciones detalladas usadas en todo el sitio web.'],
        ['KameiB','Líder de RLCraft en español','Un talentoso programador y artista que creó los sprites de los libros encantados de RLCraft y dio permiso para usarlos en este sitio.'],
        ['Shivaxi','Creador original de RLCraft','DJ y programador, conocido principalmente por su trabajo en RLCraft.'],
        ['NLBlackEagleNL','Creador original de RLCraft Dregora','Programador y entusiasta de las ratas que quiere mucho a su hermano Heaven.'],
        ['NLBlackHeavenNL','Cofundador de RLCraft Dregora','Una mente creativa que disfruta creando contenido tortuoso para los jugadores de Dregora y quiere mucho a su hermano Eagle.'],
        ['StarArtsy','Artista de RLCraft','Un increíble artista de sprites que ha creado muchos recursos para el juego.']
      ]
    },
    zh:{
      title:'关于本指南',
      intro:`RLCraft 社区一直是推动大家热爱并投入游戏、指南和其他项目创作的重要力量，最终也促成了这个网站的诞生。它是在社区以及一路结识的朋友们帮助下完成的。感谢你的到访；我真心希望它能帮助正在阅读的你踏上下一段冒险。`,
      first:'网站与指南贡献者',firstLead:'帮助建设本网站并完善其中资料的人们。',
      second:'社区与项目创作者',secondLead:'他们的工作、创意与领导让 RLCraft、Dregora 和本指南成为可能。',
      people:[
        ['Nanonaitor','网站创建者','一名编程教师、主播、YouTuber 和父亲，为 RLCraft 社区创建了这个网站。'],
        ['Cathy','Dregora 开发者','一位由热情驱动的开发者，负责平衡 RLCraft 武器，并为本网站提供了附魔配装。'],
        ['KKHR','RLCraft 指南作者','一位专注的作者，热爱 Minecraft，也热衷于与大家分享资料。'],
        ['Nischhelm','RLCraft 开发负责人','资深程序员兼 RLCraft 开发负责人。协助整理了全站使用的附魔配装、不兼容信息与详细说明。'],
        ['KameiB','RLCraft 西班牙语负责人','一位才华出众的程序员与艺术家，创作了 RLCraft 附魔书精灵图，并授权本网站使用。'],
        ['Shivaxi','RLCraft 原作者','一位 DJ 与程序员，以创作 RLCraft 而广为人知。'],
        ['NLBlackEagleNL','RLCraft Dregora 原作者','一位程序员和鼠类爱好者，也深爱着他的兄弟 Heaven。'],
        ['NLBlackHeavenNL','RLCraft Dregora 联合创始人','一位富有创意的人，喜欢为 Dregora 玩家制作折磨人的内容，也深爱着他的兄弟 Eagle。'],
        ['StarArtsy','RLCraft 美术师','一位出色的像素画师，为游戏制作了许多素材。']
      ]
    }
  };
  const aboutHeads={Nanonaitor:'nanonaitor-head.png',Cathy:'cathy-head.png',KKHR:'kkhr-head.png',KameiB:'kameib-head.png',Shivaxi:'shivaxi-head.png',NLBlackEagleNL:'nlblackeagle-head.png',StarArtsy:'starartsy-head.png'};
  const tabs=$('.tabs');
  const keepAboutLast=()=>{const about=$('#about-tab'),sound=$('#sound');if(about&&sound&&about.nextElementSibling!==sound)tabs.insertBefore(about,sound);};
  keepAboutLast();
  function renderAbout(){const c=aboutCopy[lang],rows=(items)=>items.map(([name,title,description])=>`<article class="about-row"><img class="about-avatar" src="assets/${aboutHeads[name]||'default-head.png'}" alt="${esc(name)}"><div><h4>${esc(name)} <span>| ${esc(title)}</span></h4><p>${esc(description)}</p></div></article>`).join('');$('#about-content').innerHTML=`<div class="about-intro"><h2 id="about-title">${esc(c.title)}</h2><p>${esc(c.intro)}</p></div><section class="about-section"><h3>${esc(c.first)}</h3><p>${esc(c.firstLead)}</p>${rows(c.people.slice(0,5))}</section><div class="about-divider"></div><section class="about-section"><h3>${esc(c.second)}</h3><p>${esc(c.secondLead)}</p>${rows(c.people.slice(5))}</section>`;}
  translatePage=function(){localizeFilterControls();document.documentElement.lang=lang==='zh'?'zh-CN':lang==='es'?'es-MX':'en';document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.language===lang));$('.hero p').innerHTML=copy().subtitle;const titleArt=$('.title-art');if(titleArt){titleArt.src=lang==='es'?'assets/encantamientos-title.png':lang==='zh'?'assets/chinese-enchantments-title.png':'assets/enchantments-title.png';titleArt.alt=lang==='es'?'Encantamientos':lang==='zh'?'结界':'Enchantments';titleArt.classList.toggle('chinese-title',lang==='zh');}const disclaimer=$('#unofficial-disclaimer');if(disclaimer)disclaimer.textContent=lang==='es'?'SITIO WEB NO OFICIAL DE MINECRAFT. NO ESTÁ APROBADO NI ASOCIADO CON MOJANG O MICROSOFT.':lang==='zh'?'非官方 MINECRAFT 网站。未经 MOJANG 或 MICROSOFT 批准，亦与其无关联。':'NOT AN OFFICIAL MINECRAFT WEBSITE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.';if(!$('.sexy-fixed'))document.body.insertAdjacentHTML('beforeend','<img class="sexy-fixed" src="assets/sexy-pose.png" alt="">');$('#guide-tab').textContent=copy().enchants;$('#builds-tab').textContent=copy().builds;$('#about-tab').textContent=copy().about;$('#guide .list-heading h2').textContent=copy().enchants;$('#builds .list-heading h2').textContent=copy().builds;modPanel.querySelector('legend').textContent=copy().mods;modPanel.querySelector('[data-mod-action=all]').textContent=copy().all;modPanel.querySelector('[data-mod-action=none]').textContent=copy().none;document.querySelectorAll('.filters label,.filters option,#reset,#builds .list-heading span,footer small').forEach(el=>{for(const n of el.childNodes)if(n.nodeType===3&&n.textContent.trim()){n.originalText??=n.textContent;n.textContent=t(n.originalText.trim());}});localizeFilterControls();$('footer small').textContent='Check my Socials';document.querySelectorAll('input[placeholder]').forEach(e=>{e.dataset.originalPlaceholder??=e.placeholder;e.placeholder=t(e.dataset.originalPlaceholder);});$('.notice').textContent='Builds supplied by Cathy and Nischhelm. You do not need every enchantment to beat the game.';$('.support h2').textContent=lang==='es'?'Gracias por apoyar lo que hago.':lang==='zh'?'谢谢你支持我的创作。':'Thanks for supporting what I make.';$('.support .eyebrow').textContent='NANONAITOR GAMING';$('.support p').textContent=copy().support;$('.support .button:not(.secondary)').textContent=lang==='es'?'Verme en YouTube ↗':lang==='zh'?'在 YouTube 观看我 ↗':'Watch me on YouTube ↗';$('.support .button:not(.secondary)').classList.add('youtube-button');$('.support .secondary').innerHTML='<img src="assets/kofi.png" alt="Support me on Ko-fi">';$('.support .secondary').classList.add('image-link');renderCredits();renderAbout();};
  document.querySelectorAll('.socials a').forEach(a=>{if(a.href.includes('curseforge.com')){a.innerHTML='<span class="forge-mark" aria-hidden="true">⚒</span>';a.classList.add('curseforge-link');}});
  // A visible cost explanation avoids presenting a fresh-book price as a universal anvil total.
  const xpInfo=document.createElement('p');xpInfo.className='xp-info';$('#entries').before(xpInfo);
  const page=translatePage;let sexyScrollBound=false;function keepSexyAboveFooter(){const img=$('.sexy-fixed'),footer=document.querySelector('footer');if(!img||!footer||typeof footer.getBoundingClientRect!=='function')return;const rect=footer.getBoundingClientRect(),viewportHeight=window.innerHeight||900,currentScroll=window.scrollY||0;if(rect.top<viewportHeight){img.style.position='absolute';img.style.top=`${currentScroll+rect.top-(img.offsetHeight||190)}px`;img.style.bottom='auto';}else{img.style.position='fixed';img.style.top='auto';img.style.bottom='0';}}translatePage=function(){page();xpInfo.textContent=copy().xpNote;const credits=$('.credits');credits.querySelector('.made-by')?.remove();if(!$('.miriel-wink'))document.querySelector('footer').insertAdjacentHTML('beforeend','<img class="miriel-wink" src="assets/miriel-wink.gif" alt="">');if(!sexyScrollBound&&window.addEventListener){window.addEventListener('scroll',keepSexyAboveFooter);sexyScrollBound=true;}keepSexyAboveFooter();$('#sound').setAttribute('aria-pressed',enabled);};
  const finalTranslate=translatePage;translatePage=function(){finalTranslate();$('.sexy-fixed')?.remove();$('footer>span').innerHTML='<small>Check my Socials</small>';const visitLabel=$('[data-visit-label]');if(visitLabel)visitLabel.textContent=copy().visits;if(!$('.sexy-footer'))document.querySelector('footer').insertAdjacentHTML('afterbegin','<img class="sexy-footer" src="assets/sexy-pose.png" alt="">');};
  const visitCounter=$('#visit-counter'),visitImage=$('.visit-count-image'),visitFallback=$('.visit-count-fallback');
  if(visitCounter&&visitImage&&visitFallback&&!/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)){
    visitImage.addEventListener('load',()=>{visitFallback.hidden=true;visitImage.hidden=false;},{once:true});
    visitImage.addEventListener('error',()=>{visitFallback.hidden=false;visitImage.hidden=true;},{once:true});
      visitImage.src='https://hits.sh/nanonaitor.github.io/rlcraft-dregora-enchantments.svg?label=%20&color=9a7ad9&labelColor=0b151e';
  }
  const reset=$('#reset');reset.addEventListener('click',()=>{const keep=new Set(['Better Survival','Charm','Defiled Lands','Locks','Minecraft / Vanilla','Simple Difficulty','So Many Enchantments','Spartan Shields','Spartan Weaponry','Switch-Bow','Grappling Hook Mod']);modState.forEach((_,key)=>modState.set(key,keep.has(key)));syncMods();render();});
})();

