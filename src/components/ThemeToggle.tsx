import React, { useState, useEffect } from "react";
import SunIcon from "./icons/Sun";
import MoonIcon from "./icons/Moon";
import SystemIcon from "./icons/System";

const THEMES = ["Light", "Dark", "System"];

const ThemeToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const themePreference = getThemePreference();

    updateIcon(themePreference);
    document.documentElement.classList[
      themePreference === "dark" ? "add" : "remove"
    ]("dark");

    const remove = () => {
      matchMedia.removeEventListener("change", updateTheme);
    };

    matchMedia.addEventListener("change", updateTheme);

    return remove;
  }, []);

  const getThemePreference = () => {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("theme") ?? "system";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const updateIcon = (themePreference: string) => {
    document.querySelectorAll(".theme-toggle-icon").forEach((element: any) => {
      element.style.transform =
        element.id === themePreference ? "scale(1)" : "scale(0)";
    });
  };

  const updateTheme = () => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const themePreference = getThemePreference();
    const isDark =
      themePreference === "dark" ||
      (themePreference === "system" && matchMedia.matches);

    updateIcon(themePreference);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  };

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleMenuItemClick = (theme: string) => {
    localStorage.setItem("theme", theme.toLowerCase().trim());
    updateTheme();
    setIsMenuOpen(false);
  };

  return (
    <div className="relative ml-1 mr-1">
      <button
        id="theme-toggle-btn"
        className="appearance-none border-none flex hover:scale-125 transition"
        onClick={handleToggleMenu}
      >
        <span className="sr-only">Elige el tema</span>
        <SunIcon
          id="light"
          className="theme-toggle-icon size-5 transition-all"
        />
        <MoonIcon
          id="dark"
          className="theme-toggle-icon absolute size-5 transition-all"
        />
        <SystemIcon
          id="system"
          className="theme-toggle-icon absolute size-5 transition-all"
        />
      </button>
      <div
        id="themes-menu"
        className={`absolute ${
          isMenuOpen ? "scale-80" : "hidden"
        } top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md`}
      >
        <ul>
          {THEMES.map((theme, index) => (
            <li
              key={index}
              className="themes-menu-option px-2 py-1.5 cursor-default hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
              onClick={() => handleMenuItemClick(theme)}
            >
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeToggle;
