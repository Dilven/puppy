import React from 'react';
import { Card, Rate, Image } from 'antd';
import { FireOutlined, PlusSquareOutlined, ShareAltOutlined, HeartOutlined, MinusSquareFilled } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { ADD_ITEM, REMOVE_ITEM, useDispatchSaved, useSaved } from '../../providers/SavedProvider';
import { CardSize } from 'antd/lib/card';
import styles from './Item.module.css';
import { usePrefetchItem } from '../../hooks/usePrefetchQuery';
import { ResourceType } from '../../models/item';
import { useDispatchNotification } from '../../providers/NotificationProvider';

const { Meta } = Card;

type Props = {
  title: string;
  poster?: string;
  id: string;
  type: ResourceType;
  size?: CardSize
}

export const Item = ({ title, poster, id, type, size }: Props) => {
  const dispatchNotification = useDispatchNotification();
  const history = useHistory();
  const dispatchSaved = useDispatchSaved();
  const saved = useSaved();
  const itemIsSaved = !!saved.items[id];
  const prefetchItem = usePrefetchItem(id, type);

  const setItem = () => {
    if(itemIsSaved) dispatchSaved({ type: REMOVE_ITEM, id })
    else {
      prefetchItem();
      dispatchSaved({ type: ADD_ITEM, item: { title, id, poster, type } })
      dispatchNotification.info({
        message: `Notification`,
        description: <p>Hello, !</p>,
        placement: 'topLeft',
      });
    }
  }

  return (
    <Card
      size={size}
      className={styles.card}
      cover={
        <Image
          onClick={() => history.push(`/${type}/${id}`)}
          alt="example"
          src={poster}
          className={styles.image}
        />
      }
      actions={[
        <HeartOutlined color="#eb2f96" />,
        ...(itemIsSaved ? [<MinusSquareFilled onClick={setItem} />] : [<PlusSquareOutlined onClick={setItem} />]),
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
