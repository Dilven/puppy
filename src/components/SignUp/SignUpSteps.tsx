import { Steps } from "antd"
import React from "react"

const { Step } = Steps;

export const SingUpSteps = () => {
  return (
    <Steps current={1} status="error">
      <Step title="Finished" description="This is a description" />
      <Step title="In Process" description="This is a description" />
      <Step title="Waiting" description="This is a description" />
    </Steps>
  )
}