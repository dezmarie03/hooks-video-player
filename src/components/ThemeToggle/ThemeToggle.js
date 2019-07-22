import React from 'react';

import StyledThemeToggle from '../../theme/ThemeToggle.styles';

const ThemeToggle = ({
  darkMode,
  darkModeCallback,
}) => {
  return (
    <StyledThemeToggle>
      <span>Dark theme:</span>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={darkModeCallback} />
        <span className="slider round" />
      </label>
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
