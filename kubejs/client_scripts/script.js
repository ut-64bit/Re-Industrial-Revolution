// priority: 0

onEvent('jei.hide.items', event => {
	//oldguns
	event.hide('oldguns:iron_with_coal')

	// botania
	event.hide('botania:flight_tiara')
	event.hide('botania:mana_fluxfield')
	event.hide('botania:conjuration_catalyst')

	// tconstruct
	event.hide('tconstruct:earth_slime_sling')
	event.hide('tconstruct:ender_slime_sling')
	event.hide('tconstruct:ichor_slime_sling')
	event.hide('tconstruct:sky_slime_sling')

	// ars_nouveau
	event.hide('ars_nouveau:warp_scroll')
})