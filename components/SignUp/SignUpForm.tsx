import {
  Alert, Button, Form as AntdForm, Input,
} from 'antd';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { Controller, FieldErrors, useForm } from 'react-hook-form';
import { signUpFormSchema, FormData } from '../../schemas/sign-up-form';
import styles from './SignUpForm.module.css';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const getErrorsMessages = (errors: FieldErrors<FormData>) => {
  const errorValues = Object.values(errors);
  return errorValues.map((error) => error?.message).filter((message) => message);
};

type Props = {
  signUp: (formData: FormData) => Promise<void>
}

export const SignUpForm = ({ signUp }: Props) => {
  const { handleSubmit, control, errors } = useForm({
    resolver: zodResolver(signUpFormSchema),
  });
  const errorsMessages = getErrorsMessages(errors);

  const onSubmit = handleSubmit(signUp);

  return (
    <AntdForm {...layout} onFinish={onSubmit} className={styles.form}>
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
      <div>
        <Button type="primary">
          Sign in
        </Button>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
      {errorsMessages.map((error) => <Alert message={error} type="error" showIcon />)}
    </AntdForm>
  );
};
