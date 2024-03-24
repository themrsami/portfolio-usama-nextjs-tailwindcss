'use client';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Carousal from "@/app/_components/Carousal"

const Services = () => {

  return (
    <>
      <Tabs defaultValue="business-web" className="w-auto flex flex-col items-center mt-[35%] sm:mt-[10%] md:mt-[5%] lg:mt-0 justify-center">
        <TabsList className='flex flex-col sm:flex-row md:flex-row gap-2'>
          <TabsTrigger value="business-web">Business Website</TabsTrigger>
          <TabsTrigger value="brand-web">Brand Website</TabsTrigger>
          <TabsTrigger value="custom-web">Custom Website</TabsTrigger>
          <TabsTrigger value="institute-web">Institute Website</TabsTrigger>
          <TabsTrigger value="desired-web">Desired Website</TabsTrigger>
        </TabsList>
        <div className='mt-24 sm:mt-10 md:mt-0'>
          <TabsContent value="business-web"><Carousal/></TabsContent>
          <TabsContent value="brand-web">Make changes to your brand web here..</TabsContent>
          <TabsContent value="custom-web">Make changes to your custom web here.</TabsContent>
          <TabsContent value="institute-web">Make changes to your institute web here.</TabsContent>
          <TabsContent value="desired-web">Make changes to your desired web here.</TabsContent>
        </div>
      </Tabs>

    </>
  )
}

export default Services