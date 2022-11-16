import React from "react"
import { Helmet } from "react-helmet"

//codigo para volver los titulos dinamicos de una pagina en la pestaña del navegador:
//se usara esta funcion en home.js (dependiendo de la pagina que escojas)
const MetaData= ({title}) =>{
    return(
        <Helmet>
            <title>{`${title} - Black Friday!`}</title>
        </Helmet>
    )
}

export default MetaData