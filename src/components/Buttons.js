import styled from "styled-components";
import { defaultTheme, typeScale } from '../utils'

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
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
  background-color: ${defaultTheme.primaryColor};

`

export const SecondaryButton = styled(Button)`
  border: solid 2px ${defaultTheme.primaryColorActive};
  color: ${defaultTheme.primaryColorActive};
  background: ${defaultTheme.whiteColor} ;
`;

export const TertiaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColorHover};
`;



