'use client';
import React from 'react'
import { useContext, useEffect } from 'react';
import { ThemeContext } from '@/app/_components/ThemeContext'; 
import Image from 'next/image';
import { gsap } from 'gsap';
import { BiSolidBusiness } from "react-icons/bi";
import { BiLock } from "react-icons/bi";
import { BiPurchaseTag } from "react-icons/bi";
import { BiCodeCurly } from "react-icons/bi";

const Services = () => {
  const { isToggled } = useContext(ThemeContext);
  const alltext = isToggled ? 'text-white' : 'text-black';
  const headinglinebg = isToggled ? 'bg-white' : 'bg-black';
  const gridsbackground = isToggled ? 'bg-gray-800' : 'bg-gray-100';
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
      <section className={`py-12 md:py-24 xl:pb-64 ${alltext} mb-12 mt-[-20px]`}>
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-20 max-w-5xl animatex">
            <h1 className="relative text-6xl sm:text-9xl xl:text-11xl  font-semibold font-heading">
              <span className="mr-3">Modernizing, Your, Digital</span>
              <span className="relative inline-block">
                <span className="relative z-10">Journey</span>
                <span className={`absolute -bottom-2 left-0 h-2.5 w-full ${headinglinebg} rounded-full`}></span>
              </span>
            </h1>
          </div>
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/2 xl:w-1/3 p-3">
              <div className={`flex flex-col h-full justify-center p-10 ${gridsbackground} rounded-[50px] animatex`}>
                <div className="flex flex-wrap items-center -m-3 mb-5">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                      <BiSolidBusiness className='text-4xl text-black'/>
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">Business Websites</h4>
                  </div>
                </div>
                <p className=" font-medium tracking-tight max-w-sm">I design professional, user-friendly websites tailored to your business needs, helping you stand out in the digital world and connect with your target audience.</p>
              </div>
            </div>
            <div className="relative xl:top-20 w-full md:w-1/2 xl:w-1/3 p-3">
              <div className={`mb-6 p-10 ${gridsbackground} rounded-[50px] animatey`}>
                <div className="flex flex-wrap items-center -m-3 mb-5">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                      <BiLock className='text-4xl text-black'/>
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">Websites with Authentications</h4>
                  </div>
                </div>
                <p className=" font-medium tracking-tight max-w-sm">I provide secure, robust websites with authentication systems, ensuring your data and user information is protected while offering a seamless user experience.</p>
              </div>
              <div className={`p-10 ${gridsbackground} rounded-[50px] animatey`}>
                <div className="flex flex-wrap items-center -m-3 mb-5">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                      <BiPurchaseTag className='text-4xl text-black'/>
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">E-commerce Websites</h4>
                  </div>
                </div>
                <p className=" font-medium tracking-tight max-w-sm">I create dynamic, easy-to-navigate e-commerce platforms that drive sales, enhance customer engagement, and boost your online retail business.</p>
              </div>
            </div>
            <div className="relative xl:top-40 w-full xl:w-1/3 p-3">
            <div className={`flex flex-col h-full justify-center p-10 ${gridsbackground} rounded-[50px] animatex`}>
                <div className="flex flex-wrap items-center -m-3 mb-5">
                  <div className="w-auto p-3">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full">
                      <BiCodeCurly className='text-4xl text-black'/>
                    </div>
                  </div>
                  <div className="flex-1 p-3">
                    <h4 className="text-4xl font-medium tracking-tight font-heading max-w-xs">Custom Websites</h4>
                  </div>
                </div>
                <p className=" font-medium tracking-tight max-w-sm">I offer bespoke web solutions, crafting unique websites from scratch that are tailored to your specific requirements, ensuring a digital presence as unique as your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Services