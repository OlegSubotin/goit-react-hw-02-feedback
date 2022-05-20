import React, { Component } from "react";
import s from './Feedback.module.css';
import Controls from "components/Controls";
import Statistics from "components/Statistics";


class Feedback extends Component{
    // state
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    items = ['good', 'neutral', 'bad'];

    prod = () => {
        console.log('first');
    }

    // manip

    // render
    render() {
        return (
            <div className={s.wrapper}>
                <p className={s.paragraph}>Please leave feedback</p>
                <ul className={s.list}>
                    <Controls
                        options={this.items}
                        onControlClick={this.prod}                             
                    />
                </ul>
                <span className={s.paragraph}>Statistics</span>
                <Statistics/>
            </div>
        );
    };
}

export default Feedback;