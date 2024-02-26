import React from 'react';

export const ThemeContext = React.createContext({
  isToggled: false,
  handleToggle: () => {},
});
