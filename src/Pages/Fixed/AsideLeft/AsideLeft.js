
import React, { useContext } from 'react';
import { ToggleThemeContext } from '../../../Contexts/ThemeContext/ThemeContext';

const AsideLeft = () => {
    const {theme} = useContext(ToggleThemeContext);
    return (
        <div>
            This is left aside
        </div>
    );
};

export default AsideLeft;