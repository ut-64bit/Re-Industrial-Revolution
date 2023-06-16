// priority: 0

onEvent('jei.hide.items', event => {
	// minecraft
	let hideTools = (material) => {
		event.hide(material + '_axe')
		event.hide(material + '_pickaxe')
		event.hide(material + '_shovel')
		event.hide(material + '_hoe')
	}
	hideTools('minecraft:wooden')
	hideTools('minecraft:iron')
	hideTools('minecraft:golden')
	hideTools('minecraft:stone')
	hideTools('minecraft:diamond')

	// oldguns
	event.hide('oldguns:iron_with_coal')

	// tconstruct
	event.hide('tconstruct:earth_slime_sling')
	event.hide('tconstruct:ender_slime_sling')
	event.hide('tconstruct:ichor_slime_sling')
	event.hide('tconstruct:sky_slime_sling')
})