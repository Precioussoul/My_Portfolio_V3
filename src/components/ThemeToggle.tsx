'use client'
import {useState, useEffect} from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');
  
    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-8 rounded-full flex p-1  duration-200 overflow-hidden ease-in-out outline-none  ${
        theme === 'light' ? 'bg-gray-200 items-center justify-start border-2 border-blue-600' : 'bg-gray-800 items-center justify-end border-none'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div
        className={`w-6 h-6 rounded-full duration-200 ease-in-out ${
          theme === 'dark' ? ' bg-white' : ' bg-white'
        } flex items-center justify-center `}
      >
        {theme === 'dark' ? (
          <FaMoon className="w-4 h-4 text-blue-600" />
        ) : (
          <FaSun className="w-4 h-4 text-yellow-500" />
        )}
      </div>
    </button>
    );
  };
  
  export default ThemeToggle;