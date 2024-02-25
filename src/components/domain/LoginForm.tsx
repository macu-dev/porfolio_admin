'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Form } from '@/components/ui/form';
import { Typography } from '@/app/components/Typography/Typography';

import { Button } from '../ui/button';
import Textfield from '../ui/textfield';

const seemsLikeEmail = (value: string) =>
  value.includes('@') || /.+\.[a-zA-Z]{2,}$/.test(value);

const LoginForm = () => {
  const { t } = useTranslation();

  const formSchema = z.object({
    user: z
      .string()
      .min(2, { message: t('errors.user') })
      .refine(
        (val) =>
          seemsLikeEmail(val)
            ? z.string().email().safeParse(val).success
            : true,
        { message: t('errors.email') },
      ),
    password: z.string().min(2, { message: t('errors.password') }),
  });

  type formSchema = z.infer<typeof formSchema>;

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
          {t('title')}
        </Typography>
        <Textfield classname="py-3" label={t('user')} name="user" />
        <Textfield
          classname="pb-3"
          label={t('password')}
          name="password"
          type="password"
        />
        <Button className="mt-3 w-full" type="submit">
          {t('button')}
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
