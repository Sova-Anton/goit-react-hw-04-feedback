import PropTypes from 'prop-types';
import { SectionTitle } from './Section.styled';
import Box from '../Box';

export default function Section({ title, children }) {
  return (
    <Box  pt={4}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
