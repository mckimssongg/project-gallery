import React from 'react'
import { Link } from 'react-router-dom';
import './login.css'

function RegisterForm() {
    const [error, setError] = React.useState({
        state: false,
        message: ''
    });
    const [data, setData] = React.useState({
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    let dataUser
    const sendData = async (e) => {
        e.preventDefault();
        const DATA = await fetch ('http://127.0.0.1:8000/api/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(res => res.json())
        if ( ! DATA.status) {
            setError({
                state: true,
                message: 'Invalid Credentials'
            })
        }else{ 
            setError({
                state: false,
                message: 'account created!!!! '
            })
        }

    }
    return (
        <div className="vh form-bg d-flex flex-column align-items-center " >
            <h3 className="title text-center m-4">User Registration</h3>
            {error.state && <p style={{color:"red"}}>{error.message}</p>}
            {!error.state && <p style={{color:"green"}}>{error.message}</p>}
                <form method='POST' onSubmit={sendData} className="form-horizontal d-flex flex-column " style={{ width: "80%", maxWidth: "600px",}}>
                    <div className="form-group m-2 " >
                        <label>User Name*</label>
                        <input className="form-control" type="text" name='username' onChange={handleChange}/>
                    </div>
                    <div className="form-group m-2 " >
                        <label>First name*</label>
                        <input className="form-control" type="text" name='first_name' onChange={handleChange}/>
                    </div>
                    <div className="form-group m-2 " >
                        <label>Last Name*</label>
                        <input className="form-control" type="text" name='last_name' onChange={handleChange}/>
                    </div>
                    <div className="form-group m-2" >
                        <label>Email ID*</label>
                        <input className="form-control" type="email" name='email' onChange={handleChange}/>
                    </div>
                    <div className="form-group m-2">
                        <label>Password*</label>
                        <input className="form-control" type="password" name='password' onChange={handleChange}/>
                    </div>
                    <div className="form-group m-2">
                        <label>Confirm Password*</label>
                        <input className="form-control" type="password" name='password_confirmation'onChange={handleChange}/>
                    </div>
                    <button className="btn btn-primary m-3 " >Sign Up</button>
                </form>
            <p>Do you already have an account?<Link to="/Login"> Log in</Link></p>
        </div>
    )
}

export default RegisterForm