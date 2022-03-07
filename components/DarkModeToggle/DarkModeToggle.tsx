import Image from 'next/image';
import classnames from 'classnames';
import { useEffect, useState } from 'react';

import darkModeIcon from '../../assets/dark_mode.svg';
import lightModeIcon from '../../assets/light_mode.svg';

function DarkModeToggle(): React.ReactElement {
  const [darkMode, setDarkMode] = useState(false);

  // Enable dark mode if we detect dark mode in OS or stored in localStorage
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Update localStorage and <html> element with current dark mode state
  useEffect(() => {
    localStorage.theme = darkMode ? 'dark' : 'light';

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      title="Toggle dark mode"
      className={classnames('pointer', { 'opacity-70': !darkMode })}
      onClick={() => setDarkMode(!darkMode)}
    >
      <Image src={darkMode ? lightModeIcon : darkModeIcon} alt="Light Mode" />
    </button>
  );
}

export default DarkModeToggle;
