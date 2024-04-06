import React, { createContext, useState } from 'react';
import './App.css';
import Text from './Text/Text';


export const ThemeContext = createContext<string | null>(null);

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const color = theme === 'dark' ? '#000' : '#FFF'

  return (
    <ThemeContext.Provider value={theme}>

      <div className="App" style={{ backgroundColor: color, height: '100vh' }}>
        {/* <h1>  App </h1>         */}
        <button onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>Cambia  Tema</button>
        <Text></Text>

      </div>


    </ThemeContext.Provider>
  );
}

export default App;
