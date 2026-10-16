/* Final localization pass for content added after the original language switcher. */
(() => {
  const pairs={
    'Made by Nanonaitor':['Hecho por Nanonaitor','作者：Nanonaitor'],
    'A player by choice, a teacher by heart.':['Jugador por elección, maestro de corazón.','选择成为玩家，用心成为老师。'],
    'Contributors: KKHR, Cath':['Colaboradores: KKHR, Cath','贡献者：KKHR、Cath'],
    'In-Game Description:':['Descripción dentro del juego：','游戏内说明：'],
    'Full Explanation:':['Explicación completa：','完整说明：'],
    'See applicable items':['Ver objetos aplicables','查看适用对象'],
    'Check my Socials':['Mira mis redes','查看我的社交平台'],
    'NANONAITOR GAMING':['NANONAITOR GAMING','NANONAITOR GAMING'],
    'Builds supplied by Cathy and Nischhelm. You do not need every enchantment to beat the game.':['Configuraciones proporcionadas por Cathy y Nischhelm. No necesitas todos los encantamientos para completar el juego.','配装由 Cathy 与 Nischhelm 提供。通关不需要拥有所有附魔。'],
    'Unused':['Sin usar','未使用'],
    'Both':['Ambos','两者'],
    'Show All':['Mostrar todo','显示全部'],
    'Swords / Melee':['Espadas / cuerpo a cuerpo','剑／近战'],
    'Axes':['Hachas','斧'], 'Pickaxes':['Picos','镐'], 'Shovels':['Palas','锹'], 'Hoes':['Azadas','锄'], 'Bows':['Arcos','弓'],
    'Level':['Nivel','等级'], 'Pack filters':['Filtros de versión','版本筛选'], 'Build type filters':['Filtros de tipo de configuración','配装类型筛选'],
    'Obtaining':['Cómo obtenerlos','获取附魔'],
    'Incompatibilities':['Incompatibilidades','不兼容关系'],
    'Weapon Enchantment Incompatibilities':['Incompatibilidades de encantamientos de armas','武器附魔不兼容关系'],
    'Matrix view of the incompatibilities marked in the supplied Dregora workbook. A checkmark means the row and column enchantments cannot be combined.':['Matriz de las incompatibilidades indicadas para Dregora. Una marca significa que los encantamientos de esa fila y columna no pueden combinarse.','Dregora 附魔不兼容矩阵。勾号表示该行与该列的附魔不能组合。'],
    'Enchantment':['Encantamiento','附魔'],
    'Chart based on Nischhelm’s incompatibility guide.':['Tabla basada en la guía de incompatibilidades de Nischhelm.','表格依据 Nischhelm 的不兼容指南制作。'],
    'If you wish to contribute, contact Nanonaitor!':['Si deseas colaborar, ¡contacta a Nanonaitor!','如想参与贡献，请联系 Nanonaitor！'],
    'All Methods of Getting Enchants':['Todos los métodos para conseguir encantamientos','获得附魔的所有方法'],
    'Contents':['Contenido','目录'],
    'Enchantment Table':['Mesa de encantamientos','附魔台'],
    'Biotite Upgrading':['Mejora con biotita','末影黑云母升级'],
    'Disenchantment Table':['Mesa de desencantamiento','祛魔台'],
    'Dragging Items to the Top':['Mover encantamientos a la parte superior','把附魔移到最上方'],
    'Librarians':['Bibliotecarios','图书管理员'],
    'Exploring for Librarians':['Explorar en busca de bibliotecarios','探索并寻找图书管理员'],
    'Purification Rerolling':['Renovar ofertas con Purificación','用净化重置交易'],
    'Villager Breeder':['Criadero de aldeanos','村民繁殖场'],
    'Dungeon Loot & Mobs':['Botín y criaturas de mazmorras','地牢战利品与生物'],
    'Dungeon Loot and Mobs':['Botín y criaturas de mazmorras','地牢战利品与生物'],
    'Loot':['Botín','战利品'],
    'Mob Gear':['Equipo de criaturas','生物装备'],
    'Champion Mobs':['Criaturas campeonas','冠军生物'],
    'Book Wyrms':['Book Wyrms','书龙'],
    'Blooded Anvils':['Yunques de Sangre','鲜血铁砧'],
    'Blood Anvil':['Yunque de Sangre','鲜血铁砧'],
    'Breeding':['Crianza','繁殖'],
    'Upsides':['Ventajas','优点'], 'Downsides':['Desventajas','缺点'],
    'Tips, tricks and notes':['Consejos, trucos y notas','技巧与说明'],
    'Rerolling and anvils':['Renovación y yunques','重置与铁砧'],
    'Golden Bookwyrm scale tip':['Consejo para escamas de Bookwyrm dorado','金色书龙鳞片技巧'],
    'Eligible mobs':['Criaturas válidas','适用生物'],
    'Tips and danger':['Consejos y peligros','技巧与危险'],
    'Enchantment level and digestion time':['Nivel de encantamiento y tiempo de digestión','附魔等级与消化时间'],
    'All methods of getting enchants are valid and have positives and negatives. This guide covers every method in the supplied reference, including the Enchantment Table, Biotite upgrading, Disenchantment Table, librarians, dungeon loot, champion mobs and Book Wyrms.':['Todos los métodos para conseguir encantamientos son válidos y tienen ventajas y desventajas. Esta guía cubre la mesa de encantamientos, las mejoras con biotita, la mesa de desencantamiento, los bibliotecarios, el botín de mazmorras, las criaturas campeonas y los Book Wyrms.','每种获取附魔的方法都有优缺点。本指南涵盖附魔台、末影黑云母升级、祛魔台、图书管理员、地牢战利品、冠军生物和书龙。'],
    'Version note:':['Nota de versión：','版本说明：'],
    'The original guide does not account for Dregora or RLCraft 2.10, except for the Enchantment Table Biotite upgrading feature. Check the comparison notes in the Enchantments tab for later differences.':['La guía original no contempla Dregora ni RLCraft 2.10, salvo la mejora con biotita de la mesa de encantamientos. Consulta las notas comparativas de Encantamientos para ver diferencias posteriores.','原始指南未涵盖 Dregora 或 RLCraft 2.10，附魔台的末影黑云母升级功能除外。后续差异请查看“附魔”页的版本对比。'],
    'Consume EXP and Lapis to enchant items. This is the most accessible source with a good balance of costs and profit, and remains useful at all stages.':['Consume EXP y lapislázuli para encantar objetos. Es el método más accesible, equilibra bien coste y beneficio y resulta útil en todas las etapas.','消耗经验与青金石为物品附魔。这是最容易使用的方法，成本与收益平衡，并且各阶段都很实用。'],
    'Easy to access.':['Fácil de usar.','容易使用。'],
    'Has almost all enchants and can max many types of gear.':['Incluye casi todos los encantamientos y permite completar muchos tipos de equipo.','包含几乎所有附魔，并能完善多种装备。'],
    'Access to top-tier enchants such as Protection, Lifesteal and Swifter Slashes.':['Da acceso a encantamientos excelentes como Protección, Robo de vida y Cortes veloces.','可获得保护、生命窃取和唯快不破等顶级附魔。'],
    'Rerolling is tedious.':['Renovar las opciones es tedioso.','反复刷新较为繁琐。'],
    'Uses a fair amount of EXP.':['Consume bastante EXP.','消耗不少经验。'],
    'Needs the Disenchantment Table for full potential.':['Necesita la mesa de desencantamiento para aprovechar todo su potencial.','需要祛魔台才能发挥全部价值。'],
    'Unwanted enchants such as Thorns, Bane of Arthropods and Winter’s Grace can appear beside desired enchants.':['Pueden aparecer encantamientos no deseados, como Espinas, Perdición de los artrópodos o Gracia invernal.','可能附带荆棘、节肢杀手或冬雪恩典等垃圾附魔。'],
    'Cannot give Mending or Supreme enchants.':['No puede otorgar Reparación ni encantamientos Supremos.','无法提供经验修补或超级类附魔。'],
    "Block the table's bookshelves with torches or carpet, then enchant a cheap book or wooden dagger with a level I enchantment. You can also enchant four to seven different weapons and combine them on an anvil for a strong midgame weapon. Conflicts and unnecessary enchants can make this process awkward.":['Bloquea las estanterías con antorchas o alfombras y encanta un libro barato o una daga de madera con un encantamiento de nivel I. También puedes encantar de cuatro a siete armas y combinarlas en un yunque para crear un arma sólida de mitad de partida. Los conflictos y encantamientos innecesarios complican el proceso.','用火把或地毯遮挡书架，再给廉价书或木匕首附上 I 级附魔。也可为四到七把武器附魔后在铁砧合并，制作强力中期武器；冲突和多余附魔会使过程变复杂。'],
    'The table is an easy way to make Protection IV armor for midgame.':['La mesa facilita crear armadura con Protección IV para la mitad de la partida.','附魔台是中期制作保护 IV 盔甲的简单方法。'],
    'Summoning Staffs always have Unbreaking III and are an easy source of that book when disenchanted.':['Los bastones de invocación siempre tienen Irrompibilidad III y son una fuente sencilla de ese libro al desencantarlos.','召唤法杖固定带有耐久 III，祛魔后可方便取得该附魔书。'],
    'In Dregora 1.1.2b, the Enchantment Table can upgrade an enchantment to the next tier.':['En Dregora 1.1.2b, la mesa de encantamientos puede mejorar un encantamiento al siguiente grado.','在 Dregora 1.1.2b 中，附魔台可以把附魔提升到下一阶。'],
    'Insert a highest-level enchantment that has a tier above it, such as Advanced Sharpness V, Efficiency V or Looting III.':['Introduce un encantamiento en su nivel máximo que tenga un grado superior, como Filo avanzado V, Eficiencia V o Saqueo III.','放入已达最高等级且存在更高阶版本的附魔，例如高级锋利 V、效率 V 或抢夺 III。'],
    'Add Ender Biotite from the Ender Dragon or Biotite ore in the End.':['Añade biotita del End obtenida del Dragón del End o del mineral de biotita.','加入末地的末影黑云母。'],
    'Pay 8 Biotite and 8 EXP levels. Advanced Sharpness V becomes Supreme Sharpness I; Efficiency V becomes Advanced Efficiency I.':['Paga 8 de biotita y 8 niveles de EXP. Filo avanzado V pasa a Filo supremo I; Eficiencia V pasa a Eficiencia avanzada I.','消耗 8 个末影黑云母和 8 级经验。高级锋利 V 会变为超级锋利 I，效率 V 会变为高级效率 I。'],
    'It helps max enchants but is not reliable as the only route. Eight Looting III books can become one Advanced Looting III, while Supreme Sharpness requires sixteen Advanced Sharpness V books for Supreme Sharpness IV or thirty-two for Supreme Sharpness V.':['Ayuda a maximizar encantamientos, pero no conviene depender solo de este método. Ocho libros de Saqueo III producen un Saqueo avanzado III; Filo supremo requiere dieciséis Filo avanzado V para llegar a IV o treinta y dos para llegar a V.','它有助于升满附魔，但不适合作为唯一途径。八本抢夺 III 可合成一本高级抢夺 III；超级锋利需要十六本高级锋利 V 才能达到 IV，达到 V 则需三十二本。'],
    'Additionally in this mode, enchantments can be upgraded by level as well as by tier. Each level-up requires experience, has a 10% chance to fail and turn the enchantment into a curse, adds an “anvil use,” and may require materials other than Biotite.':['Además, en este modo los encantamientos pueden mejorarse tanto de nivel como de grado. Cada mejora de nivel requiere experiencia, tiene un 10% de probabilidad de fallar y convertir el encantamiento en una maldición, añade un «uso de yunque» y puede requerir materiales distintos de la Biotita.','此外，在此模式中，附魔不仅能升阶，也能升级。每次升级都需要经验，有 10% 的概率失败并将附魔变成诅咒，还会增加一次“铁砧使用次数”，并且可能需要末影黑云母以外的材料。'],
    'Some alternative materials include a Golden Bookwyrm Scale for upgrading Mending to Advanced Mending and a Demonic Heart for upgrading Protection to Advanced Protection.':['Algunos materiales alternativos incluyen una Escama de Librodrilo Dorado para mejorar Reparación a Reparación avanzada y un Corazón demoníaco para mejorar Protección a Protección avanzada.','替代材料包括：用金色书龙鳞片将经验修补升级为高级经验修补，以及用恶魔之心将保护升级为高级保护。'],
    'A new anvil type whose recipe lives up to its name. It can only be used once. It transfers every enchantment from the weapon in the left-slot to the weapon in the right-slot, destroying the left weapon in the process.':['Un nuevo tipo de yunque cuya receta hace honor a su nombre. Solo puede usarse una vez. Transfiere todos los encantamientos del arma de la ranura izquierda al arma de la ranura derecha y destruye el arma izquierda durante el proceso.','一种配方名副其实的新型铁砧，只能使用一次。它会把左侧槽位武器上的全部附魔转移到右侧武器，并在过程中摧毁左侧武器。'],
    'It is commonly used and recommended for passing the enchantments from your god weapon onto a new one. The transfer always costs 80 experience levels, regardless of the weapons’ anvil uses or enchantments.':['Se usa habitualmente y se recomienda para transferir los encantamientos de tu arma divina a una nueva. La transferencia siempre cuesta 80 niveles de experiencia, sin importar los usos de yunque ni los encantamientos de las armas.','它通常用于并推荐用于把毕业武器的附魔转移到新武器上。无论两把武器的铁砧使用次数或附魔如何，转移费用固定为 80 级经验。'],
    'Each single-use Blood Anvil is extremely expensive, requiring 31 Dragonsteel Ingots and 2 Sentient Cores. As such, you will need a pet dragon or 31 Vials of Dragon’s Breath.':['Cada Yunque de Sangre de un solo uso es extremadamente caro: requiere 31 Lingotes de Acero de Dragón y 2 Núcleos Sensibles. Por ello, necesitarás un dragón mascota o 31 Frascos de Aliento de Dragón.','每个一次性鲜血铁砧都极其昂贵，需要 31 个龙钢锭与 2 个感知核心。因此，你需要一条宠物龙或 31 瓶龙息。'],
    'Removes the topmost enchant from an item and applies it to a book, consuming the item. It enables clean endgame combining, but requires two Golden Bookwyrm Scales.':['Extrae el encantamiento superior de un objeto y lo pasa a un libro, consumiendo el objeto. Permite combinaciones limpias al final del juego, pero requiere dos escamas de Bookwyrm dorado.','取出物品最上方的附魔并转移到书上，同时消耗原物品。它能让后期合并更整洁，但需要两片金色书龙鳞片。'],
    'Salvages Enchantment Table, dungeon and mob loot.':['Recupera encantamientos de la mesa, mazmorras y botín de criaturas.','可回收附魔台、地牢及生物掉落装备上的附魔。'],
    'Creates clean books for optimal anvil combining.':['Crea libros limpios para combinarlos de forma óptima en el yunque.','制作干净附魔书，便于最优铁砧合并。'],
    'Dragging enchants to the top is costly and tedious.':['Mover encantamientos a la parte superior es caro y tedioso.','把附魔移到最上方既昂贵又繁琐。'],
    'Only one enchant can be pulled from each item.':['Solo puede extraerse un encantamiento de cada objeto.','每件物品只能取出一个附魔。'],
    'Obtain the same item with the desired enchant already on top. Put that item in the left anvil slot and the other copy in the right slot; the left slot is prioritized and drags the enchant to the top.':['Consigue el mismo objeto con el encantamiento deseado arriba. Colócalo en la ranura izquierda del yunque y la otra copia a la derecha; la izquierda tiene prioridad y mueve el encantamiento arriba.','准备同种物品，并让目标附魔位于最上方。将其放在铁砧左槽，另一件放右槽；左槽优先，因此目标附魔会被移到最上方。'],
    'You can disenchant a book onto another book to reset anvil uses. This is important for maxed melee weapons with fifteen or more enchants.':['Puedes desencantar un libro sobre otro para restablecer los usos de yunque. Es importante para armas cuerpo a cuerpo con quince o más encantamientos.','可把一本书的附魔转到另一本书上，以重置铁砧使用次数。这对拥有十五个以上附魔的满配近战武器很重要。'],
    'Villagers are the highest-cost, highest-reward method and can provide an effectively infinite supply of any single enchant besides curses.':['Los aldeanos son el método de mayor coste y recompensa, y ofrecen un suministro prácticamente infinito de cualquier encantamiento salvo maldiciones.','村民是成本与回报都最高的方法，除诅咒外，几乎能无限供应任意单个附魔。'],
    'Infinite supply of a chosen enchant.':['Suministro infinito del encantamiento elegido.','无限供应选定附魔。'],
    'Can sell any enchant besides curses.':['Pueden vender cualquier encantamiento salvo maldiciones.','出售所有除黑名单以外的所有顶级附魔书。'],
    'Best source for rare enchants such as Strengthened Vitality, Supreme Sharpness and Advanced Protection.':['La mejor fuente de encantamientos raros como Vitalidad reforzada, Filo supremo y Protección avanzada.','获取生机勃勃、超级锋利和高级保护等稀有附魔的最佳来源。'],
    'Requires emeralds.':['Requiere esmeraldas.','需要绿宝石。'],
    'Villagers die easily and need special protection.':['Los aldeanos mueren con facilidad y necesitan protección especial.','村民很脆弱，需要特别保护。'],
    'Village-type structures generally have one to three white coats, each with a 50/50 chance to be a librarian. Trade four times—the cheapest order is paper, books, bookshelf, then glass—to level him and reveal three total enchants. Waystones make access easier.':['Las estructuras de aldea suelen tener de uno a tres aldeanos de túnica blanca, cada uno con 50% de probabilidad de ser bibliotecario. Comercia cuatro veces —papel, libros, estantería y vidrio es el orden más barato— para subirlo de nivel y revelar tres encantamientos. Las piedras de transporte facilitan el acceso.','村庄类结构通常有一到三个白袍村民，每个有 50% 概率是图书管理员。交易四次即可升级并显示共三个附魔；最省钱顺序是纸、书、书架、玻璃。传送石能方便往返。'],
    'Purification gives a weapon a 5% chance per level to purify a zombie villager. Zombifying and purifying a librarian resets his offers. Use Purification III–V, a very low-damage weapon, and Hard difficulty so zombification is guaranteed.':['Purificación da al arma 5% de probabilidad por nivel de curar a un aldeano zombi. Zombificar y purificar a un bibliotecario renueva sus ofertas. Usa Purificación III–V, un arma de daño muy bajo y dificultad Difícil para garantizar la zombificación.','净化每级让武器获得 5% 概率治愈僵尸村民。让图书管理员僵尸化后再净化可重置交易。使用净化 III–V、极低伤害武器，并设为困难难度以保证僵尸化。'],
    'Zombify the librarian.':['Haz que el bibliotecario se convierta en zombi.','让图书管理员僵尸化。'],
    'Hit the zombie librarian until Purification activates.':['Golpea al bibliotecario zombi hasta que se active Purificación.','攻击僵尸图书管理员，直到净化触发。'],
    'Check the trades.':['Revisa los intercambios.','检查交易。'],
    'Repeat until the desired enchants appear.':['Repite hasta que aparezcan los encantamientos deseados.','重复直到出现想要的附魔。'],
    'Breed villagers to create more librarians. Minecraft 1.12 breeding is unusual, and many online designs are outdated, so test one before relying on it.':['Cría aldeanos para crear más bibliotecarios. La reproducción en Minecraft 1.12 es peculiar y muchos diseños de internet están desactualizados; pruébalos antes de depender de ellos.','繁殖村民以获得更多图书管理员。Minecraft 1.12 的繁殖机制较特殊，许多网上设计已过时，请先测试再依赖。'],
    'Dungeon loot, enchanted mob gear and Champion mobs provide books. They also provide resources and EXP, but are not sustainable as the only route to max gear. Rare enchants such as Upgraded Potentials are more likely here.':['El botín de mazmorras, el equipo encantado de criaturas y los campeones proporcionan libros, recursos y EXP, pero no bastan como única vía para maximizar equipo. Aquí es más probable encontrar encantamientos raros como Potenciales mejorados.','地牢战利品、生物附魔装备与冠军生物都会提供附魔书、资源和经验，但不足以单独支撑满配。潜能喷涌等稀有附魔在这里更常见。'],
    'Champion mobs have one to five stars, one modifier per star and stat multipliers from 0.5× to 7.5×. They drop one enchantment book per star, from Lesser Sharpness I to Supreme Sharpness V, Advanced Mending, Upgraded Potentials and curses.':['Las criaturas campeonas tienen de una a cinco estrellas, un modificador por estrella y multiplicadores de atributos de 0.5× a 7.5×. Sueltan un libro por estrella, desde Filo menor I hasta Filo supremo V, Reparación avanzada, Potenciales mejorados y maldiciones.','冠军生物有一到五星，每星一个修正，属性倍率为 0.5× 至 7.5×。每颗星掉落一本附魔书，范围可从次级锋利 I 到超级锋利 V、高级经验修补、潜能喷涌及诅咒。'],
    'Bookwyrms eat enchantment books and produce new ones. They require extensive breeding and protection but become a fast recycling machine.':['Los Bookwyrms comen libros encantados y producen otros. Requieren mucha crianza y protección, pero terminan siendo una máquina rápida de reciclaje.','书龙会吃掉附魔书并产出新书。它们需要大量繁殖与保护，但建成后是高效回收机器。'],
    'Fast and renewable after setup.':['Rápido y renovable después de prepararlo.','建成后快速且可再生。'],
    'Can recycle useless enchants.':['Recicla encantamientos inútiles.','可回收无用附魔。'],
    'Requires tedious breeding.':['Requiere una crianza tediosa.','繁殖过程繁琐。'],
    'Cannot normally provide Mending or Adept without a Golden Bookwyrm.':['Normalmente no ofrece Reparación ni Adepto sin un Bookwyrm dorado.','没有金色书龙时通常无法产出经验修补或熟能生巧。'],
    'Fragile and easy to lose.':['Es frágil y fácil de perder.','脆弱且容易损失。'],
    'Find Defiled Lands, then use Defiled Candy or love arrows. A Bookwyrm Analyzer is cheap and essential.':['Encuentra Tierras profanadas y usa caramelos profanados o flechas de amor. El analizador de Bookwyrms es barato y esencial.','找到污秽之地，再使用污秽糖果或爱心箭。书龙分析仪便宜且必不可少。'],
    'Created by':['Creado por','作者：'],
    'Additional contributor:':['Colaborador adicional：','其他贡献者：'],
    'High-risk damage build. Cursed Edge can kill its user; only use it with serious damage reduction and a tested backup plan.':['Configuración de daño y alto riesgo. Filo maldito puede matar al usuario; úsalo solo con una reducción de daño considerable y un plan alternativo probado.','高风险高伤害配装。诅咒之刃反伤极高，请对自己的伤害与防御有足够的把握，配备足够的减伤和备选方案才使用。'],
    'A fire-focused melee build for players who want sustained burning damage without the self-risk of Cursed Edge.':['Configuración cuerpo a cuerpo centrada en fuego para mantener daño por quemadura sin el riesgo personal de Filo maldito.','以火焰系附魔为核心增伤的近战配装，适合不想承担诅咒之刃自伤风险的玩家。'],
    'A gold-only magical melee build that converts weapon damage into magic damage and combines it with Magic Focus.':['Una configuración mágica cuerpo a cuerpo exclusiva para equipo de oro que convierte el daño del arma en daño mágico y lo combina con Magic Focus.','一套仅限黄金装备的魔法近战配装，可将武器伤害转化为魔法伤害，并与魔力聚焦叠加。'],
    'A core-only melee build that drops most filler enchants. Upgraded Potentials is not required, but Magic Focus is mandatory.':['Una configuración cuerpo a cuerpo que solo conserva los encantamientos esenciales. No requiere Potenciales mejorados, pero Magic Focus es obligatorio.','该武器仅保留了核心附魔，去除了大多数无用附魔，不需要潜能喷涌，但刚需魔力聚焦。'],
    'The same Magical Blessing core, but with Upgraded Potentials so the anvil order can be optimized.':['La misma base de Bendición mágica, pero con Potenciales mejorados para optimizar el orden del yunque.','与无潜能喷涌方案同理，刚需魔力聚焦；加入潜能喷涌后，铁砧顺序可以按下面优化。'],
    'A high-damage ranged foundation focused on draw speed, piercing and ammunition support.':['Base a distancia de gran daño centrada en velocidad de tensado, perforación y gestión de munición.','高伤害远程基础配装，侧重拉弓速度、穿透和弹药支援。'],
    'The Living and Sentient Bow has an Overcharge ability, so this specialized build prioritizes draw speed and damage-heavy arrows.':['El arco Viviente y Sensible tiene Sobrecarga, por lo que esta configuración prioriza velocidad de tensado y flechas de gran daño.','活体/感知弓拥有过载能力，因此这套专门配装优先拉弓速度和高伤害箭矢。'],
    'Core helmet enchantments are shown first, followed by optional additions.':['Primero se muestran los encantamientos esenciales del casco, luego las adiciones opcionales.','前几个是头盔核心附魔，其后为可选附加。'],
    'Core chestplate enchantments are shown first, followed by optional additions.':['Primero se muestran los encantamientos esenciales del peto, luego las adiciones opcionales.','前几个是胸甲核心附魔，其后为可选附加。'],
    'Core leggings enchantments are shown first, followed by optional additions.':['Primero se muestran los encantamientos esenciales de las grebas, luego las adiciones opcionales.','前几个是护腿核心附魔，其后为可选附加。'],
    'Core boots enchantments are shown first, followed by optional additions.':['Primero se muestran los encantamientos esenciales de las botas, luego las adiciones opcionales.','前几个是靴子核心附魔，其后为可选附加。'],
    'A complete everyday tool build for fast mining, automatic smelting and improved drops.':['Una configuración completa de herramientas de uso diario para minar rápido, fundir automáticamente y mejorar el botín.','日常工具满配，兼顾快速挖掘、自动熔炼和更好的掉落。'],
    'The complete tool build adapted for a hoe, with Moisturized added for farming.':['La configuración completa de herramientas adaptada a una azada, con Moisturized añadido para cultivar.','将完整工具配装改到锄头上，并加入保湿以便耕种。'],
    'A durable shield build with optional enchantments for stronger blocking, retaliation and emergency survival.':['Una configuración de escudo resistente con encantamientos opcionales para mejorar el bloqueo, el contraataque y la supervivencia de emergencia.','耐用盾牌配装，可选附魔用于强化格挡、反击和紧急保命。'],
    'Craft love arrows from crops and arrows, build a transformation altar from Obsidian, Quartz and Magma Blocks, place a stack of love arrows and wait about six minutes for transforming love arrows. Farm Bookwyrms and kill a Golden Bookwyrm with Looting III or an Emerald Arrow.':['Fabrica flechas de amor con cultivos y flechas; construye un altar de transformación con obsidiana, cuarzo y bloques de magma; coloca una pila de flechas de amor y espera unos seis minutos. Cría Bookwyrms y mata uno dorado con Saqueo III o una flecha de esmeralda.','用作物和箭制作爱心箭；用黑曜石、石英与岩浆块建造转化祭坛；放入一组爱心箭并等待约六分钟。饲养书龙，再用抢夺 III 或绿宝石箭击杀金色书龙。'],
    'When useful offers appear, keep the librarian and buy books, or continue rerolling. Search the RLCraft Discord or YouTube for a complete reroller setup.':['Cuando aparezcan ofertas útiles, conserva al bibliotecario y compra libros, o continúa renovando. Busca en el Discord de RLCraft o YouTube un sistema completo de renovación.','出现有用交易时，可保留该图书管理员并购买附魔书，也可继续刷新。完整刷新装置可在 RLCraft Discord 或 YouTube 中查找。'],
    'Unloaded chunks are safest for villagers.':['Los chunks descargados son los más seguros para los aldeanos.','未加载区块对村民最安全。'],
    'Banshees and Reapers can reach exposed underground halls.':['Las Banshees y los Reapers pueden alcanzar pasillos subterráneos expuestos.','女妖与死神能穿墙索敌并进入任意暴露的地下走廊。'],
    'Protection I–II Dragon Armor, Thorns III and a Regeneration Pad can protect villagers from Blight Banshees.':['Una armadura de dragón con Protección I–II, Espinas III y una plataforma de regeneración puede proteger a los aldeanos de Banshees Blight.','保护 I–II 的龙甲、荆棘 III 与再生垫可保护村民免受穿墙恐怖生物的伤害。'],
    'Dispense armor onto villagers.':['Usa dispensadores para equipar armadura a los aldeanos.','用发射器给村民穿上盔甲。'],
    'Prices never exceed 64 emeralds.':['Los precios nunca superan 64 esmeraldas.','价格不会超过 64 个绿宝石。'],
    'Buy another trade and wait if a trade runs out of stock.':['Si se agota una oferta, compra otra y espera.','某项交易缺货时，购买其他交易并等待补货。'],
    'Roguelike Dungeons, End dungeons and four-tower dungeons consistently provide strong quantities and quality of enchanted loot. Battle Towers and Mega Battle Towers contain some enchants but are less consistent. Roguelike bottom layers range from useless to top-tier books; End structures are dangerous but contain many enchanted items.':['Las mazmorras Roguelike, las del End y las de cuatro torres ofrecen buena cantidad y calidad de botín encantado. Las torres de batalla normales y grandes son menos constantes. Los pisos inferiores Roguelike pueden dar desde libros inútiles hasta excelentes; las estructuras del End son peligrosas pero contienen muchos objetos encantados.','Roguelike 地牢、末地地牢和四塔地牢能稳定提供大量优质附魔战利品。战斗塔与巨型战斗塔也有附魔，但不够稳定。Roguelike 底层可能从无用书到顶级书都有；末地结构危险，却含有许多附魔物品。'],
    'Dungeon mobs can spawn with randomly enchanted armor and weapons. Use the Disenchantment Table to pull those enchants from dropped gear. Roguelike Dungeons are the main source, while Dregora adds unique structures with unique gear.':['Las criaturas de mazmorra pueden aparecer con armas y armaduras encantadas al azar. Usa la mesa de desencantamiento para extraer esos encantamientos. Las mazmorras Roguelike son la fuente principal y Dregora añade estructuras y equipo exclusivos.','地牢生物可能携带随机附魔的盔甲与武器。用祛魔台从掉落装备中取出附魔。Roguelike 地牢是主要来源，而 Dregora 还加入了独特结构与装备。'],
    'Naturally spawning vanilla mobs.':['Criaturas vanilla generadas de forma natural.','自然生成的原版生物。'],
    'Vanilla mobs with unique NBT data, including armored Roguelike mobs and Diamond Axe Wither Skeletons.':['Criaturas vanilla con datos NBT especiales, como las criaturas armadas de Roguelike y los esqueletos Wither con hacha de diamante.','带有特殊 NBT 数据的原版生物，包括 Roguelike 装甲生物和钻石斧凋灵骷髅。'],
    'Scape and Run Parasites in Lost Cities.':['Parásitos de Scape and Run en las Ciudades Perdidas.','失落城市中的逃逸寄生虫。'],
    'End dungeons are the most efficient dungeon source.':['Las mazmorras del End son la fuente más eficiente.','末地地牢是最高效的地牢来源。'],
    'Lost Cities parasites have the most Champions but are extremely dangerous.':['Los parásitos de las Ciudades Perdidas tienen más campeones, pero son extremadamente peligrosos.','失落城市寄生虫中冠军最多，但极其危险。'],
    'Shielding is a particularly troublesome modifier.':['Shielding es un modificador especialmente problemático.','护盾是特别棘手的修正。'],
    'Looting and Luck improve drops.':['Saqueo y Suerte mejoran el botín.','抢夺与幸运可改善掉落。'],
    'Roguelike mobs may carry Fire Protection, Advanced Protection or Strengthened Vitality.':['Las criaturas Roguelike pueden llevar Protección contra el fuego, Protección avanzada o Vitalidad reforzada.','Roguelike 生物可能携带火焰保护、高级保护或生机勃勃。'],
    'Level determines the possible book pool and levels; digestion time controls output speed. Breed toward level 30 (40 in Dregora) and digestion time 1. They can be fed repeatedly.':['El nivel determina los libros y niveles posibles; el tiempo de digestión controla la velocidad. Cría hasta nivel 30 (40 en Dregora) y un tiempo de digestión de 1. Puedes alimentarlos repetidamente.','等级决定可产出的附魔书范围与等级；消化时间决定产出速度。繁殖目标为 30 级（Dregora 中为 40 级）、消化时间 1，可连续喂食。'],
    'Start with two naturally spawned Bookwyrms.':['Empieza con dos Bookwyrms generados de forma natural.','从两只自然生成的书龙开始。'],
    'Breed and analyze each generation.':['Cría y analiza cada generación.','繁殖并分析每一代。'],
    'Keep the best two and repeat.':['Conserva los dos mejores y repite.','保留最好的两只并重复。'],
    'Separate generations with leads until level 30 (40 in Dregora) and digestion time 1.':['Separa las generaciones con correas hasta alcanzar el nivel 30 (40 en Dregora) y un tiempo de digestión de 1.','用拴绳分开各代，直到达到 30 级（Dregora 中为 40 级）且消化时间为 1。'],
    'Do not cull old generations until the maxed pair is complete. Breeding maxed Bookwyrms has a 1/100 chance to produce a Golden Bookwyrm. Golden Bookwyrms add Mending and Adept. Bookwyrms cannot provide Supreme enchants or curses.':['No elimines generaciones antiguas hasta completar la pareja máxima. Criar dos Bookwyrms máximos tiene 1/100 de probabilidad de producir uno dorado. Los dorados añaden Reparación y Adepto. Los Bookwyrms no pueden dar encantamientos Supremos ni maldiciones.','在满配繁殖对完成前，不要淘汰旧代。两只满级书龙繁殖时有 1/100 概率产出金色书龙。金色书龙可增加经验修补与熟能生巧；书龙不能产出超级附魔或诅咒。'],
    'Additional contributor:':['Colaborador adicional：','其他贡献者：'],
    '. Additional contributor:':['. Colaborador adicional：','。其他贡献者：']
    ,'Dregora 1.1.2b | Max Melee Cursed Edge [by Cathy & Nischhelm]':['Dregora 1.1.2b | Cuerpo a cuerpo máximo: Filo maldito [por Cathy y Nischhelm]','Dregora 1.1.2b｜满配近战：诅咒之刃［Cathy & Nischhelm］']
    ,'Dregora 1.1.2b | Max Melee Ash Destroyer [by Cathy & Nischhelm]':['Dregora 1.1.2b | Cuerpo a cuerpo máximo: Destructor de cenizas [por Cathy y Nischhelm]','Dregora 1.1.2b｜满配近战：灰烬之击［Cathy & Nischhelm］']
    ,'Dregora 1.1.2b | Max Magical Melee Cursed Edge [by Nanonaitor & blue0666]':['Dregora 1.1.2b | Cuerpo a cuerpo mágico máximo: Filo maldito [por Nanonaitor y blue0666]','Dregora 1.1.2b｜满配魔法近战：诅咒之刃［Nanonaitor & blue0666］']
    ,'Dregora 1.1.2b | Max Melee Magical Blessing without Upgraded Potentials [by Remember_be_forever & blue0666 & 云气非依彩虹]':['Dregora 1.1.2b | Cuerpo a cuerpo máximo: Bendición mágica sin Potenciales mejorados [por Remember_be_forever, blue0666 y 云气非依彩虹]','Dregora 1.1.2b｜满配近战：魔法祝福&无潜能喷涌［Remember_be_forever & blue0666 & 云气非依彩虹］']
    ,'Dregora 1.1.2b | Max Melee Magical Blessing with Upgraded Potentials [by Remember_be_forever & blue0666 & 云气非依彩虹]':['Dregora 1.1.2b | Cuerpo a cuerpo máximo: Bendición mágica con Potenciales mejorados [por Remember_be_forever, blue0666 y 云气非依彩虹]','Dregora 1.1.2b｜满配近战：魔法祝福&含潜能喷涌［Remember_be_forever & blue0666 & 云气非依彩虹］']
    ,'Dregora 1.1.2b | Max Bow [by Cathy]':['Dregora 1.1.2b | Arco máximo [por Cathy]','Dregora 1.1.2b｜满配弓［Cathy］']
    ,'Dregora 1.1.2b | Max Sentient Bow [by Cathy]':['Dregora 1.1.2b | Arco Sensible máximo [por Cathy]','Dregora 1.1.2b｜满配感知弓［Cathy］']
    ,'Dregora 1.1.2b | Max Helmet [by Cathy]':['Dregora 1.1.2b | Casco máximo [por Cathy]','Dregora 1.1.2b｜满配头盔［Cathy］']
    ,'Dregora 1.1.2b | Max Chestplate [by Cathy]':['Dregora 1.1.2b | Peto máximo [por Cathy]','Dregora 1.1.2b｜满配胸甲［Cathy］']
    ,'Dregora 1.1.2b | Max Leggings [by Cathy]':['Dregora 1.1.2b | Grebas máximas [por Cathy]','Dregora 1.1.2b｜满配护腿［Cathy］']
    ,'Dregora 1.1.2b | Max Boots [by Cathy]':['Dregora 1.1.2b | Botas máximas [por Cathy]','Dregora 1.1.2b｜满配靴子［Cathy］']
    ,'Dregora 1.1.2b & RLCraft 2.9.3 | Max Axe, Pickaxe & Shovel [by KKHR]':['Dregora 1.1.2b y RLCraft 2.9.3 | Hacha, pico y pala máximos [por KKHR]','Dregora 1.1.2b 与 RLCraft 2.9.3｜满配斧、镐与锹［KKHR］']
    ,'Dregora 1.1.2b & RLCraft 2.9.3 | Max Hoe [by KKHR]':['Dregora 1.1.2b y RLCraft 2.9.3 | Azada máxima [por KKHR]','Dregora 1.1.2b 与 RLCraft 2.9.3｜满配锄［KKHR］']
    ,'Dregora 1.1.2b & RLCraft 2.10 | Max Shield [by KKHR]':['Dregora 1.1.2b y RLCraft 2.10 | Escudo máximo [por KKHR]','Dregora 1.1.2b 与 RLCraft 2.10｜满配盾牌［KKHR］']
    ,'Dregora 1.1.2b | Max Ranged [by Cathy]':['Dregora 1.1.2b | Distancia máxima [por Cathy]','Dregora 1.1.2b｜满配弓［Cathy］']
    ,'Dregora 1.1.2b | Max Ranged Sentient Bow Only [by Cathy]':['Dregora 1.1.2b | Distancia máxima, solo arco Sensible [por Cathy]','Dregora 1.1.2b｜满配感知弓［Cathy］']
    ,'Warning: Cursed Edge is high risk and high reward. Do not use it without enough damage reduction. Do not pair it with Sinful and an off-hand Sentient Greatcleaver unless you have 60%+ magic-adapted Living/Sentient Armor. Silver armor, a Cross Necklace and natural blocking are alternatives. Consider Ash Destroyer instead.':['Advertencia: Filo maldito implica mucho riesgo y recompensa. No lo uses sin suficiente reducción de daño. No lo combines con Sinful y un Sentient Greatcleaver en la mano secundaria salvo que tengas armadura Viviente/Sensible adaptada a magia en 60% o más. La armadura de plata, un collar de cruz y Bloqueo natural son alternativas. Considera usar Destructor de cenizas.','警告：诅咒之刃高风险、高回报。没有足够减伤时不要使用。除非活体/感知护甲拥有至少 60% 的魔法适应，否则不要同时使用罪恶感增益和副手感知巨劈刀。银制护甲、十字项链与本能防卫可作为替代；也可改用灰烬之击。']
    ,'Ash Destroyer scales with the target’s remaining burn time. Confirm your weapon, fire resistance and target matchups before using it as a general-purpose weapon.':['Destructor de cenizas aumenta según el tiempo de quemadura restante del objetivo. Comprueba el arma, la resistencia al fuego y los enfrentamientos antes de usarla como arma general.','灰烬之击会根据目标剩余燃烧时间提高伤害。把它作为通用武器前，请先确认武器、火焰抗性与目标类型是否匹配。']
    ,'Choose your arrow and firing branch carefully. Test ammunition behavior in your exact versions before committing Infinity.':['Elige con cuidado la flecha y la rama de disparo. Prueba el comportamiento de la munición en tu versión antes de comprometerte con Infinidad.','谨慎选择箭矢与射击路线。决定使用无限前，请在对应版本中测试弹药行为。']
    ,'The Overcharge ability is why this build differs from the general ranged build. With draw-speed investment and diamond arrows, it can reach roughly 260 damage per shot in the right setup.':['La habilidad Sobrecarga hace que esta configuración difiera de la opción general a distancia. Con velocidad de tensado y flechas de diamante, puede alcanzar cerca de 260 de daño por disparo en la preparación adecuada.','过载能力使这套配装不同于普通远程配装。投入拉弓速度并使用钻石箭时，在合适配置下每箭约可达到 260 伤害。']
  };

  const index=()=>lang==='es'?0:lang==='zh'?1:-1;
  const sourceFor=value=>Object.keys(pairs).find(key=>key===value||pairs[key].includes(value));
  function translateTree(root){const i=index();if(!root)return;const visit=node=>{for(const child of [...node.childNodes]){if(child.nodeType===3){const raw=child.textContent,key=raw.trim(),source=sourceFor(key),value=source&&(i<0?source:pairs[source][i]);if(value)child.textContent=raw.replace(key,value);}else if(!['SCRIPT','STYLE'].includes(child.tagName))visit(child);}};visit(root);}
  function localizeIncompatNames(){if(typeof data==='undefined'||typeof locales==='undefined')return;const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');document.querySelectorAll('.incompat-matrix th').forEach((th,i)=>{if(i===0)return;th.dataset.english??=th.textContent.trim();const row=data.find(r=>norm(r.name)===norm(th.dataset.english));if(row)th.textContent=index()<0?row.name:(locales[lang]?.[row.id]?.name||row.name);});}
  function apply(){translateTree(document.body);localizeIncompatNames();document.querySelectorAll('.description-block>strong').forEach((node,i)=>node.textContent=i%2?(pairs['Full Explanation:']?.[index()]||'Full Explanation:'):(pairs['In-Game Description:']?.[index()]||'In-Game Description:'));document.querySelectorAll('.applicable-list>summary').forEach(n=>n.textContent=index()<0?'See applicable items':pairs['See applicable items'][index()]);document.querySelectorAll('.build-level').forEach(n=>{if(index()>=0)n.textContent=n.textContent.replace(/^Level\s+/,pairs.Level[index()]+' ');});}
  document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setTimeout(apply,0)));
  window.addEventListener('hashchange',()=>setTimeout(apply,0));
  window.addEventListener('load',()=>setTimeout(apply,0));
  setTimeout(apply,50);
})();
