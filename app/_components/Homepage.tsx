'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoPhp, BiLogoPython, BiLogoGithub, BiLogoLinkedin, BiLogoInstagram, BiLogoTwitch, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { ThemeContext } from './ThemeContext'; // Import the ThemeContext
import Link from 'next/link';

const Homepage = () => {
    const { isToggled } = useContext(ThemeContext); // Use the useContext hook to access isToggled
    const headingClass = isToggled ? 'homepage-heading-dark' : 'homepage-heading-light';
    const gridClass = isToggled ? 'homepage-grid-dark' : 'homepage-grid-light';
    const descriptionClass = isToggled ? 'homepage-description-dark' : 'homepage-description-light';
    const projectsbuttonsClass = isToggled ? 'w-[220px] xl:w-[300px] flex justify-center gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900' : 'w-[220px] xl:w-[300px] flex justify-center gap-3 cursor-pointer text-black font-semibold bg-gradient-to-r from-gray-300 to-white px-7 py-3 rounded-full border border-gray-500 hover:scale-105 duration-200 hover:text-gray-900 hover:border-gray-300 hover:from-gray-300 hover:to-white';
    const pythonprojectLogo = isToggled ? 'text-white' : 'text-black';
    const githubprojectLogo = isToggled ? 'text-white' : 'text-black';
    const profilephoto = isToggled ? '3.png' : '1.png';
    const socialtext = isToggled ? 'group-hover:text-white' : 'group-hover:text-black';
    const bottombuttons = isToggled ? 'bg-gray-800' : 'bg-white';
    const bottombuttontext = isToggled ? 'text-white' : 'text-black';
    const bottombuttonshover = isToggled ? 'bg-gray-300' : 'bg-black';
    const hoverring = isToggled ? 'ring-white' : 'ring-black';
    useEffect(() => {
        gsap.fromTo('.animate', 
          { y: '100%', opacity: 0 },
          { duration: 2, y: '0%', opacity: 1, ease: 'power3.out' }
        );
      }, []);

      const texts = ['Front-End Developer', 'UI/UX Designer', 'Graphic Designer', 'Video Editor' ];
      const [index, setIndex] = useState(0);
      const [subIndex, setSubIndex] = useState(0);
      const [reverse, setReverse] = useState(false);
    
      useEffect(() => {
        if (index === texts.length) {
          setIndex(0);
          return;
        }
    
        if ( subIndex === texts[index].length + 1 && 
             !reverse ) {
          setReverse(true);
          return;
        }
    
        if (subIndex === 0 && reverse) {
          setReverse(false);
          setIndex((prevIndex) => prevIndex === texts.length - 1 ? 0 : prevIndex + 1);
          return;
        }
    
        const timeout = setTimeout(() => {
          setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
        }, 150);
    
        return () => clearTimeout(timeout);
      }, [subIndex, index, reverse]);

  return (
    <section className="mb-1 w-full h-[80%]">
        <div className="container mx-auto px-4">
            <div className="w-full space-y-4 mx-auto">
                <div className={`animate p-7 flex flex-col md:flex-row lg:space-x-20 md:space-x-40 xl:space-x-60 2xl:space-x-120 ${gridClass}`}>
                    <div className='flex flex-col justify-center sm:flex-col md:flex-col lg:flex-row'>
                        <div className='max-w-[308px] max-h-[300px] md:w-[180px] md:h-[180px] lg-w-[320px] lg-h-[300px] flex mx-auto'>
                            <Image src={`/${profilephoto}`} alt="Usama Nazir" width={320} height={300} className="rounded-full flex justify-center mx-auto md:flex md:justify-center md:mx-auto mb-1" />
                        </div>
                        <div className='flex flex-col justify-start mt-4 mb-4'>
                            <h1 className="text-2xl xl:text-3xl font-bold font-mono text-center lg:ml-[-5px]">Usama Nazir</h1>
                                <p className="text-lg xl:text-xl font-mono text-center lg:ml-4">
                                    {`${texts[index].substring(0, subIndex)}${subIndex === texts[index].length ? '_' : ''}`}
                                </p>

                            <div className='flex flex-col md:flex-row md:mt-8 md:mx-auto md:gap-2 space-y-0.5 mx-auto lg:ml-4'>
                                <Link href="https://www.github.com/themrsami" target='_blank'>
                                    <button className={`group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold md:hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]`}>
                                        <BiLogoGithub className="text-3xl" />
                                        <span className={`absolute opacity-0 group-hover:opacity-100 ${socialtext} group-hover:text-[16px] font-mono group-hover:translate-x-20 md:group-hover:translate-y-10 md:group-hover:translate-x-10 lg:group-hover:translate-x-10 duration-5001`}>
                                            @themrsami
                                        </span>
                                    </button>
                                </Link>
                                <Link href="https://www.linkedin.com/in/usama-nazir" target='_blank'>
                                    <button className={`group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold md:hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]`}>
                                        <BiLogoLinkedin className="text-3xl" />
                                        <span className={`absolute opacity-0 group-hover:opacity-100 ${socialtext} group-hover:text-[16px] font-mono group-hover:translate-x-20 md:group-hover:translate-y-10 md:group-hover:translate-x-10 lg:group-hover:translate-x-10 duration-500`}>
                                            @usama-nazir
                                        </span>
                                    </button>
                                </Link>
                                <Link href="https://www.instagram.com/themrsami" target='_blank'>
                                    <button className={`group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold md:hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]`}>
                                        <BiLogoInstagram className="text-3xl" />
                                        <span className={`absolute opacity-0 group-hover:opacity-100 ${socialtext} group-hover:text-[16px] font-mono group-hover:translate-x-20 md:group-hover:translate-y-10 md:group-hover:translate-x-10 lg:group-hover:translate-x-10 duration-500`}>
                                            @themrsami
                                        </span>
                                    </button>
                                </Link>
                                <Link href="https://www.twitter.com/themrsami" target='_blank'>
                                    <button className={`group flex justify-center p-2 rounded-md drop-shadow-xl bg-gradient-to-r from-gray-800 to-black text-white font-semibold md:hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]`}>
                                        <BiLogoTwitter className="text-3xl" />
                                        <span className={`absolute opacity-0 group-hover:opacity-100 ${socialtext} group-hover:text-[16px] font-mono group-hover:translate-x-10 md:group-hover:translate-y-10 md:group-hover:translate-x-10 lg:group-hover:translate-x-10 duration-500`}>
                                            @themrsami
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        
                        </div>
                        
                    </div>
                    <div className='flex flex-col'>
                        <div className="font-mono xl:text-2xl lg:text-xl text-lg font-black flex mb-5 items-center justify-center">
                            Accomplished projects
                        </div>
                        <div className='flex flex-col space-y-4 items-center justify-center'>
                            <button className={`${projectsbuttonsClass}`}>
                                <BiLogoJavascript className='text-yellow-400 text-3xl flex items-center'/>
                                Javascript
                            </button>
                            <button className={`${projectsbuttonsClass}`}>
                                <BiLogoReact className='text-blue-400 text-3xl flex items-center'/>
                                React/Next.js
                            </button>
                            <button className={`${projectsbuttonsClass}`}>
                                <BiLogoPython className={` ${pythonprojectLogo} text-3xl flex items-center`}/>
                                Python
                            </button>
                            <button className={`${projectsbuttonsClass}`}>
                                <BiLogoGithub className={` ${githubprojectLogo} text-3xl flex items-center`}/>
                                Github
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`animate p-7 ${gridClass}`}>
                    <div className="block text-lg sm:text-2xl font-bold leading-6 text-center font-mono">Preferred Web Technologies</div>
                        <div className='flex sm:flex-row md:flex-row flex-col justify-center items-center'>
                            <BiLogoHtml5 className='text-8xl hover:scale-110 duration-200 hover:text-orange-600 hover:cursor-pointer'/>
                            <BiLogoCss3 className='text-8xl hover:scale-110 duration-200 hover:text-blue-800 hover:cursor-pointer'/>
                            <BiLogoJavascript className='text-8xl hover:scale-110 duration-200 hover:text-yellow-400 hover:cursor-pointer'/>
                            <BiLogoReact className='text-8xl hover:text-blue-400 hover:cursor-pointer animate-slow-spin'/>
                            <BiLogoPhp className='text-8xl hover:scale-110 duration-200 hover:text-purple-700 hover:cursor-pointer'/>
                            <BiLogoPython className='text-8xl hover:scale-110 duration-200 hover:cursor-pointer hover:text-gray-400'/>
                        </div>
                    </div> 
                </div>
                <div className='animate block sm:flex gap-4 mt-12 mx-auto justify-center mb-32'>
                    <button
                        className={`cursor-pointer flex justify-center ${bottombuttons} px-3 py-2 rounded-full ${bottombuttontext} tracking-wider shadow-xl hover:${bottombuttonshover} hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] hover:${hoverring}`}
                        >Portfolio
                    </button>
                    <button
                        className={`cursor-pointer flex justify-between ${bottombuttons} px-3 py-2 rounded-full ${bottombuttontext} tracking-wider shadow-xl hover:${bottombuttonshover} hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px] hover:${hoverring}`}
                        >Resume
                        <svg
                            className="w-5 h-5 animate-bounce"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            ></path>
                        </svg>
                    </button>
                    
                </div>
            </div>
        </section>
  )
}

export default Homepage