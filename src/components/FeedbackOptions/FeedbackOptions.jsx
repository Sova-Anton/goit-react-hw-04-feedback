import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, handleButton }) {
  return (
    <>
      {Object.keys(options).map(item => {
        return (
          <Button key={item} type="button" onClick={() => handleButton(item)}>
            {item}
          </Button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  handleButton: PropTypes.func.isRequired,
};
