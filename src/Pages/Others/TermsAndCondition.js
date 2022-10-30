
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ToggleThemeContext } from '../../Contexts/ThemeContext/ThemeContext';

const TermsAndCondition = () => {
    const {theme} = useContext(ToggleThemeContext);
    return (
        <div>
            <h3>Here is our Terms and conditions</h3>
            <p>Go back to Registration: <Link  className={`fw-semibold ${theme ?'text-dark' : 'text-info'}`} to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;