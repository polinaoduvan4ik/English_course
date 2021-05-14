import React from 'react'
import '../pages/teachers-style.css';

function Teachers(){
    const teacher1 = require('../images/teacher1.png').default;
    const teacher2 = require('../images/teacher2.png').default;
    const teacher3 = require('../images/teacher3.png').default;
    const teacher4 = require('../images/teacher4.png').default;
    const teacher5 = require('../images/teacher5.png').default;
    const teacher6 = require('../images/teacher6.png').default;

    return(
        <div className="Teachers">
            <div className="Teacher_level">
                <p>Начальный уровень</p>
                <div className="Items">
                    <div className="Teacher1">
                        <div className="Teacher1_circle">
                        </div>
                        <img className="Img_teacher1" src={teacher1} alt={"teacher1"}/>  
                    </div>
                    
                    <div className="Teacher2">
                        <div className="Teacher2_circle">
                        </div>
                        <img className="Img_teacher2" src={teacher2} alt={"teacher2"}/>  
                    </div>
                </div>
            </div>
            <div className="Teacher_level">
                <p>Средний уровень</p>
                <div className="Items">
                        <div className="Teacher3">
                            <div className="Teacher3_circle">
                            </div>
                            <img className="Img_teacher3" src={teacher3} alt={"teacher3"}/>  
                        </div>
                        
                        <div className="Teacher4">
                            <div className="Teacher4_circle">
                            </div>
                            <img className="Img_teacher4" src={teacher4} alt={"teacher4"}/>  
                        </div>
                </div>
            </div>
            <div className="Teacher_level">
                <p>Продвинутый уровень</p>
                <div className="Items">
                        <div className="Teacher5">
                            <div className="Teacher5_circle">
                            </div>
                            <img className="Img_teacher5" src={teacher5} alt={"teacher5"}/>  
                        </div>
                        
                        <div className="Teacher6">
                            <div className="Teacher6_circle">
                            </div>
                            <img className="Img_teacher6" src={teacher6} alt={"teacher6"}/>  
                        </div>
                </div>
            </div>

        </div>
    )
}

export default Teachers;