'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';

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
    <Form methods={form} onSubmit={onSubmit}>
      <Textfield label="username" name="username" placeholder="username" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LoginForm;
