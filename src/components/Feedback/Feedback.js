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
        total: 0,
        percentage: 0,
    };

    countTotalFeedback = () => {
        this.setState(prevState => {
            return {
                total: prevState.good + prevState.neutral + prevState.bad,
            }
        });
    };

    countPositiveFeedbackPercentage = () => {
        this.setState(prevState => {
            return {
               percentage: Math.round(prevState.good*100/prevState.total),
           } 
        })
    }

    handleGood = () => { 
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    handleNeutral = () => { 
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };

    handleBad = () => { 
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
    };


    render() {
        const { good, neutral, bad, total, percentage } = this.state;
        const { handleGood, handleNeutral, handleBad } = this;
        return (
            <>
                <Section title={"Please leave feedback"}>
                    <FeedbackOptions
                        handleGood={handleGood}
                        handleNeutral={handleNeutral}
                        handleBad={handleBad}
                    />
                </Section>
                {total === 0
                    ? <Notification />
                    :<Section title={"Statistics"}>                    
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        percentage={percentage}
                    />
                    </Section>
                }
                
            </>
        );
    };
}

export default Feedback;