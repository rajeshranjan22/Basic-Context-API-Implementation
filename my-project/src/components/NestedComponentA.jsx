import React from 'react';
import { useTheme } from '../context/ThemeContext';
import NestedComponentB from './NestedComponentB';

const NestedComponentA = () => {
    const { theme } = useTheme();

    return (
        <div
            className={`mt-6 p-4 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"
                }`}
        >
            <h2 className="text-xl mb-2">NestedComponentA</h2>
            <NestedComponentB />
        </div>
    );
};

export default NestedComponentA;
