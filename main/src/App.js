import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';

export default function App() {
const [ciudades,setCiudades ]  = useState([])
const {REACT_APP_API_KEY}= process.env
function onSearch(ciudad){
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${REACT_APP_API_KEY}&units=metric`)
.then(r => r.json())
.then((recurso) => {
    try{const ciudad = {
      min: Math.round(recurso.main.temp_min),
      max: Math.round(recurso.main.temp_max),
      img: recurso.weather[0].icon,
      id: recurso.id,
      wind: recurso.wind.speed,
      temp: recurso.main.temp,
      name: recurso.name,
      weather: recurso.weather[0].main,
      clouds: recurso.clouds.all,
      latitud: recurso.coord.lat,
      longitud: recurso.coord.lon
}    
const ciudadEncontrada = ciudades.find(c => c.id === ciudad.id)
if(ciudadEncontrada) return alert('No se puede agregar ciudades repetidas')
else setCiudades(ciudadesActuales => [...ciudadesActuales,ciudad])
    }catch{ alert('no se encontro la ciudad')}
})

};

function onClose(id){
  const ciudadesFiltradas = ciudades.filter(c => c.id !== id)
  setCiudades(ciudadesFiltradas)
}
  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
      <Cards cities={ciudades} onClose={onClose}/>
    </div>
  );
  }
