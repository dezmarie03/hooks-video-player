import React from 'react';

import StyledThemeToggle from '../../theme/ThemeToggle.styles';

const ThemeToggle = ({
  darkMode,
  darkModeCallback,
}) => {
  return (
    <StyledThemeToggle>
      <span>Dark theme:</span>
      <div
        className="switch"
        tabIndex="0"
        role="checkbox"
        aria-checked={darkMode}
        onClick={darkModeCallback}
        onKeyPress={darkModeCallback}
      >
        <span className="sr-only">Use dark theme</span>
        <span className="slider round" />
      </div>
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
