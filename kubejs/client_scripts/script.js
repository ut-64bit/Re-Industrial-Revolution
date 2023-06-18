// priority: 0

onEvent(`jei.hide.items`, event => {
	// minecraft
	const vanillaTools = [`minecraft:wooden`, `minecraft:stone`, `minecraft:golden`, `minecraft:iron`, `minecraft:diamond`, `minecraft:netherite`]
	vanillaTools.forEach(material => {
		event.hide(`${material}_pickaxe`)
		event.hide(`${material}_axe`)
		event.hide(`${material}_shovel`)
		event.hide(`${material}_hoe`)
		event.hide(`${material}_sword`)
	})

	// oldguns
	event.hide(`oldguns:iron_with_coal`)

	// tconstruct
	event.hide(`tconstruct:earth_slime_sling`)
	event.hide(`tconstruct:ender_slime_sling`)
	event.hide(`tconstruct:ichor_slime_sling`)
	event.hide(`tconstruct:sky_slime_sling`)
})