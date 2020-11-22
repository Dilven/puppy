import { Alert, Button, Form as AntdForm, Input} from "antd";
import { zodResolver } from '@hookform/resolvers/zod';
import React from "react";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import { signUpFormSchema, FormData } from "../../schemas/sign-up-form";
import { useDispatchSignUp } from "../../providers/SignUpProvider";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const getErrorsMessages = (errors: FieldErrors<FormData>) => Object.values(errors).map(error => error?.message).filter(message => message)

export const SignUpForm = () => {
  const { handleSubmit, control, errors } = useForm({
    resolver: zodResolver(signUpFormSchema)
  });
  const dispatch = useDispatchSignUp();

  const errorsMessages = getErrorsMessages(errors);

  const onSubmit = handleSubmit(dispatch.signUp)

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