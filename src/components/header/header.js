import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <>
            <div className="Up_string">
                <div className="Logo">
                                EasyEnglish
                </div>
                <a className="Authorisation" href="/login">
                    Авторизация/Регистрация
                </a>
            
            </div>
           
            <div className="Header">
                <div className="Container">
                    <div className="Header_inner">
                        <nav className="Nav">
                            <Link className="Nav_link" to="/">Главная</Link>
                            <a className="Nav_link" href="/levels">Уровни</a>
                            <a className="Nav_link" href="/about">О курсах</a>
                            <a className="Nav_link" href="/teachers">Преподаватели</a>
                            <a className="Nav_link" href="/contacts">Контакты</a>
                        </nav>

                    </div>

                </div>
            </div>
        </>
    )
}
