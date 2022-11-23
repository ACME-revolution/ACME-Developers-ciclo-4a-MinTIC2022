import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';


export const Login = () => {
    const ingresar = () => {
        var email, password
        email = document.getElementById("email_field").value;
        password = document.getElementById("password_field").value;

        if (email == "admin@acme.com" && password == "admin") {
            window.location = "/admin/dashboard"
        } else if (email == "user@hotmail.com" && password == "user") {
            window.location = "/"
        } else {
            alert('Datos incorrectos, intente nuevamente');
        }

    }

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
                <Link className='btn' id="view_btn" onClick={ingresar} >Iniciar sesión</Link>
            </section>
        </Fragment>
    )
}


export default Login

