import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons.js';
import { GlobalStyle } from './utils/Global.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <TertiaryButton>Terciary</TertiaryButton>

    <GlobalStyle />
  </React.StrictMode>
);


