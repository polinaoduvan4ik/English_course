import React from 'react'

import {Link} from 'react-router-dom';
import '../pages/home-style.css';

function Home(){
    return(
        <div className="Home">
        
            <div className="MainContainer">
                <div className="Container">
                    <h1 className="Course">Курсы английского <br></br> языкa</h1>
                </div>
                <div className="Container">
                    <div className="Test_button">
                        <a className="Do_test" href="/test">Пройти тест на знание языка</a>
                    </div>
                </div>
            </div>
            <div className="Container">
            <div className="Circles">
                <div className="Circle_1"></div>
                <div className="Circle_2"></div>
                <div className="Circle_3"></div>
                <div className="Circle_4"></div>
            </div>
            </div>           
        </div>
    )
}

export default Home;