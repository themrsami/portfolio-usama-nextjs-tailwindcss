import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { BiMoon, BiSun } from 'react-icons/bi';
import { useToast } from "@/components/ui/use-toast";

const Toggletheme = () => {
  const { isToggled, handleToggle } = useContext(ThemeContext);
  const { toast } = useToast();

  const toggleTheme = () => {
    handleToggle();
    toast({
      title: `Switched to ${isToggled ? "light" : "dark"} mode`,
    });
  };

  return (
    <div>
      <button className='flex justify-center items-center' onClick={toggleTheme}>
        {isToggled ? (
          <BiSun className='text-4xl text-black bg-yellow-500 p-2 rounded-full' />
        ) : (
          <BiMoon className='text-4xl text-white bg-black p-2 rounded-full' />
        )}
      </button>
    </div>
  );
};

export default Toggletheme;
