'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoReact, BiLogoPhp, BiLogoPython, BiLogoGithub, BiLogoLinkedin, BiLogoInstagram, BiLogoTwitch, BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { ThemeContext } from './ThemeContext'; // Import the ThemeContext
import Link from 'next/link';
import Socials from './Socials';
import { CoolMode } from "@/components/magicui/cool-mode";

const Homepage = () => {
    const { isToggled } = useContext(ThemeContext); // Use the useContext hook to access isToggled
    const gridClass = isToggled ? 'homepage-grid-dark' : 'homepage-grid-light';
    const projectsbuttonsClass = isToggled ? 'w-[220px] xl:w-[300px] flex justify-center gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900' : 'w-[220px] xl:w-[300px] flex justify-center gap-3 cursor-pointer text-black font-semibold bg-gradient-to-r from-gray-300 to-white px-7 py-3 rounded-full border border-gray-500 hover:scale-105 duration-200 hover:text-gray-900 hover:border-gray-300 hover:from-gray-300 hover:to-white';
    const pythonprojectLogo = isToggled ? 'text-white' : 'text-black';
    const githubprojectLogo = isToggled ? 'text-white' : 'text-black';
    const profilephoto = isToggled ? '3.png' : '1.png';

    const texts = ['Front-End Developer', 'Mobile App Developer', 'Database Engineer', 'UI/UX Designer', 'Graphics Designer', 'Video Editor' ];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    
    useEffect(() => {
        if (index === texts.length) {
            setIndex(0);
            return;
        }

        if (subIndex === texts[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);  // Wait for 2 seconds before starting to delete
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
        }, reverse ? 50 : 50);  // Adjust speed for typing and deleting

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

  return (
    
    <section className="mb-1 w-full h-[80%]">
        <div className="container mx-auto px-4">
            <div className="w-full space-y-4 mx-auto">
                <div className={`animate p-7 flex flex-col md:flex-row md:space-x-60 lg:space-x-80 ${gridClass}`}>
                    <div className='flex flex-col justify-center sm:flex-col md:flex-col lg:flex-row'>
                        <div className='max-w-[308px] max-h-[300px] md:w-[180px] md:h-[180px] lg-w-[320px] lg-h-[300px] flex mx-auto'>
                            <Image src={`/${profilephoto}`} alt="Usama Nazir" width={320} height={300} className="rounded-full flex justify-center mx-auto md:flex md:justify-center md:mx-auto mb-1" />
                        </div>
                        <div className='flex flex-col justify-start mt-4 mb-4 px-8'>
                            <h1 className="text-2xl xl:text-3xl font-bold font-mono text-center lg:ml-[-5px]">Usama Nazir</h1>
                                <p className="text-lg xl:text-xl font-mono text-center lg:ml-4">
                                    {`${texts[index].substring(0, subIndex)}${subIndex === texts[index].length ? '_' : '_'}`}
                                </p>
                            <Socials />
                        </div>
                        
                    </div>
                    <div className='flex flex-col'>
                        <div className="font-mono xl:text-2xl lg:text-xl text-lg font-black flex mb-5 items-center justify-center">
                            Accomplished projects
                        </div>
                        <div className='flex flex-col space-y-4 items-center justify-center'>
                            <Link href="/Projects/Javascript">
                                <button className={`${projectsbuttonsClass}`}>
                                    <BiLogoJavascript className='text-yellow-400 text-3xl flex items-center'/>
                                    Javascript
                                </button>
                            </Link>
                            <Link href="/Projects/React">
                                <button className={`${projectsbuttonsClass}`}>
                                    <BiLogoReact className='text-blue-400 text-3xl flex items-center'/>
                                    React/Next.js
                                </button>
                            </Link>
                            <Link href="/Projects/Python">
                                <button className={`${projectsbuttonsClass}`}>
                                    <BiLogoPython className={` ${pythonprojectLogo} text-3xl flex items-center`}/>
                                    Python
                                </button>
                            </Link>
                            <Link href="https://www.github.com/themrsami" target='_blank'>
                                <button className={`${projectsbuttonsClass}`}>
                                    <BiLogoGithub className={` ${githubprojectLogo} text-3xl flex items-center`}/>
                                    Github
                                </button>
                            </Link>
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
                <div className='animate flex flex-col sm:flex-row gap-4 mt-12 mx-auto justify-center items-center mb-32'>
                    <CoolMode>
                        <Link className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 whitespace-pre md:flex group relative gap-1 overflow-hidden rounded-full text-base font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2" href="/Portfolio">Portfolio</Link>
                    </CoolMode>
                    <CoolMode>
                        <Link className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-8 whitespace-pre md:flex group relative gap-1 overflow-hidden rounded-full text-base font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2" href="/Resume/UsamaNazir">Resume<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-Width="2" stroke-Linecap="round" stroke-Linejoin="round" className="lucide lucide-chevron-right h-4 w-4 translate-x-0 transform transition-all duration-300 ease-out group-hover:translate-x-1"><path d="m9 18 6-6-6-6"></path></svg></Link>
                    </CoolMode>
                </div>
            </div>
        </section>
  )
}

export default Homepage