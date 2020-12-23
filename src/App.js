import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Error from './components/Error';




function App() {



  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
});
  const [consultar, guardarConsultar] = useState(false);
  const {ciudad, pais} = busqueda;
  const [resultado, guardarResultado] = useState({});
  const [error, guardarError] = useState(false);

  useEffect(() => {
    const consultarAPI = async () => {

      if(consultar){
        try {
          const appId = '2b44ad8d31374aa776c31063daf17871';
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
  
          const respuesta = await fetch(url);
          const datos = await respuesta.json();

          guardarConsultar(false);
          guardarResultado(datos);

          if(datos.cod === "404"){
            guardarError(true)
          }else{
            guardarError(false);
          }

        } catch (error) {
          console.error(error);
        }
      }

    }

    consultarAPI();
  },[consultar, ciudad, pais])


  let componente;

  if(error){
    componente = <Error mensaje="No hay resultados, intente con otra búsqueda" />
  }else{
    componente =   <Resultado resultado={resultado} />
  }




  return (
    <div className="hero">
      <Header />
      <div className="contenedor">
        <div className="contenido">
          <Formulario
            busqueda={busqueda}
            guardarBusqueda={guardarBusqueda}
            guardarConsultar={guardarConsultar}
          />
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
