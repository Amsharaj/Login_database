import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history=useNavigate()
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        history('/home',{state:{id:email}})
                    }
                    else if (res.data === "nonexist") {
                        alert("user have not signed up")
                    }
                })
                .catch((e) => {
                    alert("worng deatails")
                    console.log(e)
                })
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='app'>
            <h1>Login Page</h1>
            <form action='POST'>
                <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
            </form>
            <br></br>
            <p>OR</p>
            <br></br>
            <Link to='/signup'><button type="submit" className="btn btn-primary">Signup</button></Link>
        </div>
    )
}
