import { useParams, Link } from 'react-router-dom';
import { useState ,useEffect } from 'react';

const DetalleArticulo = () => {
  // Esto solo esta creado para verificar el correcto funcionamiento, apenas se cambie por el fetch se puede borrar (ojo si se modifica este, tambien modificar el de lista articulo)
  const jsonArticulos = '[{"_id":"1", "nombre":"Yunque de hierro", "descripcion":"Yunque de hierro", "reviews":5, "precio":72000, "imagen":"https://ep01.epimg.net/verne/imagenes/2015/07/31/articulo/1438353048_228377_1438621069_sumario_normal.jpg", "stock":10}, {"_id":"2", "nombre":"Tornado Kit", "descripcion":"Tornado Kit", "reviews":2, "precio":72000, "imagen":"https://ep01.epimg.net/verne/imagenes/2015/07/31/articulo/1438353048_228377_1438621011_sumario_normal.jpg", "stock":10}, {"_id":"3", "nombre":"Imán", "descripcion":"Imán", "reviews":12, "precio":20000, "imagen":"https://ep01.epimg.net/verne/imagenes/2015/07/31/articulo/1438353048_228377_1438621036_sumario_normal.jpg", "stock":10}, {"_id":"4", "nombre":"Somníferos en pastillas", "descripcion":"Somníferos en pastillas", "reviews":7, "precio":15000, "imagen":"https://pbs.twimg.com/media/CROpULmWUAAowUu.png", "stock":10}]';
  const params = useParams();
  const { id } = params;
  const [ articulo, setArticulo ] = useState({});
  const handleClick = () => {
    alert("Producto agregado al carrito")
  }
  useEffect( () => {
    const consultarApi = async () =>{
        try {
            // const respuesta = await fetch(`${import.meta.env.VITE_BACKEND_URL}/${id}`);
            // const resultado = await respuesta.json();

            //estas 7 linea solo es temporal mientras se tiene una consulta a alguin lugar que retorne un json, ahi se borra y se descomentan las dos anteriores
            const resultado = JSON.parse(jsonArticulos);
            let resultado2 = {};
            for (let i = 0; i< resultado.length; i++) {
                if (resultado[i]._id === id) {
                    resultado2 = resultado[i];
                }
            }
            setArticulo(resultado2); //aca se quita el "2" cuando se ajuste al fetch real y se borren las 7 lineas anteriores
        } catch (error) {
            console.log("Error: " + error.message);
        }
    };
    consultarApi();
  },[]);
  const {_id, nombre, precio, descripcion, reviews, stock, imagen } = articulo;
  return (
    <>
        {_id
            ?
                <div className='col-12 my-3'>
                    <div className='card p-3 rounded'>
                        <img layout='responsive' width="100" height="220" className='card-img-top mx-auto' src={`${imagen}`} alt={`${nombre}`}></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto">
                                {nombre}
                            </h5>
                            <h6>
                                {descripcion}
                            </h6>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> {reviews} reviews</span>
                                <p className='stock'>{stock} ítems disponibles</p>
                            </div>
                            <p className='card-text'>${precio}</p>
                            <button onClick={handleClick} id="view_btn" className='btn btn-block'>
                                Agregar
                            </button>
                            <Link
                                to="/ListaArticulos"
                            >
                                Regresar
                            </Link>
                        </div>
                    </div>
                </div>
            :
                <p>
                    No hay informacion del articulo, intente nuevamente
                </p>

        }
    </>
  )
}

export default DetalleArticulo