const yMap = () => {
  if (document.querySelector('#map')) {
    const map = document.querySelector('#map')
    const coordinates = map.dataset.coordinates
    const address = map.dataset.address

    ymaps.ready(function () {
      const myMap = new ymaps.Map(
          'map',
          {
            center: coordinates.split(','),
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
            hintContent: address,
            balloonContent: address,
          },
          {
            preset: 'islands#redHomeIcon',
          }
        )

      myMap.geoObjects.add(myPlacemark)
      myMap.behaviors.disable('scrollZoom')
    })
  }
}

export default yMap
