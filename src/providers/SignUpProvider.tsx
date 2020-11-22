import React, { createContext, useState, Dispatch, SetStateAction, useReducer } from "react";
import { useNonNullableContext } from "../hooks/useNonNullableContext";
import { FormData } from "../schemas/sign-up-form";

const fakeCreateUser = (formData: FormData) => {
  const isSuccess = formData.name === 'success';
  return new Promise((resolve, reject) => setTimeout(() => isSuccess ? resolve() : reject(), 2000));
}

type Status = 'wait' | 'process' | 'finish' | 'error' | undefined;

type State = {
  status: Status,
  step: number;
}

type ActionsChangeStep = "next" | "previous" | "reset";

type Props = {
  children: React.ReactNode;
}

const SignUpStateContext = createContext<State | undefined>(undefined);
const SignUpDispatchContext = createContext<{ 
  changeStatus: Dispatch<SetStateAction<Status>>
  changeStep: Dispatch<ActionsChangeStep>,
  signUp: (formData: FormData) => Promise<void>
} | undefined>(undefined);

const defaultStep = 0;

const reducerStep = (state = defaultStep, action: ActionsChangeStep) => {
  switch (action) {
    case "next":
      return state + 1;
    case "previous":
      return Math.max(0, state + 1);
    case "reset":
      return 0;
    default:
      return state;
  }
}

export const SignUpProvider = ({ children }: Props) => {
  const [status, changeStatus] = useState<Status>(undefined);
  const [step, changeStep] = useReducer(reducerStep, defaultStep);
  
  const signUp = async(formData: FormData) => {
      changeStep('next')
      changeStatus('process');
      try {
        await fakeCreateUser(formData);
        changeStatus(undefined)
        changeStep('next')
      } catch(e) {
        changeStatus('error');
      }
  }

  return (
    <SignUpDispatchContext.Provider value={{ changeStatus, changeStep, signUp }}>
      <SignUpStateContext.Provider value={{ status, step  }}>
        {children}
      </SignUpStateContext.Provider>
    </SignUpDispatchContext.Provider>
  );
};

export const useSignUp = () => useNonNullableContext(SignUpStateContext);
export const useDispatchSignUp = () => useNonNullableContext(SignUpDispatchContext);