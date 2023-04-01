import styled from "styled-components";

const primaryColor = '#5f25a4';
const secondaryColor = '#81559B';


const Button = styled.button`
  padding: 12px 24px;
  font-size: 1rem;
  color: white;
  border-radius: 5px;
  border: none;
  min-width: 130px;
  width: auto;
  cursor: pointer;
  display: block;
  margin-bottom: 15px;
`

export const PrimaryButton = styled(Button)`
  background-color: ${primaryColor};

`

export const SecondaryButton = styled(Button)`
  background-color: ${secondaryColor};
`;

export const TertiaryButton = styled(Button)`
  color: ${secondaryColor};
  border: solid 2px ${secondaryColor};
`;



