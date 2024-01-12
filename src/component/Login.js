import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import {login} from '../api/usersLogin';

export default function Login() {
  

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    
    const handleSubmitClick = ()=>{
            setError('');
            login(userName,password)
            .then(()=>{
                navigate("/")
            })
            .catch(()=>{
                setError("Unable to login");
            });


    }

    const onChangeUserName = (event)=>{
        setUserName(event.target.value);
    }

    const onChangePassword = (event)=>{
        setPassword(event.target.value);
    }
  
    return (
    <div>


    <div className='login-body'>
            <div className="login-container">
            <h2>Login</h2>

            <div className='login-error'>{error}</div>
            <div className="login-form">
            <div className="form-group">
                <label>Username:</label>
                <input type="text"  value={userName}  onChange={onChangeUserName}></input>
            </div>
            <div className="form-group">
                <label >Password:</label>
                <input type="password" value={password} onChange={onChangePassword}></input>
            </div>
            <div className="form-group">
                <button  onClick={handleSubmitClick}>Login</button>
            </div>
            </div>
         </div>
        </div>


    </div>
  )
}
