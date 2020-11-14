import React from "react"
import { Result, Button } from 'antd';

export const ErrorPreview = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<Button type="primary">Back Home</Button>}
    />
  )
}