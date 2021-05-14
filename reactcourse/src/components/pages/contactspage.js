import React from 'react'
import '../pages/contacts-style.css';

function Contacts(){
    const telephone = require('../images/telephone.png').default;
    const insta = require('../images/instagram.png').default;
    const telegram = require('../images/telegram.png').default;

    return(
        <div className="MainDiv">
            <div className="Block_inf">
                <div className="Contacts">
                    Позвоните нам!
                    <div className="Item">
                        <img className="Img_telephone" src={telephone} alt={"telephone"}/>  
                        +375(33)580-18-96
                    </div>
                    <div className="Item">
                        <img className="Img_telephone" src={telephone} alt={"telephone"}/>  
                        +375(29)250-55-18
                    </div>  
                </div>
            </div>
            <div className="Block_inf">
                <div className="Contacts">
                    Мы в соцсетях!
                    <div className="Item">
                        <img className="Img_insta" src={insta} alt={"insta"}/>  
                        easy_english
                    </div>
                    <div className="Item">
                        <img className="Img_telegram" src={telegram} alt={"telegram"}/>  
                        easy_english
                    </div>  
                </div>
            </div>
            
        </div>
    )
}

export default Contacts;