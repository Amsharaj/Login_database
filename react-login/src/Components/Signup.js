import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate ,Link} from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history=useNavigate()
    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup", {
                email, password
            })
                .then(res => {
                    if (res.data === "exist") {
                        alert("user alredy exsist")
                        history('/home',{state:{id:email}})
                    }
                    else if (res.data === "nonexist") {
                        alert("new user added")
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
            <h1>Signup Page</h1>
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
            <Link to='/'>Login</Link>
        </div>
    )
}
