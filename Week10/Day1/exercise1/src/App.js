import React from "react";
import "./App.css";
import { ThemeProvider} from "./components/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;