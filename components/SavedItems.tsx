import React from 'react';
import { Drawer, Row, Col } from 'antd';
import { useDispatchSaved, useSaved, OPEN_SAVED_ITEMS } from '../providers/SavedProvider';
import { Item } from './Item/Item';

export const SavedItems = () => {
  const saved = useSaved();
  const dispatch = useDispatchSaved();

  return (
    <Drawer
      title="Saved items"
      placement="top"
      closable
      onClose={() => dispatch({ type: OPEN_SAVED_ITEMS })}
      visible={saved.isOpen}
    >
      <Row>
        {Object.entries(saved.items).map(([, {
          title, id, poster, type,
        }]) => (
          <Col span={8} key={id}>
            <Item title={title} id={id} type={type} poster={poster} size="small" />
          </Col>
        ))}
      </Row>
    </Drawer>
  );
};
