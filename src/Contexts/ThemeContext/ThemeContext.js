
import React, { createContext, useState } from 'react';


export const ToggleThemeContext = createContext();

const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState(true);

    // if(!theme){
        
    //     document.body.style.backgroundColor = 'black';
    //     document.body.style.color = 'white';
    // }else{
    //     document.body.style.backgroundColor = 'white';
    //     document.body.style.color = 'black'; 
    // }

    const data = {theme, setTheme}
    return (
        <ToggleThemeContext.Provider value = {data}>
            {children}
        </ToggleThemeContext.Provider>
    );
};

export default ThemeContext;