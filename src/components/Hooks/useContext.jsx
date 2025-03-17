// import React, { useContext } from 'react';
import ThemeProvider from '../context/ThemeContextProvider';
import ThemeSwitcher from '../context/ThemeSwitcher';
// useContext:Accesses context values in functional components.

// const ThemeContext = React.createContext('light');

// function Buttonusecontext() {
// //   const theme = useContext(ThemeContext);
  
//   return <button className={theme}>Themed Button</button>;
// }
const ButtonUseContext = () => (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
  
export default ButtonUseContext;