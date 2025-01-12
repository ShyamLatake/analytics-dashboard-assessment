import React, { useEffect, useRef, useState } from "react";

const DashboardHeader: React.FC = () => {
  const [theme, setTheme] = useState<string>("browser");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Load theme from localStorage or default to "browser"
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "browser";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // Apply the selected theme to the document
  const applyTheme = (theme: string) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  // Handle theme selection
  const handleThemeChange = (selectedTheme: string) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    applyTheme(selectedTheme);
    setIsMenuOpen(false); // Close the menu after selection
  };

  // Close the popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

      <div className="relative">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
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

        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-2 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 p-4"
          >
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-3">
              Select Theme
            </h3>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer my-4">
                <input
                  type="radio"
                  name="theme"
                  value="light"
                  checked={theme === "light"}
                  onChange={() => handleThemeChange("light")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <img
                  src="src/assets/theme/light-mode.svg"
                  alt="Light Mode"
                  className="mx-2 w-6 h-6"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  Light
                </span>
              </label>
              <label className="flex items-center cursor-pointer my-4">
                <input
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={() => handleThemeChange("dark")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <img
                  src="src/assets/theme/dark-mode.svg"
                  alt="Dark Mode"
                  className="mx-2 w-6 h-6"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  Dark
                </span>
              </label>
              <label className="flex items-center cursor-pointer my-4">
                <input
                  type="radio"
                  name="theme"
                  value="browser"
                  checked={theme === "browser"}
                  onChange={() => handleThemeChange("browser")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <img
                  src="src/assets/theme/match-browser.svg"
                  alt="Match Browser"
                  className="mx-2 w-6 h-6"
                />
                <span className="ml-2 text-gray-700 dark:text-gray-300">
                  Match Browser
                </span>
              </label>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
