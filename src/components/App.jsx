import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Box from './Box';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  /*Собираем в обьект чтобы передать пропсом в компонент FeedbackOpions */
  const options = { good, neutral, bad };

  const handleButton = btnName => {
    switch (btnName) {
      case 'good':
        return setGood(prev => prev + 1);
      case 'neutral':
        return setNeutral(prev => prev + 1);
      case 'bad':
        return setBad(prev => prev + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = (good / total) * 100;
    return Number(result.toFixed(2));
  };

  const total = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <Box as="section" ml="auto" mr="auto" width="1400px" pr={3} pl={3}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} handleButton={handleButton} />
      </Section>

      <Section title={'Statistics'}>
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </Box>
  );
}

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleButton = btnName => {
//     this.setState(prevState => {
//       return { [btnName]: prevState[btnName] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((total, item) => total + item, 0);
//   };

// //   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     if (!total) {
//       return 0;
//     }
//     const result = (this.state.good / total) * 100;
//     return Number(result.toFixed(2));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     return (
//       <Box as="section" ml="auto" mr="auto" width="1400px" pr={3} pl={3}>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={this.state}
//             handleButton={this.handleButton}
//           />
//         </Section>

//         <Section title={'Statistics'}>
//           {total !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               percentage={percentage}
//             />
//           ) : (
//             <Notification message={'There is no feedback'} />
//           )}
//         </Section>
//       </Box>
//     );
//   }
// }
