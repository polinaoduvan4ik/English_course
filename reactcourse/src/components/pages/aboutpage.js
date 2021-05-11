import React from 'react'
import '../pages/about-style.css';

function About(){
    const teacher = require('../images/teacher.png').default;
    const presentation = require('../images/presentation.png').default;
    const price = require('../images/money.png').default;
    const online = require('../images/laptop.png').default;


    return(
        <div>
            <div className="Group">
                <div className="About">
                    <img className="Img_teacher" src={teacher} alt={"teacher"}/>
                    <p className="Text">лучшие преподаватели, которые найдут индивидуальный подход к каждому ученику</p>
                </div>
                <div className="About">
                    <img className="Img_presentation" src={presentation} alt={"presentation"}/>
                    <p className="Text">интересные интерактивные уроки</p>
                </div>
            </div>
            <div className="Group">
                <div className="About">
                    <img className="Img_price" src={price} alt={"price"}/>
                    <p className="Text">низкие цены</p>
                </div>
                <div className="About">
                    <img className="Img_online" src={online} alt={"online"}/>
                    <p className="Text">онлайн занятия в любое удобное для вас время</p>
                </div>
            </div>
        </div>
    )
}

export default About;