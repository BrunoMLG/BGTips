//mapa
var mymap = L.map('mapid').setView([41.149286, -8.603105], 150);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=f4QqmTQISnoqyCCpyEXw',{
    attribution:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(mymap);
var marker = L.marker([41.149286,-8.603105]).addTo(mymap);
marker.bindPopup("<b>Estamos aqui!</b>").openPopup()
