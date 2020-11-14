import React, { useReducer, useContext, createContext } from "react";

type Notification = {
  message: string;
};

type AddNotification = {
  type: "ADD";
  notification: Notification;
};

type ClearNotification = {
  type: "CLEAR";
};

type NotificationActions = AddNotification | ClearNotification;

const NotificationStateContext = createContext<Notification[]>([]);
const NotificationDispatchContext = createContext<
  React.Dispatch<NotificationActions>
>(null as any);

const reducer = (state: Notification[], action: NotificationActions) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.notification];
    case "CLEAR":
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
