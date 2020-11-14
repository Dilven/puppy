import React from 'react';
import { Card, Rate } from 'antd';
import { FireOutlined, PlusSquareOutlined, ShareAltOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

const { Meta } = Card;

type Props = {
  title: string;
  poster?: string;
  id: string;
  type: string;
}

export const CollectionCard = ({ title, poster, id, type }: Props) => {
  const history = useHistory();
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
        <FireOutlined />,
        <PlusSquareOutlined />,
        <ShareAltOutlined />
      ]}
    >
      <Meta
        title={title}
        description={
          <div>
            <Rate character={<HeartOutlined color="#eb2f96" />} allowHalf />
          </div>
        }
      />
    </Card>
  )
}
