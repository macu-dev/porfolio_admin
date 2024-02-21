import React from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';
import { Input } from './input';

interface TextFieldProps {
  label?: string;
  name: string;
  placeholder?: string;
  classname?: string;
  type?: React.HTMLInputTypeAttribute;
}

const Textfield = ({
  label,
  name,
  placeholder,
  classname,
  type = 'text',
}: TextFieldProps) => {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={classname}>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Textfield;
