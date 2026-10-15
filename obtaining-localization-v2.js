/* Localized copy for the version-grouped Obtaining guide. */
(() => {
  const pairs={
    'All Versions':['Todas las versiones','所有版本'],
    'Dregora Only':['Solo Dregora','仅 Dregora'],
    'Parasited Only':['Solo Parasited','仅 Parasited'],
    'Refers to RLCraft, RLCraft Dregora and Parasited.':['Se refiere a RLCraft, RLCraft Dregora y Parasited.','指 RLCraft、RLCraft Dregora 与 Parasited。'],
    'A combination of RLCraft and Dregora that includes more features and is considered harder than the original experience.':['Una combinación de RLCraft y Dregora que incluye más funciones y se considera más difícil que la experiencia original.','RLCraft 与 Dregora 的组合版本，加入更多内容，整体难度也高于原版体验。'],
    'A spin-off available for both RLCraft and Dregora, spearheaded by Nischhelm, where Scape and Run: Parasites slowly infect the world. It also adds Inkwells and the Pondering Orb. See':['Una versión derivada disponible para RLCraft y Dregora, liderada por Nischhelm, donde Scape and Run: Parasites infecta lentamente el mundo. También añade Tinteros y el Orbe de contemplación. Consulta','由 Nischhelm 牵头制作、同时适用于 RLCraft 与 Dregora 的衍生版本，其中 Scape and Run: Parasites 会逐渐感染整个世界。它还加入墨水瓶与沉思宝珠。请参阅'],
    'how to install Parasited':['cómo instalar Parasited','Parasited 安装方法'],
    'Methods available in RLCraft, RLCraft Dregora and Parasited.':['Métodos disponibles en RLCraft, RLCraft Dregora y Parasited.','RLCraft、RLCraft Dregora 与 Parasited 中都可用的方法。'],
    'Additional enchantment sources found in RLCraft Dregora.':['Fuentes de encantamientos adicionales disponibles en RLCraft Dregora.','RLCraft Dregora 中新增的附魔来源。'],
    'Additional enchantment tools included with Parasited for RLCraft and Dregora.':['Herramientas de encantamiento adicionales incluidas con Parasited para RLCraft y Dregora.','Parasited 为 RLCraft 与 Dregora 加入的额外附魔工具。'],
    'All methods of getting enchants are valid and have positives and negatives. This guide separates shared methods from those exclusive to Dregora and Parasited.':['Todos los métodos para conseguir encantamientos tienen ventajas y desventajas. Esta guía separa los métodos compartidos de los exclusivos de Dregora y Parasited.','每种获取附魔的方法都有优缺点。本指南将通用方法与 Dregora、Parasited 的专属方法分开说明。'],
    'In Dregora 1.1.2b, the Enchantment Table can upgrade an enchantment to the next tier.':['En Dregora 1.1.2b, la mesa de encantamientos puede mejorar un encantamiento al siguiente grado.','在 Dregora 1.1.2b 中，附魔台可以把附魔提升到下一阶。'],
    'Bookwyrms eat enchantment books and produce new ones. They require extensive breeding and protection but become a fast recycling machine. View':['Los Bookwyrms comen libros encantados y producen otros nuevos. Requieren mucha crianza y protección, pero terminan siendo una máquina de reciclaje rápida. Mira','书蛟会吃掉附魔书并产出新书。它们需要大量繁殖与保护，但建成后会成为高效的附魔回收设施。请观看'],
    'this detailed Book Wyrm video guide':['esta guía detallada en video sobre Book Wyrms','这份详细的书蛟视频指南'],
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
    'Created by KKHR and Nanonaitor.':['Creado por KKHR y Nanonaitor.','由 KKHR 与 Nanonaitor 共同创作。'],
    'Brutal Tower exterior':['Exterior de una Torre brutal','残酷高塔外观'],
    'Brutal Tower treasure room':['Sala del tesoro de una Torre brutal','残酷高塔宝藏室'],
    'Pondering Orb surrounded by bookshelves':['Orbe de contemplación rodeado de estanterías','被书架围绕的沉思宝珠'],
    'Pondering Orb crafting recipe':['Receta del Orbe de contemplación','沉思宝珠合成配方']
  };
  const locale=()=>document.documentElement.lang.startsWith('es')?'es':document.documentElement.lang.startsWith('zh')?'zh':'en';
  const translated=(text,language)=>{const source=Object.keys(pairs).find(key=>key===text||pairs[key].includes(text));if(!source)return null;return language==='en'?source:pairs[source][language==='es'?0:1];};
  function apply(){
    const language=locale(),root=document.querySelector('#obtaining');
    if(!root)return;
    const visit=node=>{for(const child of [...node.childNodes]){if(child.nodeType===3){const raw=child.textContent,key=raw.trim(),value=translated(key,language);if(value)child.textContent=raw.replace(key,value);}else if(!['SCRIPT','STYLE'].includes(child.tagName))visit(child);}};
    visit(root);
    root.querySelectorAll('img[alt]').forEach(img=>{img.dataset.enAlt??=img.alt;img.alt=translated(img.dataset.enAlt,language)||img.dataset.enAlt;});
    const nav=root.querySelector('.obtaining-toc');
    if(nav)nav.setAttribute('aria-label',language==='es'?'Contenido de la guía de obtención':language==='zh'?'附魔获取指南目录':'Obtaining guide contents');
  }
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setTimeout(apply,10)));
  window.addEventListener('hashchange',()=>setTimeout(apply,10));
  window.addEventListener('load',()=>setTimeout(apply,20));
  setTimeout(apply,100);
})();
