import { Alert, Button, Form as AntdForm, Input} from "antd";
import { zodResolver } from '@hookform/resolvers/zod';
import React from "react";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import { signUpFormSchema, FormData } from "../../schemas/sign-up-form";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const getErrorsMessages = (errors: FieldErrors<FormData>) => Object.values(errors).map(error => error?.message).filter(message => message)

type Props = {
  signUp: (formData: FormData) => Promise<void>
}

export const SignUpForm = ({ signUp }: Props) => {
  const { handleSubmit, control, errors } = useForm({
    resolver: zodResolver(signUpFormSchema)
  });
  const errorsMessages = getErrorsMessages(errors);

  const onSubmit = handleSubmit(signUp)

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
      {errorsMessages.map(error => <Alert message={error} type="error" showIcon />)}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </AntdForm>
  );
};