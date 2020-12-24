import React from 'react';
import { Card, Rate, Image } from 'antd';
import { FireOutlined, PlusSquareOutlined, ShareAltOutlined, HeartOutlined, MinusSquareFilled } from '@ant-design/icons';
import { useRouter } from 'next/router'
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
  const router = useRouter()
  const dispatchSaved = useDispatchSaved();
  const saved = useSaved();
  const itemIsSaved = !!saved.items[id];
  const prefetchItem = usePrefetchItem(id, type);

  const onSaveClick = () => {
    if(itemIsSaved) {
      dispatchSaved({ type: REMOVE_ITEM, id })
      dispatchNotification.success({
        message: title,
        description: <p>Removed from the list of saved items</p>,
        placement: 'bottomRight',
      });
    }
    else {
      prefetchItem();
      dispatchSaved({ type: ADD_ITEM, item: { title, id, poster, type } })
      dispatchNotification.success({
        message: title,
        description: <p>Added to the list of saved items</p>,
        placement: 'bottomRight',
      });
    }
  }

  return (
    <Card
      size={size}
      className={styles.card}
      cover={
        <Image
          onClick={() => router.push(`/${type}/${id}`, undefined, { shallow: true })}
          alt="example"
          src={poster}
          className={styles.image}
        />
      }
      actions={[
        <HeartOutlined color="#eb2f96" />,
        ...(itemIsSaved ? [<MinusSquareFilled onClick={onSaveClick} />] : [<PlusSquareOutlined onClick={onSaveClick} />]),
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
