import React from 'react'
import '../pages/login-style.css';

function Login(){
    return(
        <div className="Login_main">
            <div className="Info">
                Логин
                <div className="Input_blok">
                    <input className="Input"></input>
                </div>
            </div>
            <div className="Info">
                Пароль
                <div className="Input_blok">
                    <input className="Input"></input>
                </div>
             </div>
             <div className="Info">
                Телефон
                <div className="Input_blok">
                    <input className="Input"></input>
                </div>
             </div>
            <div className="Buttons">
                <button className="Button">
                    Войти
                </button>
                <button className="Button">
                    Зарегистрироваться
                </button>
            </div>
        </div>

        
    )
}

export default Login;