# Enchantment Guide — Regular RLCraft and RLCraft Dregora

Updated: 9 October 2026. Minecraft Java Edition 1.12.2.

## Which versions this guide describes

This is a guide to the two installed profiles checked on this PC, not a promise that every release or server configuration behaves identically:

- Regular RLCraft: profile named "RLCraft"; So Many Enchantments 0.5.5, Better Survival 1.5.3, RLMixins 1.2.15, RLCombat 2.0.8. This is the 2.9.3-era enchantment setup.
- Dregora 1.1.2b: So Many Enchantments 1.0.8, Better Survival 1.5.4, RLMixins 1.4.6 and RLCombat 2.2.4. Do not confuse it with the separate Dregora Parasited profile.
- Your installed Nanonaitor's Arsenal and Defenders additions have their own sections. They are not stock modpack dependencies.

The catalogue includes every entry in these profiles' saved FantasticLib enchantment registry lists. It also explains relevant disabled/removed entries so old books, videos and names are less confusing. Resource-pack-only names with no registered enchantment are not counted as working enchantments.

## How to read the entries

- Each enchantment has a use category, availability, an explanation and its registry ID. Entries are alphabetized within their owning mod.
- Shared descriptions explain the common gameplay purpose. Separate Regular RLCraft and Dregora paragraphs call out verified material differences. A shared description is not a claim that every internal coefficient/event order is byte-for-byte identical.
- "Registered" means it appears in the saved runtime registry. It does NOT guarantee access through the enchanting table, librarian trades, all loot tables or normal Survival. Treasure flags, enchanting power and special structures can impose additional limits.
- "Maximum" is the ordinary configured/verified level, not the highest number commands or illegal structure loot can put on an item. An above-cap book does not necessarily scale safely or linearly.
- Numbers are given where checked. Entries without numerical coefficients describe the effect without inventing percentages. Some equipment categories are broader than a particular item's enchanting-table eligibility; anvil and modded-item rules can differ.
- L means enchantment level. One damage point is half a vanilla heart. First Aid body-part health is not equivalent to one ordinary shared health bar.
- Proc means a chance-based activation. Hurt-invulnerability / i-frames means the short protection period after a target is hit, NOT armor. Ignoring armor does not automatically ignore Protection, Resistance, magic shielding, parasite caps or other damage handling.
- Unless stated otherwise, melee damage/proc examples assume a qualifying fully charged attack. RLCombat, target immunity and event ordering can change the result of rapid or weak attacks.
- XP means experience points, not whole experience levels. XP-to-level conversion is nonlinear. Effective Looting modifies eligible drop rules; it is not a guaranteed number of extra items.
- DPS means damage over time; damage per hit is a different quantity. This distinction matters especially for Fiery Edge, Swifter Slashes and Cursed Edge.

## Corrections to the original notes

The original document combined old SME effects with newer Dregora effects. Important corrections made here:

- Education is patched to +30% XP per level in BOTH checked profiles and excludes bosses and blights. The unpatched +50% figure was not the actual configured behavior.
- Regular RLCraft Disorientating Blade applies Slowness, not Mining Fatigue. Dregora instead uses Nausea/Blindness.
- Dregora Purging Blade does not retain the old separate magic-damage proc and unconditional 1.2 multiplier.
- Dregora True Strike also bypasses SME Evasion and Parry; the 1% i-frame roll is an additional effect, not its entire function.
- Old and new Adept treat blights differently; they should not be described with one shared formula.
- Luck Magnification's duplicate sections have been consolidated, with the old and new critical mechanics separated.

Coverage audit: 214 regular-profile registry entries and 239 Dregora-profile registry entries are mapped to the entries below. Renamed equivalents share one entry. Additional disabled legacy entries are included for reference. Total guide entries: 243.

## Contents

1. Minecraft / Vanilla
2. So Many Enchantments
3. Better Survival
4. Aquaculture
5. Charm
6. Defiled Lands
7. Grappling Hook Mod
8. Locks
9. Simple Difficulty
10. Spartan Shields
11. Spartan Weaponry
12. Switch-Bow
13. Fish's Undead Rising
14. Nanonaitor's Arsenal (personal add-on)
15. Defenders (personal add-on)
16. Detailed comparisons for the original draft
17. Compatibility and build notes
18. Sources and verification limits

## Minecraft / Vanilla

### Aqua Affinity

Use: Helmet.

Availability — both: Registered; maximum 1.

Effect: Removes the usual underwater mining-speed penalty. The separate penalty for mining while not standing on the ground can still apply.

ID: minecraft:aqua_affinity.

### Bane of Arthropods

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Adds 2.5 damage per level against arthropod-classified enemies and applies Slowness to them. Useful against qualifying spiders and similar creatures, not every insect-looking modded mob.

ID: minecraft:bane_of_arthropods.

### Blast Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: Specialized protection against explosions, with an explosion-knockback benefit. It does not stop terrain from being destroyed.

ID: minecraft:blast_protection.

### Curse of Binding

Use: Wearable equipment.

Availability — both: Registered; maximum 1.

Effect: Prevents normal removal of the worn item until it breaks or the wearer dies; Creative mode is an exception.

ID: minecraft:binding_curse.

### Curse of Vanishing

Use: Equipment.

Availability — both: Registered; maximum 1.

Effect: Makes the cursed item disappear on death under normal death-drop rules.

ID: minecraft:vanishing_curse.

### Depth Strider

Use: Boots.

Availability — both: Registered; maximum 3.

Effect: Reduces movement slowdown in water. Conflicts with Frost Walker.

ID: minecraft:depth_strider.

### Efficiency

Use: Mining tools.

Availability — both: Registered; maximum 5.

Effect: Speeds up effective tool use. It does not grant a tool the ability to harvest blocks that require a higher material tier.

ID: minecraft:efficiency.

### Feather Falling

Use: Boots.

Availability — both: Registered; maximum 4.

Effect: Reduces falling damage, including vanilla ender-pearl teleport damage. It does not increase jump height.

ID: minecraft:feather_falling.

### Fire Aspect

Use: Melee weapons.

Availability — both: Registered; maximum 2.

Effect: Sets eligible targets on fire after a hit. Fire immunity can negate burning; killing eligible animals while burning can yield cooked food.

ID: minecraft:fire_aspect.

### Fire Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: Specialized protection against fire and lava, also shortening time spent burning. It is not complete fire immunity.

ID: minecraft:fire_protection.

### Flame

Use: Bows.

Availability — both: Registered; maximum 1.

Effect: Ignites arrows so eligible enemies burn when hit. Fire-resistant targets can ignore the burning component.

ID: minecraft:flame.

### Fortune

Use: Mining tools.

Availability — both: Registered; maximum 3.

Effect: Improves drops from compatible blocks such as many ores and crops. It does not increase every block drop and conflicts with Silk Touch.

ID: minecraft:fortune.

### Frost Walker

Use: Boots.

Availability — both: Registered; maximum 2.

Effect: Temporarily freezes surface water into frosted ice while walking and protects against normal magma-block contact damage. Conflicts with Depth Strider.

ID: minecraft:frost_walker.

### Infinity

Use: Bows.

Availability — both: Registered; maximum 1.

Effect: Allows vanilla normal arrows to be fired without consuming them while an arrow is available. It does not give unlimited tipped arrows or every modded ammunition type. Normally conflicts with Mending.

ID: minecraft:infinity.

### Knockback

Use: Melee weapons.

Availability — both: Registered; maximum 2.

Effect: Pushes struck enemies farther away. Knockback resistance and special mob movement can reduce its practical effect.

ID: minecraft:knockback.

### Looting

Use: Melee weapons / mob drops.

Availability — both: Registered; maximum 3.

Effect: Raises the effective looting level used by compatible mob-drop rules. It does not multiply all drops or guarantee rare items.

ID: minecraft:looting.

### Luck of the Sea

Use: Fishing rods.

Availability — both: Registered; maximum 3.

Effect: Improves fishing-loot quality in fishing systems that honor the enchantment. RLCraft's Fishing Made Better changes fishing, so vanilla fishing percentages are not a universal pack-wide guarantee.

ID: minecraft:luck_of_the_sea.

### Lure

Use: Fishing rods.

Availability — both: Registered; maximum 3.

Effect: Improves bite timing in fishing systems that honor the enchantment. It does not directly increase the rarity of catches.

ID: minecraft:lure.

### Mending

Use: Durability-bearing equipment.

Availability — both: Registered; maximum 1.

Effect: Uses collected XP to repair eligible equipped or held items. XP spent on repair is not added to the player's XP bar; merely carrying an item in the main inventory is not enough.

ID: minecraft:mending.

### Power

Use: Bows.

Availability — both: Registered; maximum 5.

Effect: Increases bow-arrow damage. This is not a general damage multiplier for unrelated guns, magic projectiles or melee hits.

ID: minecraft:power.

### Projectile Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: Specialized protection against qualifying projectile damage. Not every attack that looks like a projectile uses that damage classification.

ID: minecraft:projectile_protection.

### Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: General protection against eligible damage. It does not prevent every damage source; void and certain modded damage can bypass protection.

ID: minecraft:protection.

### Punch

Use: Bows.

Availability — both: Registered; maximum 2.

Effect: Adds knockback to arrows. It does not directly increase their damage.

ID: minecraft:punch.

### Respiration

Use: Helmet.

Availability — both: Registered; maximum 3.

Effect: Extends underwater breathing time and gives chances to avoid drowning damage after air runs out. It is not permanent water breathing.

ID: minecraft:respiration.

### Sharpness

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Adds general melee damage: 0.5 + 0.5 x level, or +3 damage at V, before relevant combat adjustments and defenses. Advanced and Supreme Sharpness are separate SME enchantments.

ID: minecraft:sharpness.

### Silk Touch

Use: Mining tools.

Availability — both: Registered; maximum 1.

Effect: Makes supported blocks drop themselves instead of their normal processed drops. Conflicts with Fortune; block-specific exceptions remain.

ID: minecraft:silk_touch.

### Smite

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Adds 2.5 damage per level against entities classified as undead: +12.5 at V. A parasite, dragon or other monster does not qualify merely because it looks undead.

ID: minecraft:smite.

### Sweeping Edge

Use: Swords / sweep attacks.

Availability — both: Registered; maximum 3.

Effect: Increases damage dealt to secondary targets by qualifying sword sweeps. It does not automatically make every weapon or every attack sweep.

ID: minecraft:sweeping.

### Thorns

Use: Armor.

Availability — both: Registered; maximum 3.

Effect: Can damage an attacker when the wearer is hit, at an additional durability cost. Reflection is its own damage event, not another full weapon swing.

ID: minecraft:thorns.

### Unbreaking

Use: Durability-bearing equipment.

Availability — both: Registered; maximum 3.

Effect: Gives chances not to consume durability. Armor uses different durability-saving rules from tools; this is not literal unbreakability.

ID: minecraft:unbreaking.

## So Many Enchantments

### Adept

Use: Weapons / XP.

Availability — both: Registered; maximum 3.

Effect: Increases XP from qualifying kills, not item drops. Does not create XP from mobs whose eligible XP reward is zero. Compatible with Looting-type enchants but conflicts with Education. See the detailed comparison below.

Regular RLCraft: With the enabled RLMixins overhaul, ordinary mobs and blights use floor(XP x (1 + 0.15L)) + L; non-blight bosses use floor(XP x (1 + 0.5L)) + L.

Dregora: Ordinary mobs add max(floor((L+1)/2), floor(XP x 0.15L)); bosses AND blights use 0.5L instead. At III, the minimum addition is 2 XP.

ID: somanyenchantments:adept.

### Advanced Bane of Arthropods

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: A stronger arthropod specialist than vanilla Bane of Arthropods. Also slows qualifying enemies; creature classification, not appearance, determines eligibility.

ID: somanyenchantments:advancedbaneofarthropods.

### Advanced Blast Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: A stronger explosion-specialist protection enchantment. Useful against explosion damage, not every attack with dramatic particles.

ID: somanyenchantments:advancedblastprotection.

### Advanced Efficiency

Use: Mining tools.

Availability — both: Registered; maximum 5.

Effect: A stronger mining-speed enchantment than Efficiency. Harvest-level requirements still apply.

IDs — Regular: somanyenchantments:advancedefficency; Dregora: somanyenchantments:advancedefficiency.

### Advanced Feather Falling

Use: Boots.

Availability — both: Registered; maximum 4.

Effect: Stronger protection against fall damage than the vanilla enchantment. Does not itself make the player fly or jump higher.

ID: somanyenchantments:advancedfeatherfalling.

### Advanced Fire Aspect

Use: Melee weapons.

Availability — both: Registered; maximum 2.

Effect: A stronger fire-aspect tier that burns enemies longer than weaker tiers. Burning duration matters to Dregora's Ash Destroyer. Conflicts with the other fire-aspect choices, including Fiery Edge.

IDs — Regular: somanyenchantments:afa; Dregora: somanyenchantments:advancedfireaspect.

### Advanced Fire Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: Stronger specialized protection from fire damage than vanilla Fire Protection. It is not a blanket immunity to all heat-related mechanics.

ID: somanyenchantments:advancedfireprotection.

### Advanced Flame

Use: Bows.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: An upgraded Flame tier that increases the burning applied by arrows. Direct arrow damage and subsequent fire damage remain different parts of an attack.

IDs — Regular: somanyenchantments:afl; Dregora: somanyenchantments:advancedflame.

### Advanced Knockback

Use: Melee weapons.

Availability — both: Registered; maximum 2.

Effect: A stronger knockback option than vanilla Knockback. Can help create distance, but can also push enemies out of melee reach.

ID: somanyenchantments:advancedknockback.

### Advanced Looting

Use: Weapons / mob drops.

Availability — both: Registered; maximum 3.

Effect: A stronger Looting option that improves compatible mob-drop rolls. Conflicts with ordinary Looting and Education; it can be paired with Adept.

ID: somanyenchantments:advancedlooting.

### Advanced Luck of the Sea

Use: Fishing rods.

Availability — both: Registered; maximum 3.

Effect: A stronger fishing-luck option. Its usefulness depends on the fishing system and loot rules being used; it is not a bonus to weapon critical hits.

ID: somanyenchantments:advancedluckofthesea.

### Advanced Lure

Use: Fishing rods.

Availability — both: Registered; maximum 3.

Effect: An upgraded bite-speed enchantment for compatible fishing mechanics. Do not confuse faster bites with a direct rare-loot multiplier.

ID: somanyenchantments:advancedlure.

### Advanced Mending

Use: Durability-bearing equipment.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: An improved XP-repair enchantment. The packs include compatibility handling for repair selection; it is not passive repair without XP.

ID: somanyenchantments:advancedmending.

### Advanced Power

Use: Bows.

Availability — both: Registered; maximum 5.

Effect: A stronger arrow-damage tier than vanilla Power. Applies to compatible bow attacks, not all ranged damage sources.

ID: somanyenchantments:advancedpower.

### Advanced Projectile Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: Stronger specialized mitigation of qualifying projectile damage than the vanilla enchantment.

ID: somanyenchantments:advancedprojectileprotection.

### Advanced Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: An upgraded general Protection option for eligible incoming damage. Armor, enchantment mitigation and other reductions are distinct mechanics.

ID: somanyenchantments:advancedprotection.

### Advanced Punch

Use: Bows.

Availability — both: Registered; maximum 2.

Effect: A stronger arrow-knockback enchantment than Punch. It is primarily crowd control, not a direct arrow-damage bonus.

ID: somanyenchantments:advancedpunch.

### Advanced Sharpness

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Adds 1.25 + 0.95L general damage: +6 at V. Regular Sharpness V adds +3; Supreme Sharpness V adds +12. Full-charge/defense modifiers still matter.

Regular RLCraft: Uses the older broad damage-enchantment incompatibilities.

Dregora: Different damage tiers can coexist when their type and tier restrictions allow it; Advanced Sharpness still cannot stack with another Sharpness tier or another Advanced damage-type enchantment.

ID: somanyenchantments:advancedsharpness.

### Advanced Smite

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: An upgraded anti-undead enchantment. Dregora's implementation adds 3.25L damage to undead (+16.25 at V) and can weaken them. It is not a universal bonus against every monster.

ID: somanyenchantments:advancedsmite.

### Advanced Thorns

Use: Armor.

Availability — both: Registered; maximum 3.

Effect: A stronger retaliation enchantment than vanilla Thorns. Retaliation is separate from your weapon's ordinary attack damage.

ID: somanyenchantments:advancedthorns.

### Ancient Sealed Curses

Use: Weapons.

Availability — Regular RLCraft: Disabled. Dregora: Registered; maximum 1.

Effect: Can add curses to an opponent's held or worn equipment. Requires appropriate equipment on the target; it is not simply a direct damage enchantment.

Regular RLCraft: Disabled in the checked regular profile.

Dregora: Enabled in the checked Dregora profile.

ID: somanyenchantments:ancientsealedcurses.

### Ancient Sword Mastery

Use: Weapons.

Availability — Regular RLCraft: Disabled. Dregora: Registered; maximum 3.

Effect: A special damage enchantment; availability and mechanics differ substantially.

Regular RLCraft: Disabled. The older implementation describes sword proficiency and enhanced damage-enchantment effects.

Dregora: Enabled. Increases damage based on the target's attack damage, rewarding use against hard-hitting enemies.

ID: somanyenchantments:ancientswordmastery.

### Arc Slash

Use: Melee weapons / sweeping.

Availability — both: Registered; maximum 3.

Effect: Adds or improves sweeping attacks against nearby secondary targets, without the same restrictions as vanilla Sweeping Edge. It is not extra reach to the main target. Conflicts with Sweeping Edge.

IDs — Regular: somanyenchantments:swiper; Dregora: somanyenchantments:arcslash.

### Ascetic

Use: Equipment / loot curse.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered; maximum 3.

Effect: Suppresses loot-related rewards. This is a harmful enchantment for normal farming, not a replacement for Looting. Conflicts with Luck Magnification and loot-oriented enchantments.

ID: somanyenchantments:ascetic.

### Ash Destroyer

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Increases damage against burning enemies. Fire-immune enemies and expired burning reduce its value.

Regular RLCraft: Uses the older burning-target damage bonus rather than Dregora's remaining-fire-duration scaling.

Dregora: Multiplier is 1 + 0.2L x min(1, remaining fire ticks / 640). It takes 32 seconds of remaining burning to reach the full multiplier. Short burns give a smaller bonus.

ID: somanyenchantments:ashdestroyer.

### Atomic Deconstructor

Use: Weapons.

Availability — both: Registered; maximum 2.

Effect: Very rarely attempts an instant kill. Do not build around it as guaranteed boss removal: entity immunity and pack-specific handling can matter.

ID: somanyenchantments:atomicdeconstructor.

### Blessed Edge

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: An anti-undead damage enchantment with healing for the user. It is not the same enchantment as Lifesteal, and incompatibilities constrain combining them.

ID: somanyenchantments:blessededge.

### Bluntness

Use: Weapons / harmful enchantment.

Availability — both: Registered; maximum 5.

Effect: Reduces attack damage. A drawback rather than an offensive upgrade.

ID: somanyenchantments:bluntness.

### Breached Plating

Use: Armor / curse.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered; maximum 5.

Effect: Weakens the protection supplied by the cursed armor. It does not improve your own armor penetration.

ID: somanyenchantments:breachedplating.

### Brutality

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Increases durability damage to enemy armor. Particularly relevant against equipment-wearing opponents; it does not mean the same percentage increase to their health damage.

ID: somanyenchantments:brutality.

### Burning Shield

Use: Shields.

Availability — both: Registered; maximum 4.

Effect: Retaliates against shield attackers and sets eligible attackers on fire. It should not be treated as universal protection from shield-disabling attacks.

IDs — Regular: somanyenchantments:fieryshield; Dregora: somanyenchantments:burningshield.

### Burning Thorns

Use: Armor.

Availability — both: Registered; maximum 3.

Effect: A Thorns-style retaliation enchantment that also ignites eligible attackers.

ID: somanyenchantments:burningthorns.

### Butchering

Use: Melee weapons / animals.

Availability — both: Registered; maximum 5.

Effect: A specialist against EntityAnimal-class creatures, such as cows, pigs, sheep and chickens. Modded creatures must actually use the qualifying class.

Regular RLCraft: The enabled RLMixins combat handler adds +1 damage per level against qualifying animals. No extra animal-Looting bonus in that handler.

Dregora: Adds +2 damage per level and +1 effective Looting level per level against qualifying animals. V gives +10 damage and +5 effective Looting. Can coexist with Sharpness types.

ID: somanyenchantments:butchering.

### Clearskies' Favor

Use: Melee weapons / weather.

Availability — Regular RLCraft: Registered; maximum 6. Dregora: Registered; maximum 5.

Effect: A clear-weather damage specialist. Conflicts with the other weather/time enchantments.

Regular RLCraft: Older weather logic can penalize damage outside favorable conditions.

Dregora: Reworked into a clear-weather bonus, with an extra benefit when exposed to the sky; unfavorable weather does not use the old curse-like penalty design.

IDs — Regular: somanyenchantments:clearsky; Dregora: somanyenchantments:clearskiesfavor.

### Combat Medic / Combat Veterancy

Use: Healing support.

Availability — Regular RLCraft: Disabled. Dregora: Registered; maximum 3.

Effect: Improves healing received by the user. Healing benefits still depend on the source and pack healing rules.

Regular RLCraft: Named Combat Veterancy and disabled in the checked profile.

Dregora: Named Combat Medic and enabled; incompatible with Curse of Vulnerability.

ID: somanyenchantments:combatmedic.

### Counter Attack

Use: Melee retaliation.

Availability — Regular RLCraft: Disabled. Dregora: Registered; maximum 3.

Effect: Retaliation enchantment. See detailed comparison for trigger chances and returned damage.

Regular RLCraft: Disabled in the checked regular profile. Do not expect a normally acquired working version there.

Dregora: Chance = 5% + 5%L + 1% per Parry level. Returns 20%L of the incoming attack-event damage as thorns-type damage. It does not cancel the incoming hit.

ID: somanyenchantments:counterattack.

### Critical Strike

Use: Melee critical hits.

Availability — both: Registered; maximum 4.

Effect: Can strengthen critical hits. This is not a permanent multiplier to every attack.

Regular RLCraft: Uses the older critical-event implementation and compatibility rules.

Dregora: Reworked critical behavior; specifically conflicts with Luck Magnification in the checked configuration.

ID: somanyenchantments:criticalstrike.

### Culling

Use: Melee weapons / finishing blows.

Availability — both: Registered; maximum 3.

Effect: An execution-style enchantment for weakened targets that can also produce supported mob heads.

Regular RLCraft: Older implementation has special execution/critical conditions; avoid assuming the rewritten Dregora trigger.

Dregora: Kills when the attack would leave the target below its execution threshold. Removes the older jump-boost requirement/design and improves head-drop handling.

ID: somanyenchantments:culling.

### Curse of Decay

Use: Dropped-item curse.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Makes the cursed dropped item expire rapidly. This concerns the item's time on the ground, not the player's health.

ID: somanyenchantments:curseofdecay.

### Curse of Holding

Use: Held-equipment curse.

Availability — both: Registered; maximum 2.

Effect: Applies harmful effects to the player when the cursed equipment is held/equipped as handled by the mod.

ID: somanyenchantments:curseofholding.

### Curse of Inaccuracy

Use: Weapons / curse.

Availability — both: Registered; maximum 2.

Effect: Can make melee attacks miss and make arrows less accurate. Conflicts with True Strike.

ID: somanyenchantments:curseofinaccuracy.

### Curse of Possession

Use: Equipment / curse.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Prevents normal dropping/disarming of the item. Forced removal can destroy it; do not treat it as guaranteed death-item insurance.

ID: somanyenchantments:curseofpossession.

### Curse of Vulnerability

Use: Equipment / curse.

Availability — both: Registered; maximum 4.

Effect: Increases damage taken by the wearer. Conflicts with some defensive or health-related choices.

ID: somanyenchantments:curseofvulnerability.

### Cursed Edge

Use: Melee weapons / risky damage.

Availability — both: Registered; maximum 5.

Effect: Trades extra outgoing damage for magic self-damage. High damage per hit can make it dangerous even if another weapon has higher DPS.

Regular RLCraft: The enabled RLMixins handler adds 2.5%L of the calculated attack amount as bonus damage and attempts 5%L as magic self-damage.

Dregora: Multiplies the triggering damage by 1 + 0.4L, then attempts self-damage equal to 25% of that boosted damage. Defenses and immunity timing affect what you actually take. Do not call it unconditionally safe with Lifesteal.

ID: somanyenchantments:cursededge.

### Dark Shadows

Use: Melee weapons / low light.

Availability — both: Registered; maximum 3.

Effect: Rewards fighting in dark conditions and can blind targets. Lighting checks and bonus tuning differ between SME versions.

ID: somanyenchantments:darkshadows.

### Defusing Edge

Use: Melee weapons / creepers.

Availability — both: Registered; maximum 5.

Effect: Deals extra damage to qualifying creepers and interferes with their detonation. Not a general explosion-immunity enchantment.

Regular RLCraft: Part of older broad damage-enchantment exclusions.

Dregora: Shares a specialist incompatibility group with Butchering, Inhumane and Water Aspect, but can coexist with Sharpness types.

IDs — Regular: somanyenchantments:defusion; Dregora: somanyenchantments:defusingedge.

### Desolator

Use: Melee weapons / debuffs.

Availability — both: Registered; maximum 4.

Effect: Can apply Weakness and harmful resistance-related effects. Negative Resistance can amplify incoming damage; it is not the same as normal positive Resistance. Entity immunity can prevent effects.

ID: somanyenchantments:desolator.

### Difficulty's Endowment

Use: Weapons / disabled.

Availability — both: Disabled.

Effect: Scales attack damage with world difficulty, potentially reducing it on easier settings. Disabled in both checked profiles.

ID: somanyenchantments:difficultysendowment (reference key; not registered in either snapshot).

### Disarmament

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Can force an opponent to lose held equipment. Not every mob or item is eligible; Dregora has protections for some high-tier gear. Do not confuse with Better Survival's Disarm.

ID: somanyenchantments:disarmament.

### Disorientating Blade

Use: Melee weapons / debuffs.

Availability — both: Registered; maximum 4.

Effect: Disorients enemies. See detailed comparison; the old draft incorrectly called Slowness Mining Fatigue.

Regular RLCraft: I-II: 10% proc for Slowness and Nausea. III-IV: applies Slowness, Nausea and Weakness on eligible hits. IV has a conditional critical-modifier bonus.

Dregora: 15%L proc chance: Nausea, plus Blindness at III+. Duration 2 + 0.5L seconds. IV gives a 60% proc and 4-second effects; the old Weakness/Slowness package is gone.

IDs — Regular: somanyenchantments:disorientation; Dregora: somanyenchantments:disorientatingblade.

### Dragging

Use: Bows / pull effect.

Availability — both: Registered; maximum 2.

Effect: Pulls struck enemies toward the shooter instead of pushing them away. Can be dangerous when pulling strong melee enemies close.

IDs — Regular: somanyenchantments:pulling; Dregora: somanyenchantments:dragging.

### Empowered Defence

Use: Shields.

Availability — both: Registered; maximum 2.

Effect: A shield defense/retaliation enchantment with a chance to improve a block and knock the attacker back. Only relevant when its shield conditions are met.

ID: somanyenchantments:empowereddefence.

### Envenomed

Use: Melee weapons / debuffs.

Availability — both: Registered; maximum 3.

Effect: Can apply Poison and Wither. Useful with Viper when the target accepts those effects; undead and modded immunities can change the outcome.

ID: somanyenchantments:envenomed.

### Evasion

Use: Armor / defense.

Availability — both: Registered; maximum 1.

Effect: Gives a chance to evade an eligible hit, potentially with movement/knockback effects. Not blanket invulnerability. True Strike can counter it.

ID: somanyenchantments:evasion.

### Extinguish

Use: Weapons / curse-like fire control.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered; maximum 1.

Effect: Extinguishes targets and conflicts with fire-setting options. Usually counterproductive for a burning-target damage build.

ID: somanyenchantments:extinguish.

### Fiery Edge

Use: Melee weapons / fire.

Availability — both: Registered; maximum 2.

Effect: Burns enemies and gives 5%L chance to clear a burning target's active hurt-invulnerability window. II means 10%, not 10% armor piercing. Conflicts with Fire Aspect tiers.

Regular RLCraft: RLMixins applies 6L seconds of fire; the invulnerability bypass additionally requires an attack charge above 0.9.

Dregora: Uses the updated fire-aspect integration and a burning-target bypass handler. Shorter fire duration than Supreme Fire Aspect makes it a different choice for Ash Destroyer builds.

ID: somanyenchantments:fieryedge.

### Flinging

Use: Melee weapons / knockback.

Availability — both: Registered; maximum 2.

Effect: Knocks targets upward instead of simply pushing them horizontally. This SME enchantment is separate from Better Survival's Fling.

ID: somanyenchantments:flinging.

### Freezing / Cryogenic

Use: Melee weapons / crowd control.

Availability — both: Registered; maximum 3.

Effect: Applies cold-related debuffs and can encase a target in ice. Dregora displays the new Cryogenic enchantment as Freezing.

Regular RLCraft: Old Freezing applies stacking Slowness and Mining Fatigue; sufficient stacking can trigger ice encasement and damage the weapon.

Dregora: Cryogenic is the replacement implementation: chance-based stacking debuffs can lead to ice encasement. It is not safe to reuse every old Freezing formula.

IDs — Regular: somanyenchantments:freezing; Dregora: somanyenchantments:cryogenic.

### Heavy Weight

Use: Equipment / drawback.

Availability — both: Registered; maximum 5.

Effect: Slows attack speed on applicable equipment. Its armor-related behavior can also penalize jumping/falling; avoid it on speed-focused builds.

ID: somanyenchantments:heavyweight.

### Hors De Combat

Use: Melee weapons / debuffs.

Availability — both: Registered; maximum 4.

Effect: Can inflict a collection of disabling effects on enemies. It is a debuff enchantment, not a direct armor-penetration bonus.

Regular RLCraft: Uses the older debuff implementation.

Dregora: Reworked to apply randomized vanilla potion debuffs.

IDs — Regular: somanyenchantments:hors_de_combat; Dregora: somanyenchantments:horsdecombat.

### Inefficient

Use: Mining tools / drawback.

Availability — both: Registered; maximum 5.

Effect: Reduces digging speed. Not a hidden benefit for preserving durability.

IDs — Regular: somanyenchantments:inefficent; Dregora: somanyenchantments:inefficient.

### Inhumane

Use: Melee weapons / specialist.

Availability — both: Registered; maximum 5.

Effect: Adds damage against qualifying illager-related targets.

Regular RLCraft: Older target eligibility is narrower.

Dregora: Also recognizes witches and vexes in the rework; shares a specialist group with Butchering, Defusing Edge and Water Aspect.

ID: somanyenchantments:inhumane.

### Inner Berserk

Use: Combat equipment / low health.

Availability — both: Registered; maximum 4.

Effect: Increases offensive power as the user's health falls. Risky with First Aid: low health is not safe merely because total hearts remain.

ID: somanyenchantments:innerberserk.

### Instability

Use: Weapons / durability risk.

Availability — both: Registered; maximum 3.

Effect: Rewards a damaged weapon with more damage, but causes substantial additional durability loss. Repairing the weapon changes the damage benefit.

ID: somanyenchantments:instability.

### Jagged Rake

Use: Hoes.

Availability — both: Registered; maximum 5.

Effect: Makes a hoe more effective as a weapon by adding attack damage. It does not improve crop yield.

IDs — Regular: somanyenchantments:scythedamage; Dregora: somanyenchantments:jaggedrake.

### Lesser Bane of Arthropods

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: A weaker arthropod-specific damage tier than vanilla Bane of Arthropods. It is not general-purpose damage.

ID: somanyenchantments:lesserbaneofarthropods.

### Lesser Fire Aspect

Use: Melee weapons.

Availability — both: Registered; maximum 2.

Effect: The weak fire-aspect tier; applies a shorter burn than stronger tiers. Shares fire-enchantment incompatibilities.

IDs — Regular: somanyenchantments:lfa; Dregora: somanyenchantments:lesserfireaspect.

### Lesser Flame

Use: Bows.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: A weak Flame tier with reduced burning compared with stronger Flame options.

IDs — Regular: somanyenchantments:lfl; Dregora: somanyenchantments:lesserflame.

### Lesser Sharpness

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Adds 0.25 + 0.25L general damage: +1.5 at V. A weaker alternative to normal Sharpness.

ID: somanyenchantments:lessersharpness.

### Lesser Smite

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: A weaker anti-undead damage tier than vanilla Smite. Does nothing special to enemies not classified as undead.

ID: somanyenchantments:lessersmite.

### Levitator

Use: Melee weapons / crowd control.

Availability — both: Registered; maximum 2.

Effect: Can apply Levitation, lifting eligible enemies into the air. Floating enemies can become harder to reach, and immune mobs may ignore it.

ID: somanyenchantments:levitator.

### Lifesteal

Use: Melee weapons / healing.

Availability — both: Registered; maximum 2.

Effect: Heals the attacker based on dealt damage. Do not confuse it with Better Survival's Vampirism or Fish's Undead Rising's separate Lifesteal enchantment. Dummy healing and other interactions may be patched.

ID: somanyenchantments:lifesteal.

### Light Weight

Use: Boots / mobility.

Availability — both: Registered; maximum 3.

Effect: Increases jump height and modifies fall-damage handling. Not a substitute for unlimited fall immunity.

ID: somanyenchantments:lightweight.

### Luck Magnification

Use: Weapons / Luck and drops.

Availability — both: Registered; maximum 2.

Effect: Grants Luck while held and turns the Luck attribute into additional effective Looting. At II with only its own Luck II, the Looting addition is +2. See detailed comparison for critical-hit formulas.

Regular RLCraft: Can strengthen an existing critical; it does not add Dregora's separate random critical-conversion roll.

Dregora: Can turn a qualifying noncritical attack into a critical, and separately strengthen a critical. Each chance caps at 20%. Incompatible with Critical Strike.

ID: somanyenchantments:luckmagnification.

### Luna's Blessing / Lunar's Blessing

Use: Melee weapons / night.

Availability — both: Registered; maximum 5.

Effect: A night-time damage specialist that can blind enemies under favorable sky conditions.

Regular RLCraft: Displayed as Lunar's Blessing. Older time/weather logic can reduce damage in unfavorable conditions.

Dregora: Luna's Blessing is the reworked name. Night damage bonus is larger with sky exposure; the old daytime damage penalty design is removed.

IDs — Regular: somanyenchantments:moonlight; Dregora: somanyenchantments:lunasblessing.

### Magic Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: Specialized mitigation for magic-classified damage. The visual appearance of an attack does not determine whether it counts as magic.

ID: somanyenchantments:magicprotection.

### Magma Walker

Use: Boots / lava walking.

Availability — both: Registered; maximum 2.

Effect: Temporarily turns eligible lava surface blocks into walkable blocks, analogous to Frost Walker on water. Do not assume protection from swimming in lava or every fire source.

ID: somanyenchantments:magmawalker.

### Meltdown

Use: Armor / explosion retaliation.

Availability — both: Registered; maximum 2.

Effect: Can trigger an explosion when hit, at a severe armor-durability cost.

Regular RLCraft: Older version is an explosive retaliation enchantment.

Dregora: Reclassified as a curse in the rework. Treat the armor cost and nearby explosion consequences as a serious drawback.

ID: somanyenchantments:meltdown.

### Moisturized

Use: Hoes / farming.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Creates hydrated farmland when tilling. It does not permanently replace water or prevent later drying under all conditions.

IDs — Regular: somanyenchantments:welltilled; Dregora: somanyenchantments:moisturized.

### Mortalitas

Use: Melee weapons / kill growth.

Availability — both: Registered; maximum 8.

Effect: Builds a stored damage benefit through kills. The stored bonus and its cap are separate from the enchantment's displayed level.

Regular RLCraft: Older compatibility restrictions are broader.

Dregora: Reworked incompatibility group is primarily Mortalitas versus Viper versus Dark Shadows; it can fit alongside more damage enchantments.

ID: somanyenchantments:mortalitas.

### Natural Blocking

Use: Shields / passive defense.

Availability — both: Registered; maximum 2.

Effect: Diverts a portion of eligible damage to shield durability while wielding a shield. It does not mean the shield blocks every attack for free.

ID: somanyenchantments:naturalblocking.

### Pandora's Curse

Use: Equipment / spreading curse.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: A harmful curse that can introduce additional curses to equipment. Isolate affected gear rather than treating it as cosmetic purple text.

IDs — Regular: somanyenchantments:pandora; Dregora: somanyenchantments:pandorascurse.

### Parry

Use: Melee weapons / defense.

Availability — both: Registered; maximum 1.

Effect: Gives a chance to cancel an eligible melee hit and knock back the attacker. It is a random defense enchantment, not the separate Defenders mod's manual parry mechanic.

Regular RLCraft: Uses the older chance/handling implementation.

Dregora: Chance = 5% + 5%L + 1% per Counter Attack level. True Strike bypasses this enchantment's protection.

ID: somanyenchantments:parry.

### Penetrating Edge

Use: Melee weapons / armored enemies.

Availability — both: Registered; maximum 6.

Effect: Adds damage against enemies with more armor. The name does not mean the same mechanic as Rune: Piercing Capabilities.

Regular RLCraft: Older bonus behavior can differ significantly in scaling.

Dregora: Reworked with a damage cap; occupies the Supreme damage-tier incompatibility group with Spell Breaker and Supreme damage options.

ID: somanyenchantments:penetratingedge.

### Physical Protection

Use: Armor.

Availability — both: Registered; maximum 4.

Effect: Specialized protection against qualifying physical melee damage. It is not a universal replacement for all other protection types.

ID: somanyenchantments:physicalprotection.

### Plowing

Use: Hoes / farming.

Availability — Regular RLCraft: Registered; maximum 2. Dregora: Registered; maximum 1.

Effect: Tills a larger area per use, consuming durability for the additional work. Moisturized is the separate hydration enchantment.

IDs — Regular: somanyenchantments:tillingpower; Dregora: somanyenchantments:plowing.

### Powerless

Use: Bows / drawback.

Availability — both: Registered; maximum 5.

Effect: Reduces the damage of fired arrows. The negative counterpart to Power-type enchantments.

ID: somanyenchantments:powerless.

### Purging Blade

Use: Melee weapons / effect removal.

Availability — both: Registered; maximum 5.

Effect: Can interfere with active potion effects on the target. This can remove debuffs you wanted to keep as well as enemy buffs.

Regular RLCraft: 16/22/28/34/40% proc: attempts separate magic damage of 2/2.75/3.5/4.25/5, resets hurt immunity and multiplies the triggering hit by 1.2. Its old effect-clearing code should not be described as a reliable modern dispel.

Dregora: Same base proc progression, but requires an active target effect. Selects one effect for removal and multiplies hit damage by 1 + 0.02L x effect tier. No old separate 5-magic-damage packet at V. Attack charge affects proc eligibility.

ID: somanyenchantments:purgingblade.

### Purification

Use: Axes / conversion.

Availability — both: Registered; maximum 5.

Effect: Can convert eligible corrupted mobs, notably zombie villagers, rather than simply dealing more damage. Use a weak weapon when trying to convert rather than kill a target.

ID: somanyenchantments:purification.

### Pushing

Use: Bows / crowd control.

Availability — both: Registered; maximum 1.

Effect: Repels nearby entities while drawing a bow, helping create breathing room. It is different from Punch, which acts on an arrow's target.

ID: somanyenchantments:pushing.

### Quarrying

Use: Mining tools / disabled.

Availability — Regular RLCraft: Disabled. Dregora: Not registered in this profile.

Effect: An alternative resource-drop multiplier design. Disabled in regular RLCraft and absent from the Dregora replacement catalogue. Not an obtainable recommendation for these profiles.

ID: somanyenchantments:quarrying (reference key; not registered in either snapshot).

### Rain's Bestowment

Use: Melee weapons / rain.

Availability — Regular RLCraft: Registered; maximum 6. Dregora: Registered; maximum 5.

Effect: A damage enchantment for rainy conditions; incompatible with other weather/time choices.

Regular RLCraft: Older design can reduce damage when the required weather is absent.

Dregora: Reworked favorable-weather bonus with extra sky-exposure benefit rather than the old unfavorable-weather penalty design.

IDs — Regular: somanyenchantments:raining; Dregora: somanyenchantments:rainsbestowment.

### Reinforced Sharpness

Use: Tools used as weapons.

Availability — both: Registered; maximum 5.

Effect: A Sharpness-like damage enchantment intended for tools. It is not a mining-speed enchantment.

IDs — Regular: somanyenchantments:sharperedge; Dregora: somanyenchantments:reinforcedsharpness.

### Reviled Blade

Use: Melee weapons / finishing damage.

Availability — both: Registered; maximum 4.

Effect: Increases damage against targets as their health gets low. Unlike Culling, its basic purpose is stronger damage, not a guaranteed execution.

ID: somanyenchantments:reviledblade.

### Rune: Arrow Piercing

Use: Bows.

Availability — both: Registered; maximum 4.

Effect: Allows part of qualifying arrow damage to bypass armor. Does not imply bypassing all resistances, protection enchantments or damage caps.

IDs — Regular: somanyenchantments:rune_armorpiercing; Dregora: somanyenchantments:rune_arrowpiercing.

### Rune: Magical Blessing

Use: Melee weapons / magic conversion.

Availability — Regular RLCraft: Disabled. Dregora: Registered; maximum 4.

Effect: A magic-conversion and armor-piercing rune. Do not confuse it with an enchantment that merely adds a separate magical proc.

Regular RLCraft: Disabled in the checked regular RLCraft profile.

Dregora: Enabled. Adds damage, marks the hit as magic, adds 10 percentage points of armor piercing per level, and can apply random negative effects. Incompatible with Rune: Piercing Capabilities and Better Survival Penetration.

ID: somanyenchantments:rune_magicalblessing.

### Rune: Piercing Capabilities

Use: Melee weapons / armor piercing.

Availability — both: Registered; maximum 4.

Effect: Makes a portion of the hit bypass armor. Other defenses can still matter; armor bypass is not guaranteed final-damage multiplication.

Regular RLCraft: Older implementation is handled through the installed combat compatibility patches.

Dregora: Uses updated damage-source piercing integration. Do not add it to Rune: Magical Blessing or Better Survival Penetration; the configuration makes them incompatible.

ID: somanyenchantments:rune_piercingcapabilities.

### Rune: Resurrection

Use: Equipment / emergency survival.

Availability — Regular RLCraft: Disabled. Dregora: Registered; maximum 2.

Effect: A rare death-prevention rune whose implementation changed.

Regular RLCraft: Disabled; the legacy design described respawning at the death location with retained items.

Dregora: Enabled as a consumable emergency survival effect, closer to a totem-style rescue than ordinary respawning.

ID: somanyenchantments:rune_resurrection.

### Rune: Revival

Use: Durability-bearing items.

Availability — Regular RLCraft: Disabled. Dregora: Registered; maximum 2.

Effect: Can save/repair an item that would otherwise break. Not a guarantee of indestructibility.

Regular RLCraft: Disabled in the checked regular profile.

Dregora: Enabled; chance and repair behavior depend on the item and enchantment mechanics.

ID: somanyenchantments:rune_revival.

### Rusted

Use: Durability-bearing items / curse.

Availability — both: Registered; maximum 3.

Effect: Accelerates durability loss. Separate from Charm's Curse of Rusting, despite the similar purpose.

ID: somanyenchantments:rusted.

### Smelter

Use: Mining tools.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Smelts supported harvested drops automatically; compatible drop rules can allow Fortune. Separate from Better Survival's Smelting.

ID: somanyenchantments:smelter.

### Sol's Blessing

Use: Melee weapons / daytime.

Availability — both: Registered; maximum 5.

Effect: A daytime combat enchantment; see detailed comparison.

Regular RLCraft: At V in dry conditions: +4 damage in open daytime sky, +0.25 sheltered daytime; -4 at night in open sky and -6.5 sheltered at night. Rain subtracts another 2.5. Older Glowing starts at 10 seconds and can be extended.

Dregora: At V: +5.25 damage in open daytime sky or +1.75 sheltered; no nighttime penalty. Daytime open-sky hits can apply Glowing for 3.5 seconds.

IDs — Regular: somanyenchantments:sunshine; Dregora: somanyenchantments:solsblessing.

### Spell Breaker

Use: Melee weapons / effect-heavy enemies.

Availability — both: Registered; maximum 5.

Effect: A specialist against magically supported enemies, not a universal magic-damage multiplier.

Regular RLCraft: Older specialist behavior and RLMixins damage handling apply.

Dregora: Adds damage based on target potion effects, with extra benefits against witches/evokers and a damage cap. Competes with Supreme damage-tier options and Penetrating Edge.

ID: somanyenchantments:spellbreaker.

### Splitshot

Use: Bows.

Availability — both: Registered; maximum 4.

Effect: Fires additional arrows in a spread. More projectiles do not necessarily mean each target takes every arrow; durability/ammunition and hit-immunity behavior matter.

ID: somanyenchantments:splitshot.

### Strafe

Use: Bows.

Availability — both: Registered; maximum 4.

Effect: Increases drawing speed. It is not the same as increasing projectile velocity; Range handles that in Better Survival.

ID: somanyenchantments:strafe.

### Strengthened Vitality

Use: Chest armor / health.

Availability — both: Registered; maximum 5.

Effect: Increases maximum health. First Aid redistributes/uses health through its body-part system, so total hearts alone do not remove vital-body-part risks.

ID: somanyenchantments:strengthenedvitality.

### Subject Biology

Use: Melee weapons / elite enemies.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered; maximum 5.

Effect: A Dregora Subject damage option.

Regular RLCraft: Not an enabled registered enchantment in the checked regular profile.

Dregora: RLMixins replaces the default AI-task-count effect: grants extra damage against blights, infernals and champions. At maximum level each qualifying category contributes +5 before attack-strength adjustment; categories can stack.

ID: somanyenchantments:subjectbiology.

### Subject Chemistry

Use: Melee weapons / potion-heavy build.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered; maximum 5.

Effect: Rewards having active potion effects on the attacker.

Regular RLCraft: Not an enabled registered enchantment in the checked regular profile.

Dregora: Adds damage based on the number of active effects (capped at +6 before charge adjustment), and can trigger a non-terrain-damaging explosion. This is not Subject Physics.

ID: somanyenchantments:subjectchemistry.

### Subject English

Use: Melee weapons / Subject family.

Availability — Regular RLCraft: Registered; maximum 4. Dregora: Disabled.

Effect: This name refers to different implementations across SME versions.

Regular RLCraft: Enabled: older intelligence/AI-related damage specialist, handled by RLMixins.

Dregora: Disabled in the checked profile. The replacement implementation, if enabled, would scale damage with target-name length; do not recommend it as normally available here.

ID: somanyenchantments:english.

### Subject Geography

Use: Melee weapons / biome effects.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered; maximum 5.

Effect: Applies different effects depending on biome tags: examples include burning in hot biomes, cold debuffs in snowy areas, and poison in swamps. Extra damage-type conversion requires the relevant optional integration, not just the enchantment's name.

ID: somanyenchantments:subjectgeography.

### Subject History

Use: Melee weapons / stationary fighting.

Availability — Regular RLCraft: Disabled. Dregora: Registered; maximum 5.

Effect: A location/history-related damage specialist.

Regular RLCraft: Disabled in the checked regular profile; its old world-age description does not describe the Dregora patch.

Dregora: RLMixins rewards consecutive attacks near the tracked position, ramping toward +7.5 at maximum level. Moving sufficiently far resets the benefit. It is not simply total save-file age.

ID: somanyenchantments:subjecthistory.

### Subject Mathematics

Use: Melee weapons / XP scaling.

Availability — Regular RLCraft: Disabled. Dregora: Registered; maximum 5.

Effect: A mathematically scaled damage bonus.

Regular RLCraft: Disabled in the checked regular profile; old target-health descriptions should not be applied to Dregora.

Dregora: Adds damage based on the user's XP level, with a cap of +7.5 before attack-strength adjustment. It does not spend the XP as ammunition.

ID: somanyenchantments:subjectmathematics.

### Subject P.E.

Use: Melee weapons / self buffs.

Availability — both: Registered; maximum 5.

Effect: Can give the attacker combat/mobility potion buffs. It is mutually exclusive with other Subject choices.

Regular RLCraft: Uses the older Subject implementation and combat patch.

Dregora: Can grant Haste and Speed, with Strength/Jump Boost and then Resistance becoming available at higher levels.

IDs — Regular: somanyenchantments:pe; Dregora: somanyenchantments:subjectpe.

### Subject Physics

Use: Melee weapons / size mismatch.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered; maximum 5.

Effect: A size-based damage specialist, not an explosion enchantment.

Regular RLCraft: Not an enabled registered enchantment in the checked regular profile.

Dregora: Compares attacker and target bounding-box volumes, rewarding a larger mismatch in either direction; extra damage caps at +7.5 before attack-strength adjustment.

ID: somanyenchantments:subjectphysics.

### Subject Science

Use: Melee weapons / explosions.

Availability — Regular RLCraft: Registered; maximum 4. Dregora: Not registered in this profile.

Effect: An older Subject enchantment that can cause explosions on attacks.

Regular RLCraft: Enabled; triggers a blast rather than granting an unconditional Magic Damage attribute bonus.

Dregora: Removed from the new SME registry. Subject Chemistry has an explosion mechanic, but is not an identical renamed copy.

ID: somanyenchantments:science.

### Supreme Bane of Arthropods

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Top-tier arthropod specialist. Very strong only when the enemy qualifies as an arthropod.

ID: somanyenchantments:supremebaneofarthropods.

### Supreme Fire Aspect

Use: Melee weapons.

Availability — both: Registered; maximum 2.

Effect: Top fire-aspect tier, applying long burns to eligible targets. Particularly relevant to reaching Dregora Ash Destroyer's remaining-burn-duration bonus.

IDs — Regular: somanyenchantments:sfa; Dregora: somanyenchantments:supremefireaspect.

### Supreme Flame

Use: Bows.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Highest Flame tier, applying long arrow-induced burns to eligible targets. Not identical to multiplying direct arrow damage.

IDs — Regular: somanyenchantments:sfl; Dregora: somanyenchantments:supremeflame.

### Supreme Protection

Use: Armor.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: A very powerful protection tier. Being registered/enabled does not guarantee that normal enchanting, loot or trades can supply it; special-item availability must be checked in-game.

ID: somanyenchantments:supremeprotection.

### Supreme Sharpness

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Adds 4 + 1.6L general damage: +12 at V. Cannot stack normally with other Sharpness tiers. Dregora also restricts it against other Supreme-tier damage alternatives.

ID: somanyenchantments:supremesharpness.

### Supreme Smite

Use: Melee weapons.

Availability — both: Registered; maximum 5.

Effect: Top anti-undead tier. Its larger specialized bonus only applies to undead-classified enemies.

ID: somanyenchantments:supremesmite.

### Swifter Slashes

Use: Melee weapons / attack speed.

Availability — both: Registered; maximum 5.

Effect: Raises attack speed and can help overcome target hurt-invulnerability, with damage tradeoffs. Faster swings do not automatically mean proportionally higher actual DPS.

ID: somanyenchantments:swifterslashes.

### Thunderstorm's Bestowment

Use: Melee weapons / thunderstorms.

Availability — Regular RLCraft: Registered; maximum 6. Dregora: Registered; maximum 5.

Effect: A thunderstorm-specific damage enchantment.

Regular RLCraft: Older weather logic can penalize attacks outside preferred conditions.

Dregora: Reworked storm bonus with additional benefit from sky exposure, rather than the old unfavorable-weather penalty design.

IDs — Regular: somanyenchantments:thunderstorm; Dregora: somanyenchantments:thunderstormsbestowment.

### True Strike

Use: Melee weapons / anti-evasion.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Counters enchantment-based avoidance, not all armor or all invulnerability mechanics.

Regular RLCraft: Gives a 75% chance to bypass SME Evasion's check; no new Dregora 1% hurt-immunity bypass effect.

Dregora: Bypasses SME Evasion and Parry, and additionally has a 1% chance at I to clear an active hurt-invulnerability window. Conflicts with Curse of Inaccuracy.

ID: somanyenchantments:truestrike.

### Underwater Strider / Swift Swimming

Use: Boots / swimming.

Availability — both: Registered; maximum 3.

Effect: Improves underwater movement. The enchantment ID/name changed in the rework; Dregora's resource override displays Swift Swimming as Underwater Strider. It is not a walking-on-water enchantment.

IDs — Regular: somanyenchantments:underwaterstrider; Dregora: somanyenchantments:swiftswimming.

### Unpredictable

Use: Weapons / risky random damage.

Availability — both: Registered; maximum 2.

Effect: Randomizes damage, with outcomes that can be worse than a normal hit and can even heal the enemy. Not a dependable damage upgrade.

ID: somanyenchantments:unpredictable.

### Unreasonable

Use: Melee weapons / distraction.

Availability — both: Registered; maximum 2.

Effect: Attempts to redirect an enemy toward another nearby entity. Does not tame it permanently.

Regular RLCraft: The legacy logic is unreliable in Survival because of its full-health/attack timing conditions. Do not use Dregora's 10% formula for this version.

Dregora: 5%L chance on a fully charged eligible hit. II gives 10%, searching an area extending 9 blocks around the target. Mob AI can still prevent useful retaliation.

IDs — Regular: somanyenchantments:frenzy; Dregora: somanyenchantments:unreasonable.

### Unsheathing

Use: Melee weapons / switching.

Availability — Regular RLCraft: Registered; maximum 1. Dregora: Registered; maximum 2.

Effect: Weapon-switching enchantment, completely changed by the rework.

Regular RLCraft: Maximum I. Can automatically swap an enchanted hotbar weapon into the selected slot when an attacker hurts you. This can disrupt item use; it is not a timed damage buff.

Dregora: Maximum II. A hit within 1/1.5 seconds after switching from a different item gains +25%/+50%. Five-second cooldown; switching between identical item types does not reset the trigger.

ID: somanyenchantments:unsheathing.

### Upgraded Potentials

Use: Anvil utility.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Reduces accumulated anvil-work cost when applied, making further combination/repair work cheaper. It does not directly raise enchantment levels or erase all future anvil costs.

IDs — Regular: somanyenchantments:upgrade; Dregora: somanyenchantments:upgradedpotentials.

### Viper

Use: Melee weapons / poison synergy.

Availability — both: Registered; maximum 5.

Effect: Adds damage against enemies with Poison and/or Wither. If those effects cannot be applied, the synergy may not work. Dregora groups it against Dark Shadows and Mortalitas.

ID: somanyenchantments:viper.

### Water Aspect

Use: Melee weapons / water specialist.

Availability — both: Registered; maximum 5.

Effect: Rewards attacks involving water and gives special damage against eligible water-sensitive mobs such as blazes, endermen and magma cubes. Not a water-breathing enchantment.

Regular RLCraft: Older broad damage-enchantment compatibility restrictions apply.

Dregora: Shares the Butchering/Defusing Edge/Inhumane specialist group and also conflicts with fire-aspect choices.

ID: somanyenchantments:wateraspect.

### Winter's Grace

Use: Melee weapons / cold biomes.

Availability — Regular RLCraft: Registered; maximum 6. Dregora: Registered; maximum 5.

Effect: A cold-environment damage enchantment that can apply cold-related debuffs. Sky exposure and snow/cold conditions matter; not simply 'more damage everywhere in winter'.

IDs — Regular: somanyenchantments:winter; Dregora: somanyenchantments:wintersgrace.

## Better Survival

### Agility

Use: Boots / mobility.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 2.

Effect: Raises movement speed. This is separate from attack speed and jump height.

ID: mujmajnkraftsbettersurvival:agility.

### Arrow Recovery

Use: Bows / ammunition.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: Gives a chance to recover an arrow after hitting an entity. It is not Infinity and does not guarantee recovery of every special arrow type.

ID: mujmajnkraftsbettersurvival:arrowrecovery.

### Assassinate

Use: Compatible dagger attacks.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: Increases backstab damage when the weapon's directional/backstab conditions are satisfied. It is not a universal flat damage enchantment.

ID: mujmajnkraftsbettersurvival:assassinate.

### Bash

Use: Compatible hammer attacks.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: Improves the weapon's chance to stun a target. Requires the appropriate weapon behavior; it is not a universal stun added to every sword.

ID: mujmajnkraftsbettersurvival:bash.

### Blast

Use: Bows / explosive arrows.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 2.

Effect: Makes compatible arrows explode on impact. Separate direct-hit and explosion damage can have different defenses; an explosion is not automatically magic damage.

ID: mujmajnkraftsbettersurvival:blast.

### Blocking Power

Use: Compatible blocking weapons/shields.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: Improves the amount of damage blocked by the supported blocking mechanic. It is not the same as a longer perfect-parry window.

ID: mujmajnkraftsbettersurvival:blockpower.

### Combo

Use: Nunchaku / sustained attacks.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: Improves how quickly the sustained-attack damage bonus builds. It does not simply raise the final combo damage cap. Releasing or interrupting the attack affects the practical benefit.

ID: mujmajnkraftsbettersurvival:combo.

### Diamonds Everywhere

Use: Mining tools.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: Gives qualifying ore mining a chance to produce diamonds. It does not turn every mined block into diamond ore.

ID: mujmajnkraftsbettersurvival:diamonds.

### Disarm

Use: Compatible battle-axe attacks.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: Improves disarming chances. Separate from SME Disarmament; some Dregora equipment is protected against forced disarming.

ID: mujmajnkraftsbettersurvival:disarm.

### Education

Use: Weapons / XP.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: With the enabled RLMixins patches in BOTH checked profiles, adds 30% XP per level from ordinary qualifying mobs: III gives 1.9x before integer rounding. Does not boost bosses or blights. Conflicts with Adept, Looting and Advanced Looting. This corrects the earlier unpatched +50% claim.

ID: mujmajnkraftsbettersurvival:education.

### Fling

Use: Compatible melee weapons.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 2.

Effect: Launches enemies upward. This is Better Survival's enchantment, not SME Flinging.

ID: mujmajnkraftsbettersurvival:fling.

### Heaviness

Use: Blocking equipment.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Reduces knockback while blocking. This is beneficial blocking stability, not SME Heavy Weight's attack-speed drawback.

ID: mujmajnkraftsbettersurvival:heavy.

### High Jump

Use: Boots / mobility.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 2.

Effect: Raises jump height. Extra jump height can increase fall risk unless other equipment mitigates it.

ID: mujmajnkraftsbettersurvival:highjump.

### Multishot

Use: Bows / crossbows.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 4.

Effect: Adds multiple projectiles to compatible shots. It competes with SME Splitshot; projectile counts and damage interactions depend on the supported weapon.

ID: mujmajnkraftsbettersurvival:multishot.

### Penetration / Lesser Rune: Piercing Capabilities

Use: Melee weapons / armor bypass.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 5.

Effect: An armor-piercing enchantment with a major implementation difference. Its registry ID remains the Better Survival ID even where pack text calls it a Lesser Rune.

Regular RLCraft: Legacy piercing redistributes part of the attack through a separate magic-classified armor-bypassing damage path. This enables old magic-amplification interactions; it is not the new Dregora implementation.

Dregora: RLMixins disables the old separate-damage method and uses integrated armor piercing with RLCombat/Spartan Weaponry: 10% per level, up to 50% at V. Do not assume the old magic-packet build survives this change.

ID: mujmajnkraftsbettersurvival:penetration.

### Range

Use: Bows / projectile flight.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Raises compatible arrow velocity/range. The checked Dregora configuration uses a 1.5x velocity multiplier. Not an increase to melee reach.

ID: mujmajnkraftsbettersurvival:range.

### Rapid Fire

Use: Bows / crossbows.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 2.

Effect: Reduces drawing/loading time on compatible ranged weapons. Not the same as faster projectile travel.

ID: mujmajnkraftsbettersurvival:rapidfire.

### Reflection

Use: Blocking equipment.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: Damages an attacker when a qualifying attack is blocked. Does not mean every projectile is physically bounced back.

ID: mujmajnkraftsbettersurvival:reflection.

### Smelting

Use: Mining tools.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Automatically smelts supported block drops. Separate from SME Smelter; check conflicts and the tool's actual recipe/drop behavior before combining alternatives.

ID: mujmajnkraftsbettersurvival:smelting.

### Spellproof

Use: Blocking equipment.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 3.

Effect: Allows the supported blocking mechanic to mitigate some magic damage. It is not unconditional immunity to magic attacks.

ID: mujmajnkraftsbettersurvival:spellshield.

### Tunneling

Use: Mining tools.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 2.

Effect: Mines multiple blocks per use. Additional blocks cost durability and must satisfy harvesting rules; Dregora excludes tile entities in its checked setting.

ID: mujmajnkraftsbettersurvival:tunneling.

### Vampirism

Use: Melee weapons / healing.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 2.

Effect: Provides healing from qualifying attacks. Distinct from SME Lifesteal; healing interactions depend on the installed compatibility patches. It does not make self-damaging builds unconditionally safe.

ID: mujmajnkraftsbettersurvival:vampirism.

### Versatility

Use: Mining tools.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Improves digging when using a tool on blocks outside its usual specialization. It does not grant every required harvest tier or guarantee drops from the wrong tool.

ID: mujmajnkraftsbettersurvival:versatility.

### Vitality

Use: Armor / natural healing.

Availability — Regular RLCraft: Registered. Dregora: Disabled (configured maximum 0).

Effect: Improves natural regeneration in the mod's design. Its configured maximum is 0 in the checked profiles, so do not list it as a normal obtainable upgrade. Not SME Strengthened Vitality.

ID: mujmajnkraftsbettersurvival:vitality.

### Weightless

Use: Blocking equipment.

Availability — Regular RLCraft: Registered. Dregora: Registered; maximum 1.

Effect: Reduces the movement slowdown from blocking. Does not remove every movement penalty or increase normal walking speed permanently.

ID: mujmajnkraftsbettersurvival:weightless.

## Aquaculture

These are registered Aquaculture rod enchantments. Both packs also use Fishing Made Better; an enchantment being registered does not prove that every custom fishing action consults it. Interpret these as the effects on supported fishing mechanics, not a promise that all seven improve every pack rod/minigame.

### Appealing

Use: Aquaculture fishing rods.

Availability — both: Registered.

Effect: Biases compatible Aquaculture fishing toward fish rather than miscellaneous loot. Fishing Made Better can change which fishing mechanics are actually used.

ID: aquaculture:appealing.

### Barbed Hook

Use: Aquaculture fishing rods.

Availability — both: Registered.

Effect: Expands the catch opportunity/window in the supported fishing mechanic. It is not a combat-damage enchantment.

ID: aquaculture:barbed_hook.

### Double Hook

Use: Aquaculture fishing rods.

Availability — both: Registered.

Effect: Can produce an additional fish from a compatible catch. Not a guaranteed doubling of all treasure.

ID: aquaculture:double_hook.

### Heavy Line

Use: Aquaculture fishing rods.

Availability — both: Registered.

Effect: Favors heavier fish in Aquaculture's supported weight system. Does not mean the rod takes less durability damage.

ID: aquaculture:heavy_line.

### Long Cast

Use: Aquaculture fishing rods.

Availability — both: Registered.

Effect: Increases the cast distance on supported rods. It does not directly improve loot rarity.

ID: aquaculture:long_cast.

### Magnetic

Use: Aquaculture fishing rods.

Availability — both: Registered.

Effect: Biases compatible Aquaculture fishing toward loot rather than fish. Not Charm's automatic item-pickup Magnetic enchantment.

ID: aquaculture:magnetic.

### Short Cast

Use: Aquaculture fishing rods.

Availability — both: Registered.

Effect: Shortens cast distance for close-range fishing. A control preference, not inherently a stronger fishing-luck enchantment.

ID: aquaculture:short_cast.

## Charm

### Curse Break

Use: Anvil utility / enchanted book.

Availability — both: Registered.

Effect: Used at an anvil to remove a curse from another item, subject to the mod's rules and XP cost. It is not a permanent blanket immunity to future curses.

ID: charm:curse_break.

### Curse of Clumsiness

Use: Weapons/tools / curse.

Availability — both: Registered.

Effect: Can make use of the item fail or miss. Not simply a visible decrease in the item's damage tooltip.

ID: charm:clumsiness_curse.

### Curse of Harming

Use: Weapons/tools / curse.

Availability — both: Registered.

Effect: Can hurt the user during use. Different from Cursed Edge, which explicitly trades outgoing damage for self-damage.

ID: charm:harming_curse.

### Curse of Haunting

Use: Weapons/tools / curse.

Availability — both: Registered.

Effect: Can summon hostile trouble near the user while using cursed gear. Do not confuse the spawned danger with a beneficial summoned companion.

ID: charm:haunting_curse.

### Curse of Rusting

Use: Equipment / curse.

Availability — both: Registered.

Effect: Makes equipment consume durability faster. Separate from SME Rusted; compatibility patches can alter how the extra durability loss is applied.

ID: charm:rusting_curse.

### Homing

Use: Hoes / ore finding.

Availability — both: Registered.

Effect: Helps locate ore associated with the hoe's material. Despite the name, it does not make arrows home in on enemies.

ID: charm:homing.

### Magnetic

Use: Mining tools / item pickup.

Availability — both: Registered.

Effect: Collects compatible mined drops directly rather than leaving them scattered on the ground. Not an enchantment that raises fishing treasure chances.

ID: charm:magnetic.

## Defiled Lands

### Blazing

Use: Defiled Lands blastem weapons.

Availability — both: Registered.

Effect: Changes fired blastem fruit to the blazing form. A weapon/ammunition-specific effect, not a global Fire Aspect replacement.

ID: defiledlands:blazing.

### Destructive

Use: Defiled Lands explosive weapons.

Availability — both: Registered.

Effect: Increases explosion size and direct impact damage on supported weapons. Can be hazardous around structures unless terrain damage is prevented.

ID: defiledlands:destructive.

### Economical

Use: Defiled Lands ranged weapons.

Availability — both: Registered.

Effect: Gives a chance not to consume ammunition when firing. It does not mean completely free ammunition at every level.

ID: defiledlands:economical.

### Safeguard

Use: Defiled Lands explosive weapons.

Availability — both: Registered.

Effect: Prevents the supported weapon's explosion from destroying blocks. It does not necessarily prevent damage to creatures or players.

ID: defiledlands:safeguard.

### Sharpshooter

Use: Defiled Lands ranged weapons.

Availability — both: Registered.

Effect: Improves projectile speed/range and reduces inaccuracy on supported Defiled Lands weapons. Different from Spartan Weaponry's crossbow Sharpshooter.

ID: defiledlands:sharpshooter.

## Grappling Hook Mod

### Double Jump

Use: Boots / movement.

Availability — both: Registered.

Effect: Allows an additional midair jump through the mod's movement system. Separate from High Jump, which changes jump height.

ID: grapplemod:doublejumpenchantment.

### Sliding

Use: Boots / movement.

Availability — both: Registered.

Effect: Enables the mod's sliding movement under the appropriate movement inputs. It does not directly increase armor or damage.

ID: grapplemod:slidingenchantment.

### Wall Running

Use: Boots / movement.

Availability — both: Registered.

Effect: Enables the grappling mod's wall-running movement when its input/contact conditions are met. Not free flight.

ID: grapplemod:wallrunenchantment.

## Locks

### Complexity

Use: Locks.

Availability — both: Registered.

Effect: Raises the pick-quality requirement by making the lock more complex. Some lower-tier picks can become unsuitable.

ID: locks:complexity.

### Shocking

Use: Locks.

Availability — both: Registered.

Effect: Punishes failed lock-picking attempts with an electric shock. Not lightning damage added to a sword.

ID: locks:shocking.

### Sturdy

Use: Locks.

Availability — both: Registered.

Effect: Makes lock picking harder by reducing the effectiveness/strength of picks. It does not repair a damaged pick.

ID: locks:sturdy.

## Simple Difficulty

### Chilling

Use: Armor / temperature.

Availability — both: Registered.

Effect: Lowers the wearer's temperature. Useful in heat but potentially harmful in already cold conditions. Not generic fire protection.

ID: simpledifficulty:chilling.

### Heating

Use: Armor / temperature.

Availability — both: Registered.

Effect: Raises the wearer's temperature. Useful in cold weather but can worsen overheating. Not a weapon fire enchantment.

ID: simpledifficulty:heating.

## Spartan Shields

### Spikes

Use: Spartan shields.

Availability — both: Registered.

Effect: Damages enemies that strike a successfully blocking shield. This is retaliation, not an increase to the shield's maximum durability.

ID: spartanshields:ssenchspikes.

## Spartan Weaponry

### Expanse

Use: Throwing weapons with ammunition capacity.

Availability — both: Registered.

Effect: Increases the item's stored throwing-ammunition capacity. Does not automatically refill that capacity.

ID: spartanweaponry:expanse.

### Hydrodynamic

Use: Throwing weapons.

Availability — both: Registered.

Effect: Allows supported thrown weapons to travel effectively underwater. It does not grant water breathing to the user.

ID: spartanweaponry:hydrodynamic.

### Incendiary

Use: Throwing weapons.

Availability — both: Registered.

Effect: Ignites eligible targets hit by the thrown weapon. Burning is separate from direct impact damage.

ID: spartanweaponry:incendiary.

### Lucky Throw

Use: Throwing weapons.

Availability — both: Registered.

Effect: Improves compatible loot drops from kills with thrown weapons. The throwing equivalent of a loot-oriented enchantment, not a critical-hit Luck buff.

ID: spartanweaponry:lucky_throw.

### Propulsion

Use: Throwing weapons.

Availability — both: Registered.

Effect: Increases throwing velocity and practical range. Does not increase melee reach.

ID: spartanweaponry:propulsion.

### Rapid Load

Use: Spartan crossbows.

Availability — both: Registered.

Effect: Shortens crossbow reload time. Separate from aim time and bolt speed.

ID: spartanweaponry:rapid_load.

### Razor's Edge

Use: Throwing weapons.

Availability — both: Registered.

Effect: Adds damage to supported thrown-weapon attacks. The spelling/tooltip differs from normal Sharpness.

ID: spartanweaponry:razors_edge.

### Return

Use: Throwing weapons.

Availability — both: Registered.

Effect: Makes the thrown weapon return after landing, with faster return at higher levels. It is not vanilla 1.13+ Loyalty, which does not exist in Minecraft 1.12.2.

ID: spartanweaponry:return.

### Sharpshooter

Use: Spartan crossbows.

Availability — both: Registered.

Effect: Reduces the time needed to settle the crossbow's aim. Different from Defiled Lands Sharpshooter's projectile behavior.

ID: spartanweaponry:sharpshooter.

### Spreadshot

Use: Spartan crossbows.

Availability — both: Registered.

Effect: Adds two bolts around the main bolt in a spread. Not necessarily three hits on one target.

ID: spartanweaponry:spreadshot.

### Supercharge

Use: Throwing weapons.

Availability — both: Registered.

Effect: Reduces the time needed to charge a throw. It is not the same as Propulsion's projectile-speed bonus.

ID: spartanweaponry:supercharge.

## Switch-Bow

### Pull-Speed

Use: Switch-Bow.

Availability — both: Registered.

Effect: Increases the supported bow's pulling speed. The checked Dregora setting is 30% per level, maximum III.

ID: switchbow:pullspeed.

### Reduce Cooldown

Use: Switch-Bow special functions.

Availability — both: Registered.

Effect: Reduces supported cooldowns. The checked Dregora configuration uses 10% per level, maximum V. Not a universal cooldown reduction for other mods.

ID: switchbow:cooldownreduce.

### Scope

Use: Switch-Bow.

Availability — both: Registered.

Effect: Adds the supported scoped/zoomed aiming feature. It does not raise damage by itself.

ID: switchbow:activescope.

## Fish's Undead Rising

### Corrosive

Use: Fish's Undead Rising weapons.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: Applies a weakening/corrosion effect that makes the victim take more damage. Not the same as a direct weapon armor-piercing percentage.

ID: mod_lavacow:corrosive.

### Lifesteal

Use: Fish's Undead Rising weapons.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: A separate mod's damage-to-healing enchantment. Do not apply SME Lifesteal's formulas or compatibility assumptions to it just because the display name matches.

ID: mod_lavacow:lifesteal.

### Poisonous

Use: Fish's Undead Rising weapons.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: Adds Poison to qualifying weapon attacks. Separate from SME Envenomed; target poison immunity still matters.

ID: mod_lavacow:poisonous.

## Nanonaitor's Arsenal (personal add-on)

This section describes your installed personal add-on, not stock RLCraft or stock Dregora. Java values must not be assumed to match the Bedrock editions.

### Breeched

Use: Arsenal special shields / drawback.

Availability — both: Registered.

Effect: Doubles disable cooldowns for Tartsy Shield and Sun-War Bulwark. The item's spelling is Breeched. Personal add-on content.

ID: nanonaitors_arsenal:breeched.

### Long Chain

Use: Arsenal flails / ball-and-chain.

Availability — both: Registered.

Effect: Adds 1 block of supported chain-weapon reach per level. Personal add-on content, not a stock RLCraft enchantment.

ID: nanonaitors_arsenal:long_chain.

### Recovery

Use: Arsenal special shields.

Availability — both: Registered.

Effect: Halves disable cooldowns for Tartsy Shield and Sun-War Bulwark. It does not halve every status-effect duration. Personal add-on content.

ID: nanonaitors_arsenal:recovery.

### Rotation Force

Use: Arsenal flails / ball-and-chain.

Availability — both: Registered.

Effect: Adds 0.2 supported chain-weapon attack speed per level. Personal add-on content.

ID: nanonaitors_arsenal:rotation_force.

## Defenders (personal add-on)

This section describes your installed personal add-on, not stock RLCraft or stock Dregora. Java values must not be assumed to match the Bedrock editions.

### 6th Sense

Use: Defenders / automatic parry.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: The installed Java mod's tooltip specifies a 10% automatic melee-parry chance; parries make attackers glow for 5 seconds. Personal add-on content.

ID: defenders:sixth_sense.

### Deflection

Use: Defenders / defense.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: The installed Java mod's tooltip specifies 10% damage reduction per level, with an additional 5% for melee. Treat this as that mod's defense mechanic, not vanilla shield reflection.

ID: defenders:deflection.

### Finesse

Use: Defenders / offhand.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: Adds +0.5 melee damage per level while the Defender is equipped in the offhand. Personal add-on content.

ID: defenders:finesse.

### Footwork

Use: Defenders / movement.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: Reduces movement slowdown while blocking by 10 percentage points per level. Personal add-on content, not the SME Parry enchantment.

ID: defenders:footwork.

### Fortification

Use: Defenders / guarding.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: Adds 5 percentage points per level to sustained melee damage reduction. Personal add-on content; do not assume the same values as the Bedrock add-on.

ID: defenders:fortification.

### Reflexes

Use: Defenders / timing.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: Extends the perfect-parry window by 0.1 seconds per level. Personal add-on content.

ID: defenders:reflexes.

### Reprisal

Use: Defenders / parry follow-up.

Availability — Regular RLCraft: Not registered in this profile. Dregora: Registered.

Effect: After a perfect parry, the next melee attack within 2 seconds receives +1 damage per level. Personal Java add-on content.

ID: defenders:reprisal.

## Detailed comparisons for the original draft

### Advanced Sharpness

Both profiles use 1.25 + 0.95L added damage: I +2.2, II +3.15, III +4.1, IV +5.05, V +6. These are additions before relevant charge/critical/defense processing, not guaranteed final health loss. Different Sharpness tiers normally exclude each other.

### Butchering

Regular RLCraft's enabled RLMixins overhaul cancels the old standalone SME handler and adds +L to the combat damage modifier against EntityAnimal targets. At V that is +5, not the old unpatched 7.5-damage secondary hit.

Dregora adds +2L to qualifying attacks and +L effective Looting when the killed victim is an EntityAnimal. At V: +10 damage and +5 effective Looting. The latter stacks onto the event's existing Looting level but only matters for drop rules that use it.

Neither implementation means "all passive mobs" or "all animal-looking modded enemies."

### Counter Attack

Regular profile: disabled in the SME enabled-enchantments configuration.

Dregora:

- I: 10% chance, reflects 20% of the incoming attack-event amount.
- II: 15% chance, reflects 40%.
- III: 20% chance, reflects 60%.
- Each Parry level adds one percentage point to the chance. Counter Attack III + Parry III gives 23%.
- The return hit is thorns-type damage. The incoming attack is not canceled by Counter Attack itself. Do not calculate the reflected value from the final health loss after every defense.

### Disorientating Blade

Regular RLCraft:

- I-II: 10% chance for Slowness and Nausea.
- III-IV: the old handler applies Slowness, Nausea and Weakness on qualifying hits, subject to target immunity/compatibility handling.
- IV: Slowness IV and Nausea for 3 seconds; Weakness I for 53 ticks (2.65 seconds).
- The old critical hook adds 0.25 to its damage modifier when the target has both Slowness and Nausea and the weapon has level IV. This is not a blanket 25% increase to every hit; combat-event integration still matters.

Dregora:

- Base chance is 15%L: 15%, 30%, 45%, 60%.
- Nausea at all levels; Blindness additionally at III-IV.
- Duration is 40 + 10L ticks: 2.5, 3, 3.5 or 4 seconds.
- RLCombat attack strength also gates the proc. This is not the old guaranteed level-III/IV debuff bundle.

### Education versus Adept

Education in both checked profiles:

- I: 1.3x eligible ordinary-mob XP.
- II: 1.6x.
- III: 1.9x.
- Final XP is rounded down to an integer. No bonus for bosses or blights.
- Cannot normally coexist with Adept, Looting or Advanced Looting.

Regular Adept, with its enabled RLMixins patch:

- Ordinary mobs AND blights: floor(XP x (1 + 0.15L)) + L.
- Other boss-classified mobs: floor(XP x (1 + 0.5L)) + L.
- Requires the mob's original XP reward to be positive.

Dregora Adept:

- Ordinary mobs: XP + max(floor((L+1)/2), floor(XP x 0.15L)).
- Bosses AND blights: replace 0.15 with 0.5.
- Requires positive current dropped XP.

Example with an ordinary mob worth 5 XP at enchantment level III:

- Education III: floor(5 x 1.9) = 9 XP.
- Regular Adept III: floor(5 x 1.45) + 3 = 10 XP.
- Dregora Adept III: 5 + max(2, floor(5 x 0.45)) = 7 XP.

These examples show why percentages alone can mislead on low-XP mobs. Adept's compatibility with Looting is also a separate reason to use it.

### Fiery Edge

Both versions can bypass a burning target's active hurt-immunity window with a 5%L roll (10% at II). This allows an otherwise suppressed rapid hit to be processed; it does not add 10% armor piercing.

The regular profile's replacement handler requires more than 90% attack charge for the bypass and sets fire for 6L seconds. Dregora uses its newer fire-aspect integration. Fire immunity, an already-expired burn and attack timing can make the bypass irrelevant.

For Dregora Ash Destroyer, fire duration matters: its bonus scales with remaining burn time up to 640 ticks. Therefore Fiery Edge and Supreme Fire Aspect are not interchangeable simply because both ignite targets.

### Luck Magnification

Both profiles refresh a Luck effect while the enchanted weapon is held. Let K be the user's resulting Luck attribute and L the enchantment level. The extra effective Looting is approximately K x L / 2, converted to an integer by the event logic. Negative Luck and integer rounding can make edge cases differ.

Regular RLCraft's replacement handler:

- Requires an already-critical attack for its critical bonus.
- Chance is based on abs(K x L) percent.
- On success, adds 0.1 x K x L to the critical damage modifier.
- With Luck Magnification II supplying K=2: +2 effective Looting and a 4% chance to strengthen an existing critical by +0.4.

Dregora:

- Can convert an eligible noncritical attack to a critical with min(20%, K x L percent).
- A critical then has a separate min(20%, 2 x K x L percent) chance to gain +0.1 x K x L on its damage modifier.
- With L=2 and K=2: +2 effective Looting; 4% critical-conversion chance; 8% critical-strengthening chance for +0.4.
- Strong-attack eligibility and denied critical events are respected. These are not guaranteed multipliers to every hit.
- Incompatible with Critical Strike in Dregora's configuration.

### Purging Blade

Both implementations use a base proc progression of 16%, 22%, 28%, 34%, 40% for I-V, but the result changed.

Regular RLCraft's older handler attempts separate magic damage (2, 2.75, 3.5, 4.25, 5), clears the hurt timer and multiplies the triggering event by 1.2. Its potion-effect modification uses old code; do not promise it reliably removes every active effect. The extra-damage portion does not require finding an effect first.

Dregora chooses an active effect. If none exists, the proc provides no bonus. It attempts to remove the chosen effect and uses the effect's tier to amplify the triggering hit:

  multiplier = 1 + 0.02 x enchantment level x effect tier

At Purging Blade V, a tier-I effect gives x1.10; tier-II gives x1.20. The chosen effect can be helpful or harmful to the enemy, so it can remove Poison/Wither you applied. There is no retained standalone +5 magic-damage proc from the old version. Attack strength additionally affects proc eligibility.

### Smite

Both: +2.5L damage against undead, reaching +12.5 at V before later calculations. Classification is decisive. Do not assume that all parasites or all enemies with bones are undead.

### Sol's Blessing

Regular RLCraft uses a signed weather/time modifier:

- Base = 1.5 + 0.5L.
- Day: starts with +base. If not sky-exposed, subtract 0.75L.
- Night: starts with -base. If not sky-exposed, subtract another 0.5L.
- Rain subtracts another 0.5L.
- At V in dry conditions: daytime/open +4; daytime/sheltered +0.25; nighttime/open -4; nighttime/sheltered -6.5.
- Open-sky daytime hits also apply old Glowing behavior: initially 10 seconds, with extensions on subsequent qualifying hits.

Dregora uses daytime-only positive bonuses:

- Open sky: +1.5 + 0.75L; V gives +5.25.
- Sheltered: +0.5 + 0.25L; V gives +1.75.
- At night: no bonus and no old nighttime penalty.
- Open-sky daytime Glowing lasts 20 + 10L ticks, or 3.5 seconds at V, subject to the attack-strength gate.

### True Strike

Regular: the old Evasion handler gives a 75% bypass chance when the attacker holds True Strike. It does not include the new Dregora i-frame roll.

Dregora: SME Evasion and SME Parry skip their defensive proc when the attacker holds True Strike. Separately, True Strike I has a 1% roll to clear the target's active hurt-invulnerability window. It is not universal armor bypass, creative-mode damage or guaranteed hits against every mod mechanic.

### Unreasonable

Regular: the legacy redirection code has full-health and event-timing limitations; this explains its unreliable Survival behavior. Do not attach the newer 10% chance to it.

Dregora: 5%L chance before the additional attack-strength gate. At II, a fully charged eligible hit has a 10% base chance to redirect the struck mob to another nearby mob. Search extent is min(3 + 3L, 16) blocks around the victim's bounding box. The effect is limited by actual mob targeting/attack AI; it does not permanently ally the mob with you.

### Unsheathing

Regular: maximum I. Incoming damage from an attacker can swap a hotbar weapon carrying Unsheathing into the selected slot. This can interrupt what you were holding.

Dregora: maximum II. Switching from another item type records a draw time. A qualifying hit within 10 + 10L ticks gets a 1 + 0.25L multiplier, then triggers a 100-tick cooldown. Thus I = +25% within 1 second; II = +50% within 1.5 seconds; cooldown = 5 seconds. Merely swapping between two copies of the same item type does not satisfy the draw check.

## Compatibility and build notes

### Dregora's useful incompatibility groups

The checked configuration lists these mutually exclusive groups; this is a practical selection, not every armor/tool restriction:

- Sharpness family: Lesser Sharpness, Sharpness, Advanced Sharpness, Supreme Sharpness, Reinforced Sharpness, Bluntness.
- Advanced damage tier: Advanced Sharpness / Advanced Smite / Advanced Bane of Arthropods.
- Supreme damage tier: Supreme Sharpness / Supreme Smite / Supreme Bane of Arthropods / Penetrating Edge / Spell Breaker.
- Animal/monster specialists: Butchering / Defusing Edge / Inhumane / Water Aspect.
- Conditional damage: Viper / Dark Shadows / Mortalitas.
- Damage multipliers: Ash Destroyer / Difficulty's Endowment / Reviled Blade / Instability / Cursed Edge.
- Critical enchantments: Critical Strike / Luck Magnification.
- Armor-piercing choice: Rune: Magical Blessing / Rune: Piercing Capabilities / Better Survival Penetration.
- Fire family: normal/Lesser/Advanced/Supreme Fire Aspect / Fiery Edge / Water Aspect / Cryogenic (displayed as Freezing) / Extinguish.
- Debuff family: Cryogenic / Desolator / Disorientating Blade / Envenomed / Hors De Combat / Levitator / Purification.
- Subject family: Biology / Chemistry / English / History / Mathematics / P.E. / Physics / Geography. Disabled English remains a configured reference, not normal availability.
- Weather/time family: Clearskies' Favor / Luna's Blessing / Rain's Bestowment / Sol's Blessing / Thunderstorm's Bestowment / Winter's Grace.
- XP choice: Adept / Education. Education also conflicts with Looting and Advanced Looting.

Do not copy these groups wholesale onto regular RLCraft 2.9.3: its older classes and RLMixins patches implement different restrictions.

### Avoid these common confusions

- Magic-looking particles are not evidence of magic-classified damage. Explosion damage, fire damage, thorns damage, direct weapon damage and magical damage can be processed differently.
- Rune: Magical Blessing does not automatically convert every unrelated explosion or secondary proc into magic.
- Better Survival Penetration's old secondary magic-damage path is not the same as Dregora's integrated piercing implementation.
- An enchantment being present on an illegal structure weapon does not prove that its above-cap level has useful or safe scaling.
- First Aid, parasite adaptation/caps, armor, protection, Potion Core attributes and other mods can change final damage and healing.
- A listed effect is not a promise that it works against bosses, invulnerable targets, training dummies or every modded creature.
- Commands should use the registry ID for the correct profile. Several SME IDs changed in the rework even where the visible name stayed the same.

## Sources and verification limits

Primary evidence used:

1. Each installed profile's config/fantasticlib/reference/enchantments.txt registry snapshot, checked against mod/config inventories. These snapshots can become stale after changing mods without launching the profile; the guide explicitly distinguishes registration from normal Survival acquisition.
2. Installed SME 0.5.5 and 1.0.8 classes, configuration and language resources, including Dregora's resource overrides for Freezing and Underwater Strider.
3. Installed Better Survival 1.5.3/1.5.4 and RLMixins 1.2.15/1.4.6 classes and enabled configuration. These patches override several upstream effects, notably Education, Adept, Butchering, Fiery Edge, Luck Magnification, Penetration and some Subject enchantments.
4. Installed owning-mod English resources and configuration for the smaller mod sections. Those sections explain the documented gameplay role; they are not claims that every optional cross-mod hook was live-tested.
5. Official pack release notes, used as context rather than as a replacement for installed settings:
   - RLCraft 2.9.3: https://www.curseforge.com/minecraft/modpacks/rlcraft/files/4612979
   - Dregora enchantment rework: https://www.curseforge.com/minecraft/modpacks/rlcraft-dregora/files/7055740

This is a complete registry-coverage gameplay reference, not a live combat test suite or an exhaustive algebraic specification of every enchantment. Exact values were included where checked; undocumented probabilities were not guessed. For a different server or modpack release, compare its mods and config files before reusing the numbers.

Not separate enchantment entries: Enchantment Descriptions displays descriptions; Disenchanter removes enchants; Quark/Inspirations can change enchanting or equipment handling. Their presence does not itself mean every language string or class name is an independently registered enchantment.

Unregistered remnants excluded from the active catalogue include old SME language-only names, Aquaculture Fast Cast, Spartan Shields Deflect and Charm Salvage. Charm Salvage is disabled in the checked Dregora configuration. These must not be confused with the registered catalogue above.
