import React, { useEffect } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'

function LoginForm() {
    const[error , setError] = React.useState({
        state: false,
        message: ''
    })
    const [data, setData] = React.useState({
        username: '',
        password: '',
    })
    
    const navigation = useNavigate()
    const [sesion, setSesion] = React.useState(false);

    if (sesion) {
        return navigation('/')
    }
    
    // useEffect(() => {
    //     if (localStorage.getItem('dataSesion')) {
    //       return navigation('/')
    //     }
    //     else{
    //       setSesion(false);
    //     }
    //   })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    
    const sendData = async (e) => {
        e.preventDefault();
        const DATA = await fetch ('http://127.0.0.1:8000/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json() )
        if ( ! DATA.auth) {
            return setError({
                state: true,
                message: 'Invalid Credentials'
            })
        }else{ 
            const dataUser = JSON.stringify(DATA)
            localStorage.setItem('dataSesion', dataUser)
            setSesion(true);
            // window.location.reload()
        }

    }
    return (
        <div className="vh form-bg d-flex flex-column align-items-center " >
            <h3 className="title text-center m-4">log in now</h3>
            {error.state && <p style={{color:"red"}}>{error.message}</p>}
                <form onSubmit={sendData} className="form-horizontal d-flex flex-column " style={{ width: "80%", maxWidth: "600px",}}>
                    <div className="form-group m-2 " >
                        <label>User Name*</label>
                        <input className="form-control" type="text" name='username' onChange={handleChange}/>
                    </div>
                    <div className="form-group m-2">
                        <label>Password*</label>
                        <input className="form-control" type="password" name='password' onChange={handleChange}/>
                    </div>
                    <button className="btn btn-primary m-3 ">log In</button>
                </form>
            <p>Do not you have an account yet?
                    <Link to="/register">Sign up</Link>
            </p>
        </div>
    )
}

export default LoginForm