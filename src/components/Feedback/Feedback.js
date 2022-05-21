import React, { Component } from "react";
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Statistics from "components/Statistics";
import Notification from "components/Notification";


class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        let arr = Object.values(this.state);
        return arr.reduce((a, b) => a + b, 0);
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good * 100 / this.countTotalFeedback());
    };

    handleGood = () => { 
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    };

    handleNeutral = () => { 
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    };

    handleBad = () => { 
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    };


    render() {
        const { good, neutral, bad} = this.state;
        const { handleGood, handleNeutral, handleBad, countTotalFeedback, countPositiveFeedbackPercentage } = this;
        return (
            <>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions
                        handleGood={handleGood}
                        handleNeutral={handleNeutral}
                        handleBad={handleBad}
                    />
                </Section>
                {countTotalFeedback()===0
                    ? <Notification />
                    :<Section title={"Statistics"}>                    
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        percentage={countPositiveFeedbackPercentage()}
                    />
                    </Section>
                }
                
            </>
        );
    };
}

export default Feedback;