import React from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import NestedComponentA from './components/NestedComponentA';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 border rounded shadow"
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
};


function App() {
  return (
    <ThemeProvider>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Context API - Theme Toggle</h1>
        <ThemeToggleButton />
        <NestedComponentA />
      </div>
    </ThemeProvider>

  )
}

export default App
