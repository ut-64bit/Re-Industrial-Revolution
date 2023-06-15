// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	// common
	event.recipes.shapeless('alloyed:steel_ingot', '#forge:ingots/steel')
	event.recipes.shapeless('immersiveengineering:ingot_steel', '#forge:ingots/steel')

	// minecraft
	let removeTools = (material) => {
		event.remove({ output: material + '_pickaxe' })
		event.remove({ output: material + '_axe' })
		event.remove({ output: material + '_shovel' })
		event.remove({ output: material + '_hoe' })
	}
	removeTools('minecraft:wooden')
	removeTools('minecraft:stone')
	removeTools('minecraft:iron')
	removeTools('minecraft:golden')
	removeTools('minecraft:diamond')

	// oldguns
	event.remove({ output: 'oldguns:steel_ingot' })
	event.remove({ output: 'oldguns:iron_with_coal' })

	// tconstruct
	let TC = (id) => 'tconstruct:' + id
	const MetalMaterials = [
		'aluminum',
		'amethyst_bronze',
		'brass',
		'bronze',
		'cobalt',
		'constantan',
		'copper',
		'electrum',
		'emerald',
		'enderium',
		'gold',
		'hepatizon',
		'invar',
		'iron',
		'knightslime',
		'lead',
		'lumium',
		'manyullyn',
		'molten_debris',
		'netherite',
		'nickel',
		'osmium',
		'pewter',
		'pig_iron',
		'platinum',
		'queens_slime',
		'refined_glowstone',
		'refined_obsidian',
		'rose_gold',
		'signalum',
		'silver',
		'slimesteel',
		'soulsteel',
		'steel',
		'tin',
		'tungsten',
		'uranium',
		'zinc'
	]
	event.remove({ output: 'tconstruct:earth_slime_sling' })
	event.remove({ output: 'tconstruct:ender_slime_sling' })
	event.remove({ output: 'tconstruct:ichor_slime_sling' })
	event.remove({ output: 'tconstruct:sky_slime_sling' })
	event.remove({ id: 'tconstruct:smeltery/seared/grout' })
	event.remove({ id: 'tconstruct:smeltery/seared/grout_multiple' })
	MetalMaterials.forEach(material => {
		event.remove({ id: 'tconstruct:smeltery/casting/metal/' + material + '/plate_gold_cast' })
		event.remove({ id: 'tconstruct:smeltery/casting/metal/' + material + '/plate_sand_cast' })
		event.remove({ id: 'tconstruct:smeltery/casting/metal/' + material + '/wire_gold_cast' })
		event.remove({ id: 'tconstruct:smeltery/casting/metal/' + material + '/wire_sand_cast' })
	})

	// create
	event.recipes.create.mixing(
		['2x tconstruct:grout', Item.of('tconstruct:grout').withChance(0.5)],
		['minecraft:clay_ball', '#minecraft:sand', 'minecraft:gravel']
	)

	let inter = 'kubejs:unprocessed_steel_ingot'
	event.recipes.create.sequencedAssembly('oldguns:steel_ingot', '#forge:ingots/steel',
		[
			event.recipes.create.filling(inter, [inter, Fluid.of('minecraft:lava', 250)]),
			event.recipes.create.pressing(inter, inter),
			event.recipes.create.pressing(inter, inter)
		]).transitionalItem(inter)

})

onEvent('item.tags', event => {
	// item tag
})

onEvent("lootjs", (event) => {
	event.addLootTableModifier('minecraft:blocks/grass')
		.removeLoot('minecraft:wheat_seeds');

	event.addLootTableModifier('minecraft:blocks/tall_grass')
		.removeLoot('minecraft:wheat_seeds');
});