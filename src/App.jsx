import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/ui/Main";
import Navbar from "./components/ui/Navbar";
import Sidebar from "./components/ui/Sidebar";

export default function App() {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedPrefs = window.localStorage.getItem("theme-dark");
      if (typeof storedPrefs === "string") {
        return storedPrefs === "true";
      }
    }
    return false;
  };

  const [searchShow, setSearchShow] = useState(false);
  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [sidebarHide, setSidebarHide] = useState(false);

  const handleSidebar = () => setSidebarHide((h) => !h);
  const handleSearch = () => setSearchShow((s) => !s);
  const handleMode = () => setDarkMode((v) => !v);
  // Responsive on mount
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSidebarHide(true);
      else setSidebarHide(false);
      if (window.innerWidth > 576) {
        setSearchShow(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Body dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      window.localStorage.setItem("theme-dark", "true");
    } else {
      document.body.classList.remove("dark");
      window.localStorage.setItem("theme-dark", "false");
    }
  }, [darkMode]);

  return (
    <>
      <Sidebar hide={sidebarHide} />
      <section id="content">
        <Navbar
          handleSidebar={handleSidebar}
          searchShowInput={handleSearch}
          show={searchShow}
          mode={handleMode}
          currentMode={darkMode}
        />
        <Main/>
      </section>
    </>
  );
}
