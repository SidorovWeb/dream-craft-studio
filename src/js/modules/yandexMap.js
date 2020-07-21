const yMap = () => {
  if (document.querySelector('#map')) {
    ymaps.ready(function () {
      const myMap = new ymaps.Map(
          'map',
          {
            center: [55.643414, 37.674508],
            zoom: 17,
            controls: [
              // 'zoomControl',
              // 'searchControl',
              'typeSelector',
              'fullscreenControl',
              // 'routeButtonControl',
            ],
          },
          {
            searchControlProvider: 'yandex#search',
          }
        ),
        myPlacemark = new ymaps.Placemark(
          myMap.getCenter(),
          {
            hintContent: '<strong>Москва, ш. Каширское, д. 66, корп. 2</strong>',
            balloonContent: '<strong>Москва, ш. Каширское, д. 66, корп. 2</strong>',
          },
          {
            preset: 'islands#redHomeIcon',
          }
        )

      myMap.geoObjects.add(myPlacemark)
      myMap.behaviors.disable('scrollZoom')

      // if (window.innerHeight <= 668) {
      //   myMap.behaviors.disable('drag')
      // }
      // myMap.behaviors.disable('multiTouch')
    })
  }
}

export default yMap
