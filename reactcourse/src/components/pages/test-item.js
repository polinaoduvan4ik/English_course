import React from 'react';
import ServerApi from '../../services/server_api';

import './test-item-style.css'
class TestItem extends React.Component {

    server_api = new ServerApi();
    constructor(props) {
        super(props);
        this.state = {
            currentId:0
        }
    }

    _handleOnClick=(id)=>{
        this.setState({
            currentId:id
        })
    }

    componentWillMount(){
        this.server_api.get_replies(this.props.question.id)
        .then((data)=>{
            console.log(data);
            this.setState({
                data:data
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    renderReply(reply){
        if(reply!==undefined){
            if(reply.id===this.props.currentId){
                return(
                    <div  className="Test_reply active_reply" id = {reply.id}>
                        {reply.reply}
                    </div> 
                )
            }else{
                return(
                    <div onClick={()=>{
                        this.props.handle(this.props.question.id,reply.id)
                        this._handleOnClick(reply.id)
                        }} className="Test_reply" id = {reply.id}>
                        {reply.reply}
                    </div> 
                )
            }
           
        }
    }

    renderBody(){
        let {question,number} = this.props;
        if(this.state.data!==undefined){
            return (
                <div className="Test_info">
                    <div className="Test_question">
                        {number}. {question.question}
                    </div>
                    {this.state.data.map((reply,index)=>{
                        return(this.renderReply(reply))
                    })}
                </div>
            )
        }

    }
    
    render() {
        return (
            <>
                {this.renderBody()}
            </>
        )
    };

}

export default TestItem;