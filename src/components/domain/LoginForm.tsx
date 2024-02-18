'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import { Typography } from '@/app/components/Typography/Typography';

import { Button } from '../ui/button';
import Textfield from '../ui/textfield';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

type formSchema = z.infer<typeof formSchema>;

const LoginForm = () => {
  const form = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: formSchema) {
    // eslint-disable-next-line no-console
    console.log(values);
  }

  return (
    <>
      <Form
        className="w-2/6 rounded-md px-5 py-8 shadow-xl"
        methods={form}
        onSubmit={onSubmit}
      >
        <Typography component="h1">Login</Typography>
        <Textfield label="username" name="username" placeholder="username" />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default LoginForm;
