'use client';
import React from 'react'
import Link from 'next/link'
import { gsap } from 'gsap';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/app/_components/ThemeContext'; 

const About = () => {
  const { isToggled } = useContext(ThemeContext);
  const headings = isToggled ? 'text-white' : 'text-black';
  useEffect(() => {
    gsap.fromTo('.animatey', 
      { y: '100%', opacity: 0 },
      { duration: 2, y: '0%', opacity: 1, ease: 'power3.out' }
    );
    gsap.fromTo('.animatex', 
      { x: '100%', opacity: 0 },
      { duration: 2, x: '0%', opacity: 1, ease: 'power3.out' }
    );
  }, []);
  return (
    <>
    <div className='flex flex-wrap md:flex-row items-center w-full mx-auto justify-center gap-4 mt-4'>
        <div className="animatex mt-8 w-[320px] h-[350px]">
          <h2 className={`${headings} font-mono mb-1 text-2xl text-center font-semibold`}>Personal Details</h2>
          <div className="bg-gray-900 w-full h-full rounded-lg">
              <div className="flex p-2 gap-1">
              <div className="animate-bounce delay-1">
                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle animate-bounce delay-2">
                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle animate-bounce delay-3">
                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <div className="card__content">
              <h2 className='text-center text-2xl font-mono'>Hello I am USAMA</h2>
              <h4 className='text-center font-mono'>Front-End Developer</h4>
              <h5 className='font-mono mt-8 text-lg'>Specialities</h5>
              <div>
                <ul className='mt-2 font-mono space-y-2 ml-2'>
                  <li>I Develop Cool Websites.</li>
                  <li>I Develop User Friendly Wesbites.</li>
                  <li>I Use Latest Technologies.</li>
                  <li>I Develop SEO friendly Websites.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="animatey mt-8 w-[320px] h-[350px]">
          <h2 className={`${headings} font-mono mb-1 text-2xl text-center font-semibold`}>My Expertise</h2>
          <div className="bg-gray-900 w-full h-full rounded-lg">
              <div className="flex p-2 gap-1">
              <div className="animate-bounce delay-1">
                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle animate-bounce delay-2">
                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle animate-bounce delay-3">
                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <div className="card__content">
              <ul className='ml-4 mr-4'>
                <li className='text-lg font-mono'>HTML</li>
                <li className='text-lg font-mono'>CSS</li>
                <li className='text-lg font-mono'>JAVASCRIPT</li>
                <li className='text-lg font-mono'>React.js (CSR)</li>
                <li className='text-lg font-mono'>Next.js (SSR/CSR)</li>
                <li className='text-lg font-mono'>MySQL/MongoDB</li>
                <li className='text-lg font-mono'>UI/UX Design</li>
                <li className='text-lg font-mono'>Graphic Designing</li>
                <li className='text-lg font-mono'>Video Editing</li>
                <li className='text-lg font-mono'></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="animatex mt-8 w-[320px] h-[350px]">
          <h2 className={`${headings} font-mono mb-1 text-2xl text-center font-semibold`}>Hands on Projects</h2>
          <div className="bg-gray-900 w-full h-full rounded-lg">
              <div className="flex p-2 gap-1">
              <div className="animate-bounce delaty-1">
                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle animate-bounce delay-2">
                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle animate-bounce delay-3">
                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <div className="card__content">
              <ul className='ml-4 mr-4 flex flex-col gap-2'>
                <Link href="https://www.saeedvisuals.com"><li className='text-lg font-mono text-blue-400'> - Portfolio Website</li></Link>
                <Link href="https://carezonehomecare.vercel.app/"><li className='text-lg font-mono text-blue-400'> - Health Care Website</li></Link>
                <Link href="https://uiverse.io/profile/themrsami"><li className='text-lg font-mono text-blue-400'> - Open Source Projects</li></Link>
                <Link href="https://github.com/themrsami/Sanfoundry-MCQs-Scraper"><li className='text-lg font-mono text-blue-400'> - Sanfoundry MCQs Scraper</li></Link>
                <Link href="https://github.com/themrsami/Monkeytype-Autotyper-with-GUI"><li className='text-lg font-mono text-blue-400'> - Monkeytype Website Autotyper</li></Link>
                <Link href="https://github.com/themrsami/galaxy"><li className='text-lg font-mono text-blue-400'> - Contribution to Open Source UI Library</li></Link>                
              </ul>
            </div>
          </div>
        </div>
        <div className="animatey mb-12 mt-8 w-[850px] h-[350px]">
          <h2 className={`${headings} font-mono mb-1 text-2xl text-center font-semibold`}>Education Details</h2>
          <div className="bg-gray-900 w-full h-full rounded-lg">
              <div className="flex p-2 gap-1">
              <div className="animate-bounce delaty-1">
                <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle animate-bounce delay-2">
                <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
              </div>
              <div className="circle animate-bounce delay-3">
                <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
              </div>
            </div>
            <div className="card__content">
              <ul className='ml-4 mr-4 flex flex-col gap-2'>
                <li className='text-lg font-mono'><span className='font-bold text-blue-700'>Matriculation</span> from Govt. High School Shahdara</li>
                <li className='text-lg font-mono'><span className='font-bold text-blue-700'>Intermediate</span> from Pak Garrison Higher Secondary School Nankana</li>
                <li className='text-lg font-mono'><span className='font-bold text-blue-700'>Bachelors</span> in Physics from Comsats University (Lahore Campus)</li>
                <li className='text-lg font-mono'><span className='font-bold text-blue-700'>Certification</span> in Web & Mobile App Development from UET Lahore</li>               
              </ul>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default About