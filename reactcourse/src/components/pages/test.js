import React from 'react'
import '../pages/test-style.css';
import TestItem from './test-item';

import ServerApi from '../../services/server_api';

class Test extends React.Component {

    server_api = new ServerApi();
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            score: 0,
            results: {}
        }
        this._handleSaveReply = this._handleSaveReply.bind(this);
    }

    componentWillMount() {
        this.server_api.get_questions(1)
            .then((data) => {
                console.log(data);
                this.setState({
                    questions: data,
                    questionsLength: data.length
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    _handleNext = () => {
        if (this.state.currentQuestion < this.state.questionsLength) {
            if (this.state.currentQuestion < this.state.questionsLength) {
                this.getResults();
            }
            this.setState({
                currentQuestion: this.state.currentQuestion + 1
            })
        }
    }

    _handlePrev = () => {
        if (this.state.currentQuestion > 0) {
            this.setState({
                currentQuestion: this.state.currentQuestion - 1
            })
        }
    }

    _handleSaveReply = (questionId, replyId) => {
        this.setState({
            results: {
                ...this.state.results,
                [questionId]: replyId
            }
        })
    }

    getResults() {
        this.server_api.get_result(1, this.state.results)
            .then((data) => {
                console.log(data);
                this.setState({ score: data })
            })
            .catch((error) => {
                console.log(error);

            })
    }

    renderResult() {
        return (
            <div>
                {this.state.score}
            </div>
        )
    }

    renderQuestion() {
        if (this.state.questions !== undefined) {
            if (this.state.currentQuestion === this.state.questionsLength) {
                return (this.renderResult());
            }
            return (
                this.state.questions.map((question, index) => {
                    if (this.state.currentQuestion === index) {
                        let id = 0;
                        if (this.state.results[question.id] !== undefined) {
                            id = this.state.results[question.id];
                        }
                        return (<TestItem currentId={id} handle={this._handleSaveReply} number={index + 1} question={question} />)
                    }
                })
            )
        }
    }

    render() {
        const arrow = require('../images/arrow.png').default;
        const arrow1 = require('../images/arrow1.png').default;

        return (
            <div className="Test_main">
                {this.renderQuestion()}
                <div className="Arrows">
                    {this.state.currentQuestion !== this.state.questionsLength ? (
                        <>
                            <img className="Img_arrow1" src={arrow1} alt={"arrow1"} onClick={this._handlePrev} />
                            <img className="Img_arrow" src={arrow} alt={"arrow"} onClick={this._handleNext} />
                        </>) : null}
                </div>
            </div>
        )
    };

}

export default Test;
