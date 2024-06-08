'use client'
import React, { useContext } from 'react';
import { ThemeContext } from '@/app/_components/ThemeContext'; 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import projects from './projects';

const Portfolio = () => {
  const { isToggled } = useContext(ThemeContext);
  const headings = isToggled ? 'text-white' : 'text-black';
  const contenttext = isToggled ? 'text-white' : 'text-black';
  const cardbackground = isToggled ? 'bg-gray-900' : 'bg-white';

  return (
    <div className={`container mx-auto ${contenttext} mb-12 pb-[10%]`}>
      <h1 className={`text-4xl font-bold text-center mb-8 ${headings}`}>My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className={`shadow-lg ${cardbackground}`}>
            <CardHeader>
              <CardTitle className={headings}>{project.title}</CardTitle>
              <CardDescription className={contenttext}>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className={contenttext}>{project.details}</p>
            </CardContent>
            <CardFooter>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Project
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

