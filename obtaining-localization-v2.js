/* Localized copy for the version-grouped Obtaining guide. */
(() => {
  const pairs={
    'All Versions':['Todas las versiones','所有版本'],
    'Dregora Only':['Solo Dregora','仅 Dregora'],
    'Parasited Only':['Solo Parasited','仅 Parasited'],
    'Refers to RLCraft, RLCraft Dregora and Parasited.':['Se refiere a RLCraft, RLCraft Dregora y Parasited.','指 RLCraft、RLCraft Dregora 与 Parasited。'],
    'A combination of RLCraft and Dregora that includes more features and is considered harder than the original experience.':['Una combinación de RLCraft y Dregora que incluye más funciones y se considera más difícil que la experiencia original.','RLCraft 与 Dregora 的组合版本，加入更多内容，整体难度也高于原版体验。'],
    'A spin-off available for both RLCraft and Dregora, spearheaded by Nischhelm, where Scape and Run: Parasites slowly infect the world. It also adds Inkwells, the Pondering Orb and Blooded Anvils. See':['Una versión derivada disponible para RLCraft y Dregora, liderada por Nischhelm, donde Scape and Run: Parasites infecta lentamente el mundo. También añade Tinteros, el Orbe de Contemplación y Yunques de Sangre. Consulta','由 Nischhelm 牵头制作、同时适用于 RLCraft 与 Dregora 的衍生版本，其中 Scape and Run: Parasites 会逐渐感染整个世界。它还加入墨水瓶、沉思宝珠与鲜血铁砧。请参阅'],
    'how to install Parasited':['Cómo Instalar Parasited','Parasited 安装方法'],
    'Methods available in RLCraft, RLCraft Dregora and Parasited.':['Métodos disponibles en RLCraft, RLCraft Dregora y Parasited.','RLCraft、RLCraft Dregora 与 Parasited 中都可用的方法。'],
    'Additional enchantment sources found in RLCraft Dregora.':['Fuentes de encantamientos adicionales disponibles en RLCraft Dregora.','RLCraft Dregora 中新增的附魔来源。'],
    'Additional enchantment tools included with Parasited for RLCraft and Dregora. See':['Herramientas de encantamiento adicionales incluidas con Parasited para RLCraft y Dregora. Consulta','Parasited 为 RLCraft 与 Dregora 加入的额外附魔工具。请参阅'],
    'All methods of getting enchants are valid and have positives and negatives. This guide separates shared methods from those exclusive to Dregora and Parasited.':['Todos los métodos para conseguir encantamientos tienen ventajas y desventajas. Esta guía separa los métodos compartidos de los exclusivos de Dregora y Parasited.','每种获取附魔的方法都有优缺点。本指南将通用方法与 Dregora、Parasited 的专属方法分开说明。'],
    'In Dregora 1.1.2b, the Enchantment Table can upgrade an enchantment to the next tier.':['En Dregora 1.1.2b, la mesa de encantamientos puede mejorar un encantamiento al siguiente grado.','在 Dregora 1.1.2b 中，附魔台可以把附魔提升到下一阶。'],
    'Additionally in this mode, enchantments can be upgraded by level as well as by tier. Each level-up requires experience, has a 10% chance to fail and turn the enchantment into a curse, adds an “anvil use,” and may require materials other than Biotite.':['Además, en este modo los encantamientos pueden mejorarse tanto de nivel como de grado. Cada mejora de nivel requiere experiencia, tiene un 10% de probabilidad de fallar y convertir el encantamiento en una maldición, añade un «uso de yunque» y puede requerir materiales distintos de la Biotita.','此外，在此模式中，附魔不仅能升阶，也能升级。每次升级都需要经验，有 10% 的概率失败并将附魔变成诅咒，还会增加一次“铁砧使用次数”，并且可能需要末影黑云母以外的材料。'],
    'Some alternative materials include a Golden Bookwyrm Scale for upgrading Mending to Advanced Mending and a Demonic Heart for upgrading Protection to Advanced Protection.':['Algunos materiales alternativos incluyen una Escama de Librodrilo Dorado para mejorar Reparación a Reparación avanzada y un Corazón demoníaco para mejorar Protección a Protección avanzada.','替代材料包括：用金色书龙鳞片将经验修补升级为高级经验修补，以及用恶魔之心将保护升级为高级保护。'],
    'Bookwyrms eat enchantment books and produce new ones. They require extensive breeding and protection but become a fast recycling machine. View':['Los Librodrilos comen libros encantados y producen otros nuevos. Requieren mucha crianza y protección, pero terminan siendo una máquina de reciclaje rápida. Mira','书龙会吃掉附魔书并产出新书。它们需要大量繁殖与保护，但建成后会成为高效的附魔回收设施。请观看'],
    'this detailed Book Wyrm video guide':['esta guía detallada en video sobre Librodrilos','这份详细的书龙视频指南'],
    'Brutal Towers':['Torres brutales','残酷高塔'],
    'Champion mobs':['Criaturas campeonas','冠军生物'],
    'Brutal Towers are treasure-dense, endgame dungeons. Their crates,':['Las Torres brutales son mazmorras de final de partida repletas de tesoros. Sus cajas,','残酷高塔是宝藏密集的终局地牢。塔内的箱柜、'],
    'and chests contain many high-tier and rare enchantments.':['y cofres contienen numerosos encantamientos raros y de alto nivel.','与宝箱中含有大量高阶及稀有附魔。'],
    'High concentration of valuable ores, treasure, baubles and weapons.':['Gran concentración de minerales valiosos, tesoros, abalorios y armas.','集中分布着大量贵重矿石、宝藏、饰品和武器。'],
    'One of the best places to earn large amounts of combat experience.':['Uno de los mejores lugares para obtener grandes cantidades de experiencia mediante combate.','通过战斗获取大量经验的最佳地点之一。'],
    'A visit is required to complete Dregora because Brutal Towers are the only reliable source of Brutal Coins.':['Debes visitar una para completar Dregora, pues son la única fuente fiable de Monedas brutales.','通关 Dregora 必须前往，因为残酷高塔是残酷硬币唯一可靠的来源。'],
    'Incredibly dangerous mobs, bosses and traps.':['Criaturas, jefes y trampas extremadamente peligrosos.','生物、首领与陷阱极其危险。'],
    'Maze-like interiors require a significant time investment to navigate.':['Sus interiores laberínticos requieren mucho tiempo para explorarlos.','内部如迷宫般复杂，需要投入大量时间探索。'],
    'Watch a no-glitch Brutal Tower playthrough focused on reaching the treasure room quickly':['Mira una partida sin glitches centrada en llegar rápidamente a la sala del tesoro','观看不使用漏洞、专注快速抵达宝藏室的残酷高塔实况'],
    'See the spoiler-free Brutal Tower navigation guide':['Consulta la guía de navegación sin spoilers de una Torre brutal','查看无剧透的残酷高塔路线指南'],
    'Inkwells':['Tinteros','墨水瓶'],
    'An additional mod lets players find Inkwells that can reproduce an enchantment infinitely.':['Un mod adicional permite encontrar Tinteros capaces de reproducir un encantamiento infinitamente.','额外模组会生成墨水瓶，使玩家可以无限复制一种附魔。'],
    'Makes any enchantment you find reusable without limit.':['Permite reutilizar sin límite cualquier encantamiento que encuentres.','让找到的任何附魔都能无限重复使用。'],
    'Inkwells are rare loot found only in dungeons and villages.':['Los Tinteros son botín raro que solo aparece en mazmorras y aldeas.','墨水瓶是稀有战利品，只能在地牢与村庄中找到。'],
    'Only one enchantment can be stored in each Inkwell.':['Cada Tintero solo puede almacenar un encantamiento.','每个墨水瓶只能储存一种附魔。'],
    'Using an Inkwell is expensive in experience.':['Usar un Tintero cuesta mucha experiencia.','使用墨水瓶需要消耗大量经验。'],
    'How to use':['Cómo usarlo','使用方法'],
    'Combine an empty Inkwell with the desired Enchanted Book on an anvil.':['Combina un Tintero vacío con el libro encantado deseado en un yunque.','在铁砧上将空墨水瓶与所需附魔书合成。'],
    'Combine the filled Inkwell with a normal book on an anvil to create another copy.':['Combina el Tintero lleno con un libro normal en un yunque para crear otra copia.','再在铁砧上将装满的墨水瓶与普通书合成，即可制作另一份附魔书。'],
    'Pondering Orb':['Orbe de contemplación','沉思宝珠'],
    "A quality-of-life block that rerolls the Enchantment Table's available enchantments in exchange for a small amount of experience.":['Un bloque de calidad de vida que renueva los encantamientos disponibles en la mesa a cambio de un poco de experiencia.','一种便利方块，可消耗少量经验来刷新附魔台提供的附魔。'],
    'Does not require Lapis Lazuli to reroll enchantments.':['No requiere lapislázuli para renovar los encantamientos.','刷新附魔时不需要青金石。'],
    'Easy to craft.':['Fácil de fabricar.','容易制作。'],
    'Costs more experience than applying a one-level enchantment to an item.':['Cuesta más experiencia que aplicar un encantamiento de nivel uno a un objeto.','消耗的经验多于给物品附加一次一级附魔。'],
    'Place the Orb anywhere.':['Coloca el Orbe en cualquier lugar.','将宝珠放置在任意位置。'],
    'Ensure you have enough experience to use it.':['Asegúrate de tener suficiente experiencia para usarlo.','确保你拥有足够的经验来使用它。'],
    'Right-click the Orb.':['Haz clic derecho en el Orbe.','右键点击宝珠。'],
    'Blooded Anvils':['Yunques de Sangre','鲜血铁砧'],
    'Blood Anvil':['Yunque de Sangre','鲜血铁砧'],
    'A new anvil type whose recipe lives up to its name. It can only be used once. It transfers every enchantment from the weapon in the left-slot to the weapon in the right-slot, destroying the left weapon in the process.':['Un nuevo tipo de yunque cuya receta hace honor a su nombre. Solo puede usarse una vez. Transfiere todos los encantamientos del arma de la ranura izquierda al arma de la ranura derecha y destruye el arma izquierda durante el proceso.','一种配方名副其实的新型铁砧，只能使用一次。它会把左侧槽位武器上的全部附魔转移到右侧武器，并在过程中摧毁左侧武器。'],
    'It is commonly used and recommended for passing the enchantments from your god weapon onto a new one. The transfer always costs 80 experience levels, regardless of the weapons’ anvil uses or enchantments.':['Se usa habitualmente y se recomienda para transferir los encantamientos de tu arma divina a una nueva. La transferencia siempre cuesta 80 niveles de experiencia, sin importar los usos de yunque ni los encantamientos de las armas.','它通常用于并推荐用于把毕业武器的附魔转移到新武器上。无论两把武器的铁砧使用次数或附魔如何，转移费用固定为 80 级经验。'],
    'Each single-use Blood Anvil is extremely expensive, requiring 31 Dragonsteel Ingots and 2 Sentient Cores. As such, you will need a pet dragon or 31 Vials of Dragon’s Breath.':['Cada Yunque de Sangre de un solo uso es extremadamente caro: requiere 31 Lingotes de Acero de Dragón y 2 Núcleos Sensibles. Por ello, necesitarás un dragón mascota o 31 Frascos de Aliento de Dragón.','每个一次性鲜血铁砧都极其昂贵，需要 31 个龙钢锭与 2 个感知核心。因此，你需要一条宠物龙或 31 瓶龙息。'],
    'Created by KKHR and Nanonaitor.':['Creado por KKHR y Nanonaitor.','由 KKHR 与 Nanonaitor 共同创作。'],
    'Brutal Tower exterior':['Exterior de una Torre brutal','残酷高塔外观'],
    'Brutal Tower treasure room':['Sala del tesoro de una Torre brutal','残酷高塔宝藏室'],
    'Pondering Orb surrounded by bookshelves':['Orbe de contemplación rodeado de estanterías','被书架围绕的沉思宝珠'],
    'Pondering Orb crafting recipe':['Receta del Orbe de contemplación','沉思宝珠合成配方'],
    'Inkwell containing Supreme Bane of Arthropods V':['Tintero con Perdición suprema de los artrópodos V','装有超级节肢杀手 V 的墨水瓶'],
    'Blood Anvil placed in the world':['Yunque de Sangre colocado en el mundo','放置在世界中的鲜血铁砧'],
    'Blood Anvil transferring enchantments between weapons':['Yunque de Sangre transfiriendo encantamientos entre armas','鲜血铁砧正在武器之间转移附魔'],
    'Blood Anvil crafting recipes':['Recetas del Yunque de Sangre','鲜血铁砧合成配方']
  };
  const enchantmentReferences={
    'Advanced Efficiency':['Eficiencia extrema','高级效率'],'Advanced Looting':['Saqueo avanzado','高级抢夺'],'Advanced Mending':['Reparación avanzada','高级经验修补'],'Advanced Protection':['Protección avanzada','高级保护'],'Advanced Sharpness':['Filo avanzado','高级锋利'],'Bane of Arthropods':['Perdición de los artrópodos','节肢杀手'],'Curse Break':['Romper maldiciones','祛除诅咒'],'Efficiency':['Eficiencia','效率'],'Feather Falling':['Caída de pluma','摔落缓冲'],'Fire Aspect':['Aspecto ígneo','火焰附加'],'Fire Protection':['Protección contra el fuego','火焰保护'],'Fortune':['Fortuna','时运'],'Knockback':['Empuje','击退'],'Lesser Sharpness':['Filo débil','低级锋利'],'Lifesteal':['Robavidas','生命窃取'],'Looting':['Saqueo','抢夺'],'Luck of the Sea':['Suerte marina','海之眷顾'],'Mending':['Reparación','经验修补'],'Power':['Poder','力量'],'Protection':['Protección','保护'],'Punch':['Retroceso','冲击'],'Purification':['Purificación','净化'],'Sharpness':['Filo','锋利'],'Smite':['Castigo','亡灵杀手'],'Strengthened Vitality':['Vitalidad fortalecida','生机勃勃'],'Supreme Bane of Arthropods':['Perdición suprema de los artrópodos','超级节肢杀手'],'Supreme Sharpness':['Filo supremo','超级锋利'],'Sweeping Edge':['Filo arrasador','横扫之刃'],'Swifter Slashes':['Cuchillas rápidas','唯快不破'],'Thorns':['Espinas','荆棘'],'Unbreaking':['Irrompibilidad','耐久'],'Upgraded Potentials':['Potenciales mejorados','潜能喷涌'],"Winter's Grace":['Gracia del invierno','冬雪恩典'],'Winter’s Grace':['Gracia del invierno','冬雪恩典'],'Adept':['Adepto','熟能生巧'],'Lure':['Atracción','饵钓']
  };
  const locale=()=>document.documentElement.lang.startsWith('es')?'es':document.documentElement.lang.startsWith('zh')?'zh':'en';
  const translated=(text,language)=>{const source=Object.keys(pairs).find(key=>key===text||pairs[key].includes(text));if(!source)return null;return language==='en'?source:pairs[source][language==='es'?0:1];};
  const escapeRegex=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const localizeEnchantments=(text,language)=>{
    const variants=Object.entries(enchantmentReferences).flatMap(([english,names])=>names.map(name=>({english,name}))).sort((a,b)=>b.name.length-a.name.length);
    const normalized=variants.reduce((value,{english,name})=>value.replace(new RegExp(escapeRegex(name),'g'),english),text);
    if(language==='en')return normalized;
    const index=language==='es'?0:1;
    return Object.keys(enchantmentReferences).sort((a,b)=>b.length-a.length).reduce((value,name)=>
      value.replace(new RegExp(`(^|[^A-Za-z])(${escapeRegex(name)})(?=$|[^A-Za-z])`,'g'),(_,prefix)=>prefix+enchantmentReferences[name][index]),normalized);
  };
  const spanishBookWyrms=text=>text
    .replace(/Golden Bookwyrms/gi,'Librodrilos Dorados').replace(/Golden Bookwyrm/gi,'Librodrilo Dorado')
    .replace(/Book Wyrms/gi,'Librodrilos').replace(/Bookwyrms/gi,'Librodrilos').replace(/Bookwyrm/gi,'Librodrilo');
  const normalizeBookWyrms=text=>text
    .replace(/Librodrilos Dorados/g,'Golden Bookwyrms').replace(/Librodrilo Dorado/g,'Golden Bookwyrm')
    .replace(/Librodrilos/g,'Bookwyrms').replace(/Librodrilo/g,'Bookwyrm');
  const tocLabels={
    'obt-table':['Enchantment Table','Mesa de Encantamientos','附魔台'],
    'obt-disenchant':['Disenchantment Table','Mesa de Desencantamiento','祛魔台'],
    'obt-librarians':['Librarians','Bibliotecarios','图书管理员'],
    'obt-dungeons':['Dungeon Loot & Mobs','Botín y Criaturas de Mazmorras','地牢战利品与生物'],
    'obt-wyrms':['Book Wyrms','Librodrilos','书龙'],
    'obt-biotite':['Biotite Upgrading','Mejora con Biotita','末影黑云母升级'],
    'obt-brutal':['Brutal Towers','Torres Brutales','残酷高塔'],
    'obt-inkwells':['Inkwells','Tinteros','墨水瓶'],
    'obt-pondering':['Pondering Orb','Orbe de Contemplación','沉思宝珠'],
    'obt-blood-anvil':['Blooded Anvils','Yunques de Sangre','鲜血铁砧']
  };
  function apply(){
    const language=locale(),root=document.querySelector('#obtaining');
    if(!root)return;
    const visit=node=>{for(const child of [...node.childNodes]){if(child.nodeType===3){child.textContent=normalizeBookWyrms(child.textContent);const raw=child.textContent,key=raw.trim(),value=translated(key,language);if(value)child.textContent=raw.replace(key,value);child.textContent=localizeEnchantments(child.textContent,language);if(language==='es')child.textContent=spanishBookWyrms(child.textContent);}else if(!['SCRIPT','STYLE'].includes(child.tagName))visit(child);}};
    visit(root);
    root.querySelectorAll('img[alt]').forEach(img=>{img.dataset.enAlt??=img.alt;img.alt=localizeEnchantments(translated(img.dataset.enAlt,language)||img.dataset.enAlt,language);if(language==='es')img.alt=spanishBookWyrms(img.alt);});
    const labelIndex=language==='es'?1:language==='zh'?2:0;
    root.querySelectorAll('.obtaining-toc a[href^="#obtaining/"]').forEach(link=>{const id=link.hash.split('/')[1];if(tocLabels[id])link.textContent=tocLabels[id][labelIndex];});
    const nav=root.querySelector('.obtaining-toc');
    if(nav)nav.setAttribute('aria-label',language==='es'?'Contenido de la guía de obtención':language==='zh'?'附魔获取指南目录':'Obtaining guide contents');
  }
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setTimeout(apply,10)));
  window.addEventListener('hashchange',()=>setTimeout(apply,10));
  window.addEventListener('load',()=>setTimeout(apply,20));
  setTimeout(apply,100);
})();
