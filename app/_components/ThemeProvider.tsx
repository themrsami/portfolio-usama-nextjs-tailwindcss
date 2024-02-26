'use client';
import React, { useState, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import AnimatedCursor from "react-animated-cursor"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isToggled, setIsToggled] = useState(true);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    useEffect(() => {
        if (isToggled) {
            document.body.classList.add('dark-body');
            document.body.classList.remove('light-body'); // Add the 'dark' class
        } else {
            document.body.classList.remove('dark-body');
            document.body.classList.add('light-body'); // Remove the 'dark' class
        }
    }, [isToggled]);
    
    return (
        <ThemeContext.Provider value={{ isToggled, handleToggle }}>
                <AnimatedCursor
                    innerSize={8}
                    outerSize={8}
                    color='0, 255, 255'
                    outerAlpha={0.2}
                    innerScale={1}
                    outerScale={3}
                    clickables={[
                        'a',
                        'input[type="text"]',
                        'input[type="email"]',
                        'input[type="number"]',
                        'input[type="submit"]',
                        'input[type="image"]',
                        'label[for]',
                        'select',
                        'textarea',
                        'button',
                        '.link',
                        {
                            target: '.custom',
                            options: {
                                innerSize: 12,
                                outerSize: 12,
                                color: '0, 255, 255',
                                outerAlpha: 0.3,
                                innerScale: 1,
                                outerScale: 3
                            }
                        }
                    ]}
                    />
            {children}
        </ThemeContext.Provider>
    );
};
