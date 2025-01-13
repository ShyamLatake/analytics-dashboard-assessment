import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const DashboardHeader: React.FC = () => {
  // const [theme, setTheme] = useState<string>("browser");
  // const [isThemeMenuOpen, setIsThemeMenuOpen] = useState<boolean>(false);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);
  // const themeMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerMenuRef = useRef<HTMLDivElement>(null);

  // Load theme from localStorage or default to "browser"
  useEffect(() => {
    // const savedTheme = localStorage.getItem("theme") || "browser";
    // setTheme(savedTheme);
    // applyTheme(savedTheme);
  }, []);

  // const applyTheme = (theme: string) => {
  //   if (theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else if (theme === "light") {
  //     document.documentElement.classList.remove("dark");
  //   } else {
  //     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //     if (prefersDark) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   }
  // };

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // if (
      //   themeMenuRef.current &&
      //   !themeMenuRef.current.contains(event.target as Node)
      // ) {
      //   setIsThemeMenuOpen(false);
      // }

      if (
        hamburgerMenuRef.current &&
        !hamburgerMenuRef.current.contains(event.target as Node)
      ) {
        setIsHamburgerMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleMenuClose = () => {
    setIsHamburgerMenuOpen(false);
  };

  return (
    <header className="flex items-center justify-between bg-white dark:bg-gray-800 shadow p-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          MapUp EV
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Manage your data effectively
        </p>
      </div>

      {/* Theme Toggle Button */}
      {/* <div className="relative">
        <button
          onClick={() => setIsThemeMenuOpen((prev) => !prev)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <span className="text-gray-600 dark:text-gray-300">🌞</span>
          ) : theme === "dark" ? (
            <span className="text-gray-400">🌙</span>
          ) : (
            <span className="text-blue-500">🌐</span>
          )}
        </button>

        {isThemeMenuOpen && (
          <div
            ref={themeMenuRef}
            className="absolute z-40 right-2 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-4"
          >
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
              Select Theme
            </h3>
            <div className="space-y-2">
              {/* Theme Options */}
      {/*  {["light", "dark", "browser"].map((mode) => (
                <label
                  key={mode}
                  className="flex items-center cursor-pointer my-4"
                >
                  <input
                    type="radio"
                    name="theme"
                    value={mode}
                    checked={theme === mode}
                    onChange={() => {
                      setTheme(mode);
                      localStorage.setItem("theme", mode);
                      applyTheme(mode);
                      setIsThemeMenuOpen(false);
                    }}
                    className="form-radio h-4 w-4 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div> */}

      {/* Hamburger Menu */}
      <div className="relative md:hidden">
        <button
          onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
          aria-label="Open Menu"
        >
          <span className="text-gray-800 dark:text-gray-200">☰</span>
        </button>

        {isHamburgerMenuOpen && (
          <div
            ref={hamburgerMenuRef}
            className="absolute right-2 z-40 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-4"
          >
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    onClick={handleMenuClose}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/analytics"
                    className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    onClick={handleMenuClose}
                  >
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/geographic"
                    className="block text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                    onClick={handleMenuClose}
                  >
                    Geographic Insights
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
