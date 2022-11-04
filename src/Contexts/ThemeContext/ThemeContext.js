
import React, { createContext, useState } from 'react';


export const ToggleThemeContext = createContext();

const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState(true);

    const data = {theme, setTheme}
    return (
        <ToggleThemeContext.Provider value = {data}>
            {children}
        </ToggleThemeContext.Provider>
    );
};

export default ThemeContext;