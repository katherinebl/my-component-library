import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
    <TertiaryButton>Terciary</TertiaryButton>
  </React.StrictMode>
);


