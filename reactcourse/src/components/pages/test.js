import React from 'react'
import '../pages/test-style.css';

function Test(){
    const arrow = require('../images/arrow.png').default;
    const arrow1 = require('../images/arrow1.png').default;

    return(
        <div className="Test_main">
            <div className="Test_info">
                <div className="Test_question">
                    1.
                </div>
                <div className="Test_reply">

                </div>
                <div className="Test_reply">

                </div>
                <div className="Test_reply">

                </div>
            </div>
            <div className="Arrows">
                <img className="Img_arrow1" src={arrow1} alt={"arrow1"}/>
                <img className="Img_arrow" src={arrow} alt={"arrow"}/>
            </div>
        </div>
    )
}

export default Test;