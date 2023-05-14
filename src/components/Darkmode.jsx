import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
};

export default DarkModeToggle;