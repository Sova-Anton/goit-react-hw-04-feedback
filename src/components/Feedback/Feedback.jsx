import { Component } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButton = btnName => {
    this.setState(prevState => {
      return { [btnName]: prevState[btnName] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = (this.state.good / total) * 100;
    return Number(result.toFixed(2));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();
    return (
      <section>
            <Section title={'Please leave feedback'}>    
                <FeedbackOptions handleButton={this.handleButton} />
        </Section>
            <Section title={'Statistics'}>
              {total !== 0 ? <Statistics good={good} neutral={neutral} bad={bad} total={total} percentage={ percentage} /> : <Notification message={'There is no feedback'} />}  
            </Section>
            
      </section>
    );
  }
}
