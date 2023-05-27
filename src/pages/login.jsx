import {useContext, useImperativeHandle, useState} from "react";
import '../assets/styles/formStyles.css'
import {Link, useNavigate} from "react-router-dom";

export default function BodyLogin() {
    let label1 = "Username";
    let label2 = "Passoword";
    const [user, setuser] = useState({
        email: "",
        lastName: "",
        name: "",
        password: "",
        phone: ""
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setuser({...user,[e.target.name]: e.target.value})
        console.log(user)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        navigate("/index")
    }



    return (
        <>
        <div className="backgroundColor">
            <div className="box-img-form"></div>
                <div className="form-box">
                    <div className="form-title"><h2>Log In</h2></div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="email">Email</label>
                            <input className="input" onChange={handleChange} name="email" type="email" id="email" htmlFor="email" required></input>
                            <label htmlFor="password">Contraseña</label>
                            <input className="input" onChange={handleChange} name="password" type="password" id="password" htmlFor="password" required></input>
                            <Link to={'/register'}>No tienes cuenta? registrate aqui</Link>
                            <input className="submit" type="submit" value="Login" id="btn-form-register" required/>
                        </form>
                    </div>
                </div>
        </div>
        </>
    )
}

