import { Steps } from "antd"
import React from "react"
import { FormOutlined, SolutionOutlined, MailOutlined, LoadingOutlined } from '@ant-design/icons';
import { useSignUp } from "../../providers/SignUpProvider";

const { Step } = Steps;

export const SingUpSteps = () => {
  const { status, step } = useSignUp();

  return (
    <Steps current={step} status={status}>
      <Step title="Login" icon={<FormOutlined />} />
      <Step title="Verification" icon={step === 1 ? <LoadingOutlined /> : <SolutionOutlined />} />
      <Step title="Confirm Email" icon={<MailOutlined />} />
    </Steps>
  )
}