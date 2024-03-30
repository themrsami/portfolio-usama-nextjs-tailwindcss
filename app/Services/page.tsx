'use client';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Carousalbusiness from "@/app/_components/Carousalbusiness"
import Carousalbrand from "@/app/_components/Carousalbrand"
import Carousalcustom from "@/app/_components/Carousalcustom"
import Carousaleducation from "@/app/_components/carousaleducation"

const Services = () => {

  return (
    <>
      <Tabs defaultValue="business-web" className="w-auto flex flex-col items-center mt-[35%] sm:mt-[10%] md:mt-[5%] lg:mt-0 justify-center">
        <TabsList className='flex flex-col sm:flex-row md:flex-row gap-2'>
          <TabsTrigger value="business-web">Business Website</TabsTrigger>
          <TabsTrigger value="brand-web">Brand Website</TabsTrigger>
          <TabsTrigger value="institute-web">Education Website</TabsTrigger>
          <TabsTrigger value="custom-web">Custom Website</TabsTrigger>
          
          <TabsTrigger value="desired-web">Desired Website</TabsTrigger>
        </TabsList>
        <div className='mt-24 sm:mt-10 md:mt-0'>
          <TabsContent value="business-web"><Carousalbusiness/></TabsContent>
          <TabsContent value="brand-web"><Carousalbrand/></TabsContent>
          <TabsContent value="institute-web"><Carousaleducation/></TabsContent>
          <TabsContent value="custom-web"><Carousalcustom/></TabsContent>
          <TabsContent value="desired-web">
            Desired Website
          </TabsContent>
        </div>
      </Tabs>

    </>
  )
}

export default Services