import styled from "styled-components";
import { defaultTheme, typeScale } from '../utils'

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraph};
  color: white;
  border-radius: 5px;
  border: none;
  min-width: 150px;
  width: auto;
  cursor: pointer;
  display: block;
  margin: 15px;

  &:hover {
    transition: background-color 0.2s, color 0.2s, filter 0.2s;
  }

  &:focus,
  &:active {
    outline: 3px solid ${defaultTheme.primaryColorHover};
    outline-offset: 2px;
  }

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    pointer-events: none;
  }
`

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};

  &:hover {
    filter: drop-shadow(0 2px 5px ${defaultTheme.primaryColor});
  }
`

export const SecondaryButton = styled(Button)`
  border: solid 2px ${defaultTheme.primaryColorActive};
  color: ${defaultTheme.primaryColorActive};
  background-color: ${defaultTheme.whiteColor} ;
  &:hover {
    background-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.whiteColor};
  }
  &:disabled {
    border-color: ${defaultTheme.disabled};
  }
`;

export const TertiaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColorHover};

  &:hover {
    filter: drop-shadow(0 2px 5px ${defaultTheme.primaryColorHover});
  }
`;



