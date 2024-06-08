'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useContext, useState, ReactNode } from 'react';
import { ThemeContext } from '@/app/_components/ThemeContext'; 
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(5, 'Message must be at least 5 characters.')
});

const Contact = () => {
  const { isToggled } = useContext(ThemeContext);
  const headings = isToggled ? 'text-white' : 'text-black';
  const labelText = isToggled ? 'text-gray-300' : 'text-gray-700';
  const buttonBackground = isToggled ? 'bg-white text-black hover:bg-gray-300' : 'bg-black text-white hover:bg-gray-800';
  const contenttext = isToggled ? 'text-white' : 'text-black';
  const inputTextColor = isToggled ? 'text-white' : 'text-black';
  const cardbackground = isToggled ? 'bg-gray-900' : 'bg-white';
  
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');
  const [dialogIcon, setDialogIcon] = useState<ReactNode>(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (values: { name: string, email: string, message: string }) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'your-email@gmail.com',
          subject: 'New Contact Form Message',
          text: `Name: ${values.name}\nEmail: ${values.email}\nMessage: ${values.message}`,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setDialogTitle('Success');
        setDialogMessage('Your message has been sent successfully. I will get back to you as soon as possible.');
        setDialogIcon(<FiCheckCircle className="text-green-500 w-6 h-6" />);
      } else {
        setDialogTitle('Error');
        setDialogMessage('Failed to send message. Please try again later. We apologize for the inconvenience.');
        setDialogIcon(<FiXCircle className="text-red-500 w-6 h-6" />);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setDialogTitle('Error');
      setDialogMessage('An error occurred while sending the message. Please try again later. We apologize for the inconvenience.');
      setDialogIcon(<FiXCircle className="text-red-500 w-6 h-6" />);
    } finally {
      setDialogOpen(true);
    }
  };

  return (
    <div className={`container mx-auto ${contenttext} mb-12`}>
      <h1 className={`text-4xl font-bold text-center mb-8 ${headings}`}>Contact Me</h1>
      <div className="flex justify-center">
        <Card className={`shadow-lg ${cardbackground} w-full max-w-md`}>
          <CardHeader>
            <CardTitle className={headings}>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField name="name" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelText}>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className={inputTextColor} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="email" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelText}>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} className={inputTextColor} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField name="message" control={form.control} render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelText}>Message</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Message" {...field} className={inputTextColor} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <Button type="submit" className={`w-full ${buttonBackground}`}>
                  Send Message
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="animate-fade-in">
          <AlertDialogHeader>
            {dialogIcon}
            <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
            <AlertDialogDescription>
              {dialogMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setDialogOpen(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Contact;
