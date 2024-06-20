import React from 'react';
import { useSelector } from 'react-redux';

function ThemeProvider({ children }) {
    const theme = useSelector(state => state.theme.theme); // Accessing theme correctly

    return (
        <div className={theme}>
            <div className={`bg-white text-black-900 dark:text-white-200 dark:bg-[rgb(16,23,43)] min-h-screen`}>
                {children}
            </div>
        </div>
    );
}

export default ThemeProvider;
