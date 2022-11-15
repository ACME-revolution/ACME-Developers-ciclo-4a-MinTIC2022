//aquí voy a colocar los posibles estados que tiene mi app con respecto a algún recurso que quiera ver en el navegador
//Estados que vamos a crear: solicitar todos los productos,estado exitoso, estado fallido

export const ALL_PRODUCTS_REQUEST= "ALL_PRODUCTS_"
export const ALL_PRODUCTS_SUCCESS= "ALL_PRODUCTS_SUCCESS"
export const ALL_PRODUCTS_FAIL= "ALL_PRODUCTS_FAIL"
export const PRODUCT_DETAILS_REQUEST= "PRODUCT_DETAILS_REQUEST"
export const PRODUCT_DETAILS_SUCCESS= "PRODUCT_DETAILS_SUCCESS"
export const PRODUCT_DETAILS_FAIL= "PRODUCTS_DETAILS_FAIL"

//ESTA CONSTANTE SIRVE PARA LIMPIAR LOS POSIBLES ERRORES ENCONTRADOS EN LA PANTALLA DEL NAVEGADOR
export const CLEAR_ERRORS="CLEAR_ERRORS"