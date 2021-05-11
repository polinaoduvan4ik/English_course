import React from 'react';

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




class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
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
                </Router>
            </div>
        )
    }

    
}

export default App;
