//este componente será el formulario para la creación de un producto
import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../Home/layout/metadata'
import Sidebar from '../admin/sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../actions/productAction'
import { NEW_PRODUCT_RESET } from '../constants/productConstants'
import { useNavigate } from 'react-router-dom'

const NewProduct = () => {
    const navigate= useNavigate()//lo usaremos para redireccionar a una ruta en especifica

    //lectura de la linea de abajo: con un selector invocamos el estado que creamos en store.js que se llama newProduct para este caso
    const { loading, error, success } = useSelector(state => state.newProduct);

    //creamos useState para cada campo del formulario, recuerda que esto nos permite setear valores a una variable que por default ya tendrán unos valores determinados
    const [nombre, setNombre] = useState('');//este arrancará vacio
    const [precio, setPrecio] = useState(0);//este arrancará en 0
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [inventario, setInventario] = useState(0);
    const [vendedor, setVendedor] = useState('');
    const [imagen, setImagen] = useState([]);//esté arrancara como un arreglo vacio porque pueden añadirse varias imagenes en el formulario
    const [imagenPreview, setImagenPreview] = useState([])//nuestro formulario tendrá una imagne review por lo que arrancará como un arreglo vacio porque tambien puede tener varias imagenes

    //creamos las categorías que deben aparecer como opciones en nuestro campo de categoria de este formulario, estás categorías serán las mismas que tienes en el model de products.js del back
    const categorias = [
        "Armas",
        "Trampas",
        "Arsenal",
        "Venenos"
    ]

    //como estamos llevando informacion hacia el back, despacharemos solo una informacion de error si lo existe o una información de exito si se llevo bien al back la informacion ingresada en el formulario:
    const alert = useAlert();
    const dispatch = useDispatch();//servirá para traer todos los despachos en el productAction.js


    //vamos a causar efecto en la patanlla llevando los mensjaes de posibles errores o exito que nos despacha ewProduct() en productAction.js:
    useEffect(() => {

        //si existe un error enviaremos un mensaje de error
        if (error) {
            alert.error(error);
            dispatch(clearErrors())//limpiamos errores
        }

        //si la enviada de informacion es exitosa (osea si se crea el usuario)
        if (success) {
            navigate('/admin/dashboard');//al enviar la info del formulario nos va a redirigir a está ruta
            alert.success('Product created successfully');//generamos un mensjae de exito
            dispatch({ type: NEW_PRODUCT_RESET })//acá usamos nuestro reset. Limpiamos la pantalla
        }

    }, [dispatch, alert, error, success])//indicamos en la respuesta que se lleve en un arreglo los datos de está linea de codigo

    //el formulario que vamos a crear es un submitHandler para setear todos los datos en nuestro formData y enviarsela al productAction.js
    const submitHandler = (e) => {
        e.preventDefault();

        //empezamos a llenar el formData:
        const formData = new FormData();
        //le seteamos toda la información ingresada en los campos del formulario:
        formData.set('nombre', nombre);
        formData.set('precio', precio);
        formData.set('descripcion', descripcion);
        formData.set('categoria', categoria);
        formData.set('inventario', inventario);
        formData.set('vendedor', vendedor);

        //como imagen es un arreglo entonces lo tratamos diferente:
        //entonces por cada imagen que se encuentre en ese campo en el formulario
        imagen.forEach(img => {
            formData.append('imagen', img)//agregamos esa img como imagen
        })

        //llamamos al metodo newProduct que creamos en el actions el cual para grabar ese producto en la bd nos pide la información de ese producto que la tenemos en formData
        dispatch(newProduct(formData))
    }


    //este metodo se usará para poder leer las imagenes cargadas en el campo de imagenes de este formulario:
    const onChange = e => {
        //será un lector de archivos que va a ser un arreglo y que depende de lo que venga del campo files
        const files = Array.from(e.target.files)
       
        //estos arreglos se van a setear en setImagenPreview y en serImagen
        setImagenPreview([]);
        setImagen([])

        //entonces por cada archivo que encuentre en ese target.
        files.forEach(file => {
            const reader = new FileReader();//se crea un lector de archivos

            //teniendo el lector de archivos indicamos que los archivos carguen
            reader.onload = () => {
                //1 significa que esta vacio el target.field y 2 significa que hay algo nuevo
                //entonces si cambio el estado del target.field, osea hay un nuevo archivo se realiza la siguiente tarea:
                if (reader.readyState === 2) {
                    //seteamos el oldArray que esta en las propiedas del result de la funcion FileReader()
                    //ese oldArray es como un array temporal que ese result registra cuando le cargan cosas
                    //entonces por eso le indicamos que saque el ...oldArray lo saque de reader.result:
                    setImagenPreview(oldArray => [...oldArray, reader.result])
                    //hacemos lo mismo para setImagen:
                    setImagen(oldArray => [...oldArray, reader.result])
                }
            }

            //por ultimo le pedimos al reader que genere los datos que está esperando nuestro formData de arriba para guardar. Por que es que mi base de datos no guarda imagenes sino un string(una url) y eso es lo que envia nuestro formData (los datos de este formulario a la BD)
            reader.readAsDataURL(file)
        })
    }


    return (
        <Fragment>
            <MetaData title={'Nuevo Producto'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                            {/*cuando yo le de click al boton crear en este form va a llamar a nuestra funcion submitHandler*/}
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">Nuevo Producto</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Nombre</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        value={nombre}//será el valor que va en el campo nombre del form
                                        onChange={(e) => setNombre(e.target.value)}//se tomara los cambios en ese campo(lo que escriba el user) y ese valor se va a setear en nuestro useState() para el nombre, cambiando el valor de su variable
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="price_field">Precio</label>
                                    <input
                                        type="number"
                                        id="price_field"
                                        className="form-control"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description_field">Descripción</label>
                                    <textarea className="form-control" 
                                    id="description_field" 
                                    rows="8" 
                                    value={descripcion} 
                                    onChange={(e) => setDescripcion(e.target.value)}></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="category_field">Categoria</label>
                                    <select className="form-control" 
                                    id="category_field" 
                                    value={categoria} 
                                    onChange={(e) => setCategoria(e.target.value)}>
                                        {/*vamos a recorrer nuestro arreglo de categoría ya que recuerda que como es un lista, entonces indicaremos que según la categoria seleccionada ese valor se lo pasaremos al value del campo que tenemos arriba despues del id el cual va a estár cambiando según lo que se seleccione en la lista desde el campo gracias al onChange()) */}
                                        {categorias.map(categoria => (
                                            //en key se almacenará la categoria recorrida, seteamos la categoría que se seleccione en el value y la mostraremos en esta misma etiqueta select como opcion escogida
                                            <option key={categoria} value={categoria} >{categoria}</option>
                                        ))}

                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stock_field">Inventario</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        className="form-control"
                                        value={inventario}
                                        onChange={(e) => setInventario(e.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="seller_field">Vendedor</label>
                                    <input
                                        type="text"
                                        id="seller_field"
                                        className="form-control"
                                        value={vendedor}
                                        onChange={(e) => setVendedor(e.target.value)}
                                    />
                                </div>

                                <div className='form-group'>
                                    {/*como las imagenes son cargas que se hacen en el form entonces vamos a crear una funcion especificamente para la lectura de estos archivos*/}
                                    <label>Imágenes</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            id='customFile'
                                            onChange={onChange}//onChange va a estar pendiente de escuchar la funcion onChange que creamos arriba
                                            multiple
                                        />
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Seleccione Imágenes
                                        </label>
                                    </div>

                                    {/*por cada objeto que se encuentre asuma que cada uno de ellos es una img */}{/*y visualicela pero con un tamaño más pequeño en el form */}
                                    {imagenPreview.map(img => (
                                        
                                        <img src={img} key={img} alt="Images Preview" className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={loading ? true : false}//el boton va a estar deshabilitado si loadin es igual a true porque significa que todavía esta cargando el boton cuando se le da click para crear el producto. Si es false, el boton ya no estará disable
                                >
                                    CREATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default NewProduct