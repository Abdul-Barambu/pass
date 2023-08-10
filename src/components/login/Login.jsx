import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/images/logo.png'
import { AiOutlineEye } from 'react-icons/ai'
import { AiOutlineEyeInvisible } from 'react-icons/ai'

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false)

  const handleVisible = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div className="login-container">
        <form action="">
          <div className="form-info">
            <div className="img-text">
              <img src={Logo} alt="img-logo" className='img-login-logo' />
              <p className="wel-text">Welcome</p>
            </div>
            <div className="inputs">
              <div class="input-container">
                <input type="text" className="input" value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <label className="label">Username</label>
              </div>
              <div className="input-container">
                <input type={visible ? "text" : "password"} className="input" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                /><label className="label">Password</label>
                <span className='eye-icon' onClick={handleVisible}>{visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}</span>
                
              </div>
            </div>

            <div className="btn-login">
              <button className="login-btn">LOGIN</button>
            </div>
            <p className="forgot-password">Forgot Password?</p>
            <p className="have-account">Don't have an account? <span className='register'>Register</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
