"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { useContext } from 'react';
import { ThemeContext } from '@/app/_components/ThemeContext'; 

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { isToggled } = useContext(ThemeContext);
  const inactivetabtext = isToggled ? 'text-white' : 'text-black';

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        `inline-flex h-9 items-center justify-center rounded-lg p-1 ${inactivetabtext}`,
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { isToggled } = useContext(ThemeContext);
  const activetabtext = isToggled ? 'data-[state=active]:text-background' : 'data-[state=active]:text-foreground';
  const activetabbg = isToggled ? 'data-[state=active]:bg-black' : 'data-[state=active]:bg-white';

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        `inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activetabbg} ${activetabtext} data-[state=active]:shadow`,
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const { isToggled } = useContext(ThemeContext);
  const contenttext = isToggled ? 'text-black' : 'text-black';

  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        `mt-2 ${contenttext} ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`,
        className
      )}
      {...props}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
