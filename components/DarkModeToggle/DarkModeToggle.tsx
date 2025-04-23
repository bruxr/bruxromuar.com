import Image from 'next/image';
import classnames from 'classnames';
import { useEffect, useState } from 'react';

import darkModeIcon from '../../assets/dark_mode.svg';
import lightModeIcon from '../../assets/light_mode.svg';

function DarkModeToggle(): React.ReactElement {
  const [darkMode, setDarkMode] = useState<boolean | undefined>();

  // Enable dark mode if we detect dark mode in OS or stored in localStorage
  useEffect(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      setDarkMode(localStorage.getItem('theme') === 'dark');
    } else if (typeof window !== 'undefined') {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Update doc element with current dark mode state
  useEffect(() => {
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
      onClick={() => {
        setDarkMode(!darkMode);
        localStorage.setItem('theme', darkMode ? 'light' : 'dark');
      }}
    >
      <Image
        src={darkMode ? lightModeIcon : darkModeIcon}
        alt={darkMode ? 'Light mode' : 'Dark mode'}
      />
    </button>
  );
}

export default DarkModeToggle;
