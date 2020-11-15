import React, { useReducer, useContext, createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ADD_NOTIFICATION = "ADD_NOTIFICATION";
export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";
export const CLEAR_NOTIFICATIONS = "CLEAR_NOTIFICATIONS";

type Notification = {
  id: string;
  message: string;
};

type AddNotification = {
  type: typeof ADD_NOTIFICATION;
  notification: Omit<Notification, 'id'>;
};

type ClearNotification = {
  type: typeof CLEAR_NOTIFICATIONS;
};

type CloseNotification = {
  type: typeof CLOSE_NOTIFICATION,
  id: string;
}

type NotificationActions = AddNotification | ClearNotification | CloseNotification;

const NotificationStateContext = createContext<Notification[]>([]);
const NotificationDispatchContext = createContext<
  React.Dispatch<NotificationActions>
>(null as any);

const reducer = (state: Notification[], action: NotificationActions) => {
  switch(action.type) {
    case ADD_NOTIFICATION: {
        return [
          ...state,
          {
            id: uuidv4(),
            ...action.notification,
          },
        ];
      }
    case CLOSE_NOTIFICATION:
      return state.filter(notification => notification.id !== action.id);
    case CLEAR_NOTIFICATIONS:
      return [];
    default:
      return state;
  }
};

export const NotificationProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <NotificationDispatchContext.Provider value={dispatch}>
      <NotificationStateContext.Provider value={state}>
        {children}
      </NotificationStateContext.Provider>
    </NotificationDispatchContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationStateContext);
export const useDispatchNotification = () =>
  useContext(NotificationDispatchContext);
