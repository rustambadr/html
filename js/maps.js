ymaps.ready(function() {
	if( $(window).width() > 992 ) createMap( '.depos-map1', [-310, 0] );
	else createMap( '.depos-map1', [0, 0] );

	if( $(window).width() > 992 ) createMap( '.depos-map2', [310, 0] );
	else createMap( '.depos-map2', [0, 0] );
});

function createMap( mapName, margin ) {
	if( $(mapName).length == 0 )
		return;

	let center = $(mapName).attr('data-center-origin').split(',');
	let map = new ymaps.Map($(mapName).find('.maps').attr('id'), {
		center: center,
		zoom: 10,
		controls: []
	});
	let pixelCenter = map.getGlobalPixelCenter(center);
	pixelCenter = [
	    pixelCenter[0] + margin[0],
	    pixelCenter[1] + margin[1]
	];
	let geoCenter = map.options.get('projection').fromGlobalPixels(pixelCenter, map.getZoom());
	map.setCenter(geoCenter);

	$(mapName + ' .item').each(function( index ){
		$(this).attr('data-index', index);
		$(this).on('click', function(event){
			let index = $(this).attr('data-index');
			map.geoObjects.each(function (geoObject) {
		    if (geoObject.properties.get('index') == index) {
					geoObject.balloon.open();
	        return false;
		    }
			});
		});

		let pos = $(this).attr('data-origin').split(',');
		let content = $(this).find('.short-info .p3').text().trim();

		let place = new ymaps.Placemark(pos, {
        balloonContent: '<div class="balooneP" data-id="'+index+'"><div class="baloone">\
		      <p>'+content+'</p>\
		    </div></div>',
				index: index
    }, {
        iconLayout: 'default#image',
        iconImageClipRect: [[0,0], [36, 54]],
        iconImageHref: '/img/map_loc.svg',
				hideIconOnBalloonOpen: false
    });
		map.geoObjects.add(place);
	});

	map.geoObjects.events.add('balloonopen', function (e) {
		let objectId = e.get('target').properties.get('index');
		setTimeout(function(){
			$(mapName).find('[data-index="'+objectId+'"]').addClass('active');
		}, 0);

		if( $(window).width() < 992 ) {
			$([document.documentElement, document.body]).animate({
					scrollTop: $(mapName).offset().top
			}, 500);
		}
		let baseOffset = $(mapName).find('.group-list').offset().top;
		// console.log($(mapName).find('[data-index="'+objectId+'"]').offset().top, baseOffset)
		$(mapName).find('.group-list').animate({
				scrollTop: ($(mapName).find('[data-index="'+objectId+'"]').offset().top - baseOffset)
		}, 0);
	}).add('balloonclose', function (e) {
		let objectId = e.get('target').properties.get('index');
		$(mapName).find('[data-index="'+objectId+'"]').removeClass('active');
	});
}
