import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { BiMoon, BiSun } from 'react-icons/bi';

const Toggletheme = () => {
    const { isToggled, handleToggle } = useContext(ThemeContext);

    return (
        <div>
            <button className='flex justify-center items-center' onClick={handleToggle}>
                {isToggled ? <BiSun className='text-4xl text-black bg-yellow-500 p-2 rounded-full'/> : <BiMoon className='text-4xl text-white bg-black p-2 rounded-full'/>}
            </button>
        </div>
    );
};

export default Toggletheme;
