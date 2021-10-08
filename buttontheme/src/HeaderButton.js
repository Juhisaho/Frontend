import React from 'react';
import App, { buttonThemes } from './App';

function HeaderButton() {
  return (
    <div>
      <button style={buttonThemes.blue}>Press me</button>
      <button style={buttonThemes.black}>Press me</button>

    </div>
  );
}

export default HeaderButton;
