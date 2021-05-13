import React from 'react'
import '../pages/levels-style.css';
import Server_api from '../../services/server_api'

class Levels extends React.Component{
    server_api = new Server_api();
    constructor(props){
        super(props)
        this.state={}
    }
componentWillMount(){
    this.server_api.get_levels().then((data)=>{
        this.setState({
            data: data
        })
        console.log(data);
    })
}

    render(){
        return(
            <div className="Main_page">
            <div className="Levels">
            <div className="Beginner">
                <p className="Level_name">
                    {this.state.data!=null?this.state.data[0].level_name:null}
                </p>
                <p className="Description">
                {this.state.data!=null?this.state.data[0].level_description:null}
                </p>
                <button className="Button">
                    Записаться
                </button>
            </div>
            <div className="Middle">
                <p className="Level_name">
                {this.state.data!=null?this.state.data[1].level_name:null}
                </p>
                <p className="Description">
                {this.state.data!=null?this.state.data[1].level_description:null}
                </p>
                <button className="Button">
                    Записаться
                </button>
            </div>
            <div className="Prof">
                <p className="Level_name">
                {this.state.data!=null?this.state.data[2].level_name:null}
                </p>
                <p className="Description">
                {this.state.data!=null?this.state.data[2].level_description:null}
                </p>
                <button className="Button">
                    Записаться
                </button>
            </div>
            </div>
            

        </div>
        )
    }
}

export default Levels;