import React from 'react'
import logo from '../../assets/image.png'
import './LoginPage.css'

function LoginPage() {
    return (
        <div className='login-container'>
            <div className="logo">
                <img src={logo} alt="gymshim" width="400px" height="200px" />
            </div>
            <div className="login-form">
                <div className="login-form-header">
                <h3>LOGIN FORM</h3>
                </div>
                <div className="login-input">
                    <div className="username">
                        <div className="username-icon">
                            <box-icon type='solid' name='user'></box-icon>
                        </div>
                        <div className="username-input">
                            <input type="text" name="username" id="username" />
                        </div>
                    </div>
                    <div className="password">
                        <div className="password-icon">
                            <box-icon type='solid' name='lock'></box-icon>
                        </div>
                        <div className="password-input">
                            <input type="password" name="password" id="password" />
                        </div>
                    </div>
                </div>
                <div className="remember">
                    <input type="checkbox" name="check" id="check" />
                    <h5>Remember me</h5>
                </div>
                <div className="forgot">
                    <p>forgot password</p>
                </div>
                <div className="login-button">
                    <button>LOG IN</button>
                </div>


            </div>
        </div>
    )
}

export default LoginPage