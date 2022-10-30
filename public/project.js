// create map
const myMap = L.map('map',{
    center:[40.177200,44.503490],
    zoom: 13,
})


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 12,
}).addTo(myMap)

// create and main add geolocation marker
const marker = L.marker([40.177200, 44.503490])
marker.addTo(myMap).bindPopup('<p1><b> The Yerevan, Armenia</b></p1>').openPopup()

// draw the 2nd arrondissement
const latlngs = [[40.197728,44.493443],[40.19174, 44.50629],[40.18735,44.521423],[40.16432,44.5169], [40.15483,44.50732]]

const polygon = L.polygon(latlngs, {
    color: 'blue', 
    fillOpacity: 0.0
}).addTo(myMap)

// Create Red pin marker
const redPin = L.icon({
    iconUrl: '/assets/red-pin.png',
    iconSize:     [38, 38], // size of the icon
    iconAnchor:   [19, 38], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -38] // point from which the popup should open relative to the iconAnchor
});


// Metro station

const bAre = L.marker([40.197728,44.493443], {icon: redPin}).bindPopum('Barekamutyun')
const mB = l.marker([40.19174, 44.50629], {icon:redPin}).bindPopup ('Marshall Bagramyan')
const eRit = l.marker([40.18735,44.521423], {icon:redPin}).bindPopup ('Ertiasardakan')
const hH = l.marker([40.16432,44.5169], {icon:redPin}).bindPopup ('Hanrapetutyan Hraparak')
const sD = l.marker([ 40.15483,44.50732], {icon:redPin}).bindPopup ('Sasunci Davit')
const gN = l.marker([40.151,44.4835], {icon:redPin}).bindPopup ('Garegin Njdeh')

const stations = L.layerGroup([bAre,mB,eRit,hH,sD,gN]).addTo(myMap);