import React from 'react';
import { Card, Rate } from 'antd';
import { FireOutlined, PlusSquareOutlined, ShareAltOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { ADD_NOTIFICATION, useDispatchNotification } from '../providers/NotificationProvider';

const { Meta } = Card;

type Props = {
  title: string;
  poster?: string;
  id: string;
  type: string;
}

export const ResultsItem = ({ title, poster, id, type }: Props) => {
  const history = useHistory();
  const dispatch = useDispatchNotification();
  const addItem = () => {
    dispatch({ type: ADD_NOTIFICATION, notification: { message: `Added ${type} "${title}" to collections` } })
  }

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          onClick={() => history.push(`/${type}/${id}`)}
          alt="example"
          src={poster}
          style={{ cursor: 'pointer' }}
        />
      }
      actions={[
        <HeartOutlined color="#eb2f96" />,
        <PlusSquareOutlined onClick={addItem} />,
        <ShareAltOutlined />
      ]}
    >
      <Meta
        title={title}
        description={
          <div>
            <Rate character={<FireOutlined />} allowHalf />
          </div>
        }
      />
    </Card>
  )
}
