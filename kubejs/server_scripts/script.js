// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	//common
	event.recipes.shapeless(`alloyed:steel_ingot`, `immersiveengineering:ingot_steel`)
	event.recipes.shapeless(`oldguns:steel_ingot`, `alloyed:steel_ingot`)
	event.recipes.shapeless(`immersiveengineering:ingot_steel`, `oldguns:steel_ingot`)

	// oldguns
	event.remove({ output: 'oldguns:steel_ingot' })
	event.remove({ output: 'oldguns:steel_block' })
	event.remove({ output: 'oldguns:iron_with_coal' })
	event.replaceInput({ input: 'oldguns:steel_ingot' }, `oldguns:steel_ingot`, `#forge:ingots/steel`)
	event.replaceInput({ input: 'oldguns:steel_block' }, `oldguns:steel_block`, `#forge:storage_blocks/steel`)

	// botania
	event.remove({ output: 'botania:flight_tiara' })
	event.remove({ output: 'botania:mana_fluxfield' })
	event.remove({ output: 'botania:conjuration_catalyst' })

	// tconstruct
	event.remove({ output: 'tconstruct:earth_slime_sling' })
	event.remove({ output: 'tconstruct:ender_slime_sling' })
	event.remove({ output: 'tconstruct:ichor_slime_sling' })
	event.remove({ output: 'tconstruct:sky_slime_sling' })
	event.remove({ type: 'tconstruct:ore_melting' })
	event.remove({ id: 'tconstruct:smeltery/seared/grout' })
	event.remove({ id: 'tconstruct:smeltery/seared/grout_multiple' })

	// create
	event.recipes.create.mixing('2x tconstruct:grout', ['minecraft:clay_ball', '#minecraft:sand', 'minecraft:gravel'])

	// ars_nouveau
	event.remove({ output: 'ars_nouveau:warp_scroll' })
})

onEvent('item.tags', event => {

})