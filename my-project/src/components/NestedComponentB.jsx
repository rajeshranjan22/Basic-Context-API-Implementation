import React from 'react';
import { useTheme } from '../context/ThemeContext';

const NestedComponentB = () => {
    const { theme } = useTheme();

    return (
        <div
            className={`mt-4 p-4 rounded ${theme === "light" ? "bg-white" : "bg-black text-white"
                }`}
        >
            <h3>NestedComponentB - Theme is "{theme}"</h3>
        </div>
    );
};

export default NestedComponentB;
