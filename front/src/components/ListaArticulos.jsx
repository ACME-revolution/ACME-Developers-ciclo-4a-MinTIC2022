import {useState, useEffect} from 'react';
import Articulo from './Articulo';

const ListaArticulos = () => {
  // Esto solo esta creado para verificar el correcto funcionamiento, apenas se cambie por el fetch se puede borrar (ojo si se modifica este, tambien modificar el de detalle articulo)
  const jsonArticulos = '[{"_id":"1", "nombre":"Yunque de hierro", "descripcion":"Yunque de hierro", "reviews":5, "precio":72000, "imagen":"https://ep01.epimg.net/verne/imagenes/2015/07/31/articulo/1438353048_228377_1438621069_sumario_normal.jpg", "stock":10}, {"_id":"2", "nombre":"Tornado Kit", "descripcion":"Tornado Kit", "reviews":2, "precio":72000, "imagen":"https://ep01.epimg.net/verne/imagenes/2015/07/31/articulo/1438353048_228377_1438621011_sumario_normal.jpg", "stock":10}, {"_id":"3", "nombre":"Imán", "descripcion":"Imán", "reviews":12, "precio":20000, "imagen":"https://ep01.epimg.net/verne/imagenes/2015/07/31/articulo/1438353048_228377_1438621036_sumario_normal.jpg", "stock":10}, {"_id":"4", "nombre":"Somníferos en pastillas", "descripcion":"Somníferos en pastillas", "reviews":7, "precio":15000, "imagen":"https://pbs.twimg.com/media/CROpULmWUAAowUu.png", "stock":10}]';
  
  const [consulta, setConsulta] = useState([]);


  useEffect( () => {
    const consultarAPI = async () => {
        try {
            // const respuesta = await fetch(`direccion URL`);
            // const resultado = await respuesta.json();

            //esta linea solo es temporal mientras se tiene una consulta a alguin lugar que retorne un json, ahi se borra y se descomentan las dos anteriores
            const resultado = JSON.parse(jsonArticulos);

            setConsulta(resultado);

        } catch (error) {
            console.log("Error: " + error.message);
        }
    };
    consultarAPI();
  }, []);

  return (
    <div className="listado">
       
       {
          consulta.length > 0 
                                ?
                                <section id="productos" className='container mt-5'>
                                    <div className='row'>
                                            {
                                                consulta.map(articulo => (
                                                    <Articulo
                                                        key={articulo._id}
                                                        articulo={articulo}
                                                    />
                                                ))
                                            }
                                        </div>
                                </section>
                                :
                                    <div>
                                        <p>No hay articulos</p>
                                    </div>

       }

    </div>
  )
}

export default ListaArticulos