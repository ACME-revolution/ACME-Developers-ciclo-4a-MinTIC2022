//aquí voy a colocar los posibles estados que tiene mi app con respecto a algún recurso que quiera ver en el navegador
//Estados que vamos a crear: solicitar todos los productos,estado exitoso, estado fallido

export const ALL_PRODUCTS_REQUEST= "ALL_PRODUCTS_"
export const ALL_PRODUCTS_SUCCESS= "ALL_PRODUCTS_SUCCESS"
export const ALL_PRODUCTS_FAIL= "ALL_PRODUCTS_FAIL"
//acá como vamos a llenar un form data para crear los productos necesitamos una variable para usarla como reseteo de la información de la data en el formulario:
export const NEW_PRODUCT_REQUEST="NEW_PRODUCT_REQUEST"
export const NEW_PRODUCT_SUCCESS="NEW_PRODUCT_SUCCESS"
export const NEW_PRODUCT_RESET="NEW_PRODUCT_RESET" //esta es la que usaremos para resetear la data en el form. //tener encuenta que este rest se va a usar directamente en el componente que crea un producto nuevo
export const NEW_PRODUCT_FAIL="NEW_PRODUCT_FAIL"

//ESTA CONSTANTE SIRVE PARA LIMPIAR LOS POSIBLES ERRORES ENCONTRADOS EN LA PANTALLA DEL NAVEGADOR
export const CLEAR_ERRORS="CLEAR_ERRORS"