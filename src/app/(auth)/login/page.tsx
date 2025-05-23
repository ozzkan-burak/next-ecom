'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Label } from '@radix-ui/react-label';

const formSchema = z.object({
  email: z.string().min(2, {
    message: 'Email must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Password must be at least 2 characters.',
  }),
});

const onSubmit = async (data: z.infer<typeof formSchema>) => {
  console.log(data);
};
const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-4/7"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Label className="flex flex-col items-center space-x-2">
            <Button className="w-100" type="submit">
              Submit
            </Button>
            <Link href="/register">Not a member ?</Link>
          </Label>
        </form>
      </Form>
    </>
  );
};

export default Login;
