import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  outline: none;

  text-transform: capitalize;
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[3]}px;

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.middle};
  color: ${p => p.theme.colors.white};
  padding: 10px 15px;
  background-color: ${p => p.theme.colors.primary};

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  };

  &:not(:last-child) {
margin-right: ${p => p.theme.space[4]}px ;
  };

  &:first-of-type {
    background-color: green;
  };

  &:last-of-type {
    background-color: #ff5555;
  };

`;
