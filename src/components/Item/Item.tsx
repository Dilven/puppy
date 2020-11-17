import React from 'react';
import { Card, Rate, Image } from 'antd';
import { FireOutlined, PlusSquareOutlined, ShareAltOutlined, HeartOutlined, MinusSquareFilled } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { ADD_ITEM, REMOVE_ITEM, useDispatchSaved, useSaved } from '../../providers/SavedProvider';
import { CardSize } from 'antd/lib/card';
import styles from './Item.module.css';
import { usePrefetchItem } from '../../hooks/usePrefetchQuery';
import { ResourceType } from '../../models/item';

const { Meta } = Card;

type Props = {
  title: string;
  poster?: string;
  id: string;
  type: ResourceType;
  size?: CardSize
}

export const Item = ({ title, poster, id, type, size }: Props) => {
  const history = useHistory();
  const dispatch = useDispatchSaved();
  const saved = useSaved();
  const itemIsSaved = !!saved.items[id];
  const prefetchItem = usePrefetchItem(id, type);

  const setItem = () => {
    if(itemIsSaved) dispatch({ type: REMOVE_ITEM, id })
    else {
      prefetchItem();
      dispatch({ type: ADD_ITEM, item: { title, id, poster, type } })
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
