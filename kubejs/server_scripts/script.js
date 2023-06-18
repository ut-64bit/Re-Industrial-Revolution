// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent(`recipes`, event => {
	// common
	/*
	event.recipes.shapeless(`alloyed:steel_ingot`, `#forge:ingots/steel`)
	event.recipes.shapeless(`immersiveengineering:ingot_steel`, `#forge:ingots/steel`)
	*/
	const removeTools = [
		`minecraft:wooden`,
		`minecraft:stone`,
		`minecraft:golden`,
		`minecraft:iron`,
		`minecraft:diamond`,
		`minecraft:netherite`,
		`immersiveengineering:steel`,
		`create_sa:brass`,
		`create_sa:copper`,
		`create_sa:zinc`
	]
	removeTools.forEach(material => {
		event.remove([{ output: `${material}_pickaxe` }, { input: `${material}_pickaxe` }])
		event.remove([{ output: `${material}_axe` }, { input: `${material}_axe` }])
		event.remove([{ output: `${material}_shovel` }, { input: `${material}_shovel` }])
		event.remove([{ output: `${material}_hoe` }, { input: `${material}_hoe` }])
		event.remove([{ output: `${material}_sword` }, { input: `${material}_sword` }])
	})

	let transTool = (output_ma, material) => {
		event.shaped(`${output_ma}_pickaxe`, [
			'H',
			'S'
		], {
			C: '#forge:rods/wooden',
			L: Item.of(`tconstruct:pick_head`, `{Material:"tconstruct:${material}"}`),
		})
		event.shaped(`${output_ma}_axe`, [
			'H',
			'S'
		], {
			C: '#forge:rods/wooden',
			L: Item.of(`tconstruct:axe_head`, `{Material:"tconstruct:${material}"}`),
		})
		event.shaped(`${output_ma}_sword`, [
			'H',
			'S'
		], {
			C: '#forge:rods/wooden',
			L: Item.of(`tconstruct:sword_head`, `{Material:"tconstruct:${material}"}`),
		})
	}
	transTool(`minecraft:wooden`)

	// oldguns
	event.remove({ output: `oldguns:steel_ingot` })
	event.remove({ output: `oldguns:iron_with_coal` })

	// tconstruct
	const MetalMaterials = [
		`aluminum`,
		`amethyst_bronze`,
		`brass`,
		`bronze`,
		`cobalt`,
		`constantan`,
		`copper`,
		`electrum`,
		`emerald`,
		`enderium`,
		`gold`,
		`hepatizon`,
		`invar`,
		`iron`,
		`knightslime`,
		`lead`,
		`lumium`,
		`manyullyn`,
		`molten_debris`,
		`netherite`,
		`nickel`,
		`osmium`,
		`pewter`,
		`pig_iron`,
		`platinum`,
		`queens_slime`,
		`refined_glowstone`,
		`refined_obsidian`,
		`rose_gold`,
		`signalum`,
		`silver`,
		`slimesteel`,
		`soulsteel`,
		`steel`,
		`tin`,
		`tungsten`,
		`uranium`,
		`zinc`
	]
	event.remove([{ output: `tconstruct:earth_slime_sling` }, { input: `tconstruct:earth_slime_sling` }])
	event.remove([{ output: `tconstruct:ender_slime_sling` }, { input: `tconstruct:ender_slime_sling` }])
	event.remove([{ output: `tconstruct:ichor_slime_sling` }, { input: `tconstruct:ichor_slime_sling` }])
	event.remove([{ output: `tconstruct:sky_slime_sling` }, { input: `tconstruct:sky_slime_sling` }])
	event.remove({ id: `tconstruct:smeltery/seared/grout` })
	event.remove({ id: `tconstruct:smeltery/seared/grout_multiple` })

	MetalMaterials.forEach(material => {
		event.remove({ type: `tconstruct:casting_table`, output: `#forge:plates/${material}` })
		event.remove({ type: `tconstruct:casting_table`, output: `#forge:wires/${material}` })
	})

	// create
	event.recipes.create.mixing(
		[`2x tconstruct:grout`, Item.of(`tconstruct:grout`).withChance(0.5)],
		[`minecraft:clay_ball`, `#minecraft:sand`, `minecraft:gravel`]
	)
	let inter = `kubejs:unprocessed_steel_ingot`
	event.recipes.create.sequencedAssembly(`oldguns:steel_ingot`, `#forge:ingots/steel`,
		[
			event.recipes.create.filling(inter, [inter, Fluid.of(`minecraft:lava`, 250)]),
			event.recipes.create.pressing(inter, inter),
			event.recipes.create.pressing(inter, inter)
		]).transitionalItem(inter)

	// immersiveengineering

})

onEvent(`item.tags`, event => {
	// item tag
})

// fixed
onEvent("lootjs", (event) => {
	event.addLootTableModifier(`minecraft:blocks/grass`)
		.removeLoot(`minecraft:wheat_seeds`);

	event.addLootTableModifier(`minecraft:blocks/tall_grass`)
		.removeLoot(`minecraft:wheat_seeds`);
});