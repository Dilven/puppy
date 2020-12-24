import { useState, useReducer } from 'react';
import { FormData } from '../schemas/sign-up-form';

const fakeCreateUser = (formData: FormData) => {
  const isSuccess = formData.name === 'success';
  return new Promise((resolve, reject) => setTimeout(() => (isSuccess ? resolve('success') : reject()), 2000));
};

type Status = 'wait' | 'process' | 'finish' | 'error' | undefined;

type ActionsChangeStep = 'next' | 'previous' | 'reset';

const defaultStep = 0;

const reducerStep = (state = defaultStep, action: ActionsChangeStep) => {
  switch (action) {
    case 'next':
      return state + 1;
    case 'previous':
      return Math.max(0, state + 1);
    case 'reset':
      return 0;
    default:
      return state;
  }
};

export const useSignUp = () => {
  const [status, changeStatus] = useState<Status>(undefined);
  const [step, changeStep] = useReducer(reducerStep, defaultStep);

  const signUp = async (formData: FormData) => {
    changeStep('next');
    changeStatus('process');
    try {
      await fakeCreateUser(formData);
      changeStatus(undefined);
      changeStep('next');
    } catch (e) {
      changeStatus('error');
    }
  };

  return {
    step,
    status,
    changeStatus,
    changeStep,
    signUp,
  };
};
