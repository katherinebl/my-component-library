import { blue, neutral, yellow, red, green } from './colors'
import { primaryFont } from './typography'

export const defaultTheme = {
  primaryColor: blue[400],
  primaryColorHover: blue[300],
  primaryColorActive: blue[200],
  whiteColor: neutral[100],
  blackColor: neutral[600],
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  primaryFont
}

export const darkTheme = {
  primaryColor: neutral[100],
  primaryHoverColor: neutral[200],
  primaryActiveColor: neutral[300],
  textColorOnPrimary: blue[300],
  textColor: blue[300],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300]
  }
};