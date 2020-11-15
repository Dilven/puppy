import React from "react";
import { useDispatchNotification, useNotification, CLOSE_NOTIFICATION } from "../providers/NotificationProvider";
import { Alert } from 'antd';

export const Notifications = () => {
  const notifications = useNotification();
  const dispatch = useDispatchNotification();

  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      right: '20px',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    }} >
      {notifications.map(({ message, id }) => 
        <Alert 
          message={message} 
          type="success" 
          closable
          key={id}
          style={{ marginBottom: '5px' }}
          onClose={() => dispatch({ type: CLOSE_NOTIFICATION, id: '1' })} 
        />
      )}
    </div>
  )
}