'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form } from '@/components/ui/form';
import { Typography } from '@/app/components/Typography/Typography';

import { Button } from '../ui/button';
import Textfield from '../ui/textfield';

const seemsLikeEmail = (value: string) =>
  value.includes('@') || /.+\.[a-zA-Z]{2,}$/.test(value);

const formSchema = z.object({
  user: z
    .string()
    .min(2, { message: 'El usuario es requerido' })
    .refine(
      (val) =>
        seemsLikeEmail(val) ? z.string().email().safeParse(val).success : true,
      { message: 'Ingrese un email valido' },
    ),
  password: z.string().min(2, { message: 'La contraseña es requerida' }),
});

type formSchema = z.infer<typeof formSchema>;

const LoginForm = () => {
  const form = useForm<formSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user: '',
      password: '',
    },
  });

  function onSubmit(values: formSchema) {
    // eslint-disable-next-line no-console
    console.log(values);
  }

  return (
    <>
      <Form
        className="w-96	rounded-md px-6 py-8 shadow-xl"
        methods={form}
        onSubmit={onSubmit}
      >
        <Typography
          className="text-center font-semibold"
          component="h1"
          size="h4"
        >
          Ingresar
        </Typography>
        <Textfield classname="py-3" label="Usuario" name="user" />
        <Textfield classname="pb-3" label="Contraseña" name="password" />
        <Button className="mt-3 w-full" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
