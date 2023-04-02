import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons.js';
import { GlobalStyle } from './utils/Global.js';
import { ThemeProvider } from 'styled-components';
import { darkTheme, defaultTheme } from './utils/theme.js';

const App = () => {
  const [useDarkTheme, setUseDarkTheme] =  useState(false)
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <h1>Welcome to my App</h1>
      <button style={{ margin: "0 16px 24px", padding: "8px", background: "none"}} onClick={() => setUseDarkTheme(true)}>Dark Theme</button>
      <button style={{ margin: "0 16px 24px", padding: "8px", background: "none"}} onClick={() => setUseDarkTheme(false)}>Default Theme</button>
      <div style={{
        background: useDarkTheme ? defaultTheme.blackColor : darkTheme.primaryColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <PrimaryButton>Primary</PrimaryButton>
        <SecondaryButton>Secondary</SecondaryButton>
        <TertiaryButton>Terciary</TertiaryButton>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));