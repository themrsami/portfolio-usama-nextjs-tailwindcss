'use client';
import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isToggled, setIsToggled] = useState(true);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    useEffect(() => {
        if (isToggled) {
            document.body.classList.add('dark-body');
            document.body.classList.remove('light-body');
        } else {
            document.body.classList.remove('dark-body');
            document.body.classList.add('light-body');
        }
    }, [isToggled]);
    
    return (
        <ThemeContext.Provider value={{ isToggled, handleToggle }}>
            {children}
        </ThemeContext.Provider>
    );
};
