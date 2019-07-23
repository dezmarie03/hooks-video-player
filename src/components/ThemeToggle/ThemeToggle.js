import React from 'react';

import StyledThemeToggle from '../../theme/ThemeToggle.styles';

const ThemeToggle = ({
  darkMode,
  darkModeCallback,
}) => {
  return (
    <StyledThemeToggle>
      <span>Dark theme:</span>
      <label htmlFor="theme_switch" className="switch" tabIndex="0">
        <span className="sr-only">Use dark theme</span>
        <input name="theme_switch" type="checkbox" checked={darkMode} onChange={darkModeCallback} />
        <span className="slider round" />
      </label>
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
