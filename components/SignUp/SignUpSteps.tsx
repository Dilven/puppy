import { Steps } from 'antd';
import React from 'react';
import {
  FormOutlined, SolutionOutlined, MailOutlined, LoadingOutlined,
} from '@ant-design/icons';
import styles from './SignUpSteps.module.css';

const { Step } = Steps;

type Props = {
  status: 'wait' | 'process' | 'finish' | 'error' | undefined,
  step: number,
}

export const SingUpSteps = ({ step, status }: Props) => (
  <Steps current={step} status={status} className={styles.steps}>
    <Step title="Login" icon={<FormOutlined />} />
    <Step title="Verification" icon={step === 1 ? <LoadingOutlined /> : <SolutionOutlined />} />
    <Step title="Confirm Email" icon={<MailOutlined />} />
  </Steps>
);
