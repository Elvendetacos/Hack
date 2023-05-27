import {useContext, useImperativeHandle, useState} from "react";
import '../assets/styles/formStyles.css'

export default function Register() {

    let label1 = "Username";
    let label2 = "Passoword";
    const [user, setuser] = useState({
        email: "",
        lastName: "",
        name: "",
        password: "",
        phone: ""
    })

    const handleChange = (e) => {
        setuser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }



    return (
        <>
            <div className="backgroundColor">
                <div className="box-img-form"></div>
                <div className="form-box">
                    <div className="form-title"><h2>Register</h2></div>
                    <div>
                        <form>
                            <label htmlFor="email">Nombre Completo</label>
                            <input className="input" onChange={handleChange} name="email" type="email" id="email" htmlFor="email" required></input>
                            <label htmlFor="email">Email</label>
                            <input className="input" onChange={handleChange} name="email" type="email" id="email" htmlFor="email" required></input>
                            <label htmlFor="password">Contraseña</label>
                            <input className="input" onChange={handleChange} name="password" type="password" id="password" htmlFor="password" required></input>
                            <label htmlFor="email">Descripcion</label>
                            <input className="input" onChange={handleChange} name="email" type="email" id="email" htmlFor="email" required></input>
                            <a>No tienes cuenta? registrate aqui</a>
                            <input className="submit" type="submit" value="Login" id="btn-form-register" required/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}