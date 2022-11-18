import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


export const Login = () => {

    return (
        <Fragment>
            <h3 className='sub-headding'>Iniciar sesión</h3>
            <section className='agregar' >
                <form action="">
                    <div className='inputBox'>
                        {/*Campo para usuario*/}
                        <label htmlFor='email_field'>Usuario</label>
                        <input type="email" id="email_field" className='form-control'></input>
                        {/*Campo para contraseña*/}
                        <label htmlFor='password_field'>Contraseña</label>
                        <input type="password" id="password_field" className='form-control'></input>
                    </div>
                </form>
            </section>

            <section className='btn-add-product'>
                <Link Link to="/admin/dashboard" className='btn' id="view_btn">Iniciar sesión</Link>
            </section>
        </Fragment>
    )
}


export default Login

