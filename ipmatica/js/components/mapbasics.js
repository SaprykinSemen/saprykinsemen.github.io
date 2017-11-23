ymaps.ready(init);
var myMap;
var myMap2;

function init(){     
    myMap = new ymaps.Map("map1", {
        center: [55.753219527036435,37.61945746292036],
        zoom: 13,
        controls: [],

    });
    myMap.behaviors.disable('scrollZoom'); 

    myPlacemark = new ymaps.Placemark([55.75460601551486,37.65116255070904], {
        hintContent: '',
        balloonContent: ''
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/contacts_marker.png',
        iconImageSize: [60, 60],
    });

    myMap.geoObjects.add(myPlacemark);

    myMap2 = new ymaps.Map("map2", {
        center: [59.93957511250204,30.31164938755797],
        zoom: 13,
        controls: [],

    });
    myMap2.behaviors.disable('scrollZoom'); 

    myPlacemark = new ymaps.Placemark([59.93957511250204,30.31164938755797], {
        hintContent: '',
        balloonContent: ''
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/contacts_marker.png',
        iconImageSize: [60, 60],
    });

    myMap2.geoObjects.add(myPlacemark);
}


