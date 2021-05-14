import React from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

import '../app/app-style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from '../pages/homepage'
import Main from '../pages/levelspage'
import About from '../pages/aboutpage'
import Header from '../header/header'
import Teachers from '../pages/teacherspage'
import Contacts from '../pages/contactspage'
import Login from '../pages/loginpage'
import Test from '../pages/test'
import Footer from '../pages/footer';


const client = new W3CWebSocket('ws://127.0.0.1:4002');

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }

    componentWillMount(){
        client.onopen = () => {
            console.log('WebSocket Client Connected');
          };
          client.onmessage = (message) => {
            console.log(message);
            this.setState({
                currentUsers:message.data
            })
          };
    }

    

    render(){
        return(
            <div className="Main">
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/levels">
                            <Main/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/teachers">
                            <Teachers/>
                        </Route>
                        <Route path="/contacts">
                            <Contacts/>
                        </Route>
                        <Route path="/test">
                            <Test/>
                        </Route>
                    </Switch>
                    <Footer counter={this.state.currentUsers}/>
                </Router>
            </div>
        )
    }

    
}

export default App;
