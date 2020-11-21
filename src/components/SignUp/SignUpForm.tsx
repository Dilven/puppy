import { Button, Form as AntdForm, Input} from "antd";
import { zodResolver } from '@hookform/resolvers/zod';
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from 'zod';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const signUpFormSchema = z
  .object({
    name: z.string(),
    password: z.string(),
    confirm: z.string(),
  })
  .refine(data => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })

export const SignUpForm = () => {
  const { handleSubmit, control, errors } = useForm({
    resolver: zodResolver(signUpFormSchema)
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    console.log('DEBUGGING: : SignUpForm -> data', data);
  })


  return (
    <AntdForm {...layout} onFinish={onSubmit}>
      <Controller
        control={control}
        name="name"
        as={<Input />}
      />
      <Controller
        control={control}
        name="password"
        as={<Input.Password />}
      />
      <Controller
        control={control}
        name="confirm"
        as={<Input.Password />}
      />
      <p>{errors.confirm?.message}</p>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </AntdForm>
  );
};