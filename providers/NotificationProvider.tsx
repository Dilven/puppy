import { notification } from 'antd';
import { NotificationInstance } from 'antd/lib/notification';
import React, { createContext } from 'react';
import { useNonNullableContext } from '../hooks/useNonNullableContext';

const NotificationStateContext = createContext<React.ReactElement | undefined>(undefined);
const NotificationDispatchContext = createContext<NotificationInstance | undefined>(undefined);

type Props = {
  children: React.ReactNode;
}

export const NotificationProvider = ({ children }: Props) => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <NotificationDispatchContext.Provider value={api}>
      <NotificationStateContext.Provider value={contextHolder}>
        {children}
      </NotificationStateContext.Provider>
    </NotificationDispatchContext.Provider>
  );
};

export const useNotification = () => useNonNullableContext(NotificationStateContext);
export const useDispatchNotification = () => useNonNullableContext(NotificationDispatchContext);
