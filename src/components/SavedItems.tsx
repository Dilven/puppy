import React from "react";
import { useDispatchSaved, useSaved, OPEN_SAVED_ITEMS } from "../providers/SavedProvider";
import { Drawer, Row, Col } from 'antd';
import { ResultsItem } from "./ResultsItem";

export const SavedItems = () => {
  const saved = useSaved();
  const dispatch = useDispatchSaved();
  console.log('DEBUGGING: : SavedItems -> saved', saved.items);

  return (
    <Drawer
      title="Saved items"
      placement="top"
      closable={true}
      onClose={() => dispatch({ type: OPEN_SAVED_ITEMS })}
      visible={saved.isOpen}
    >
    <Row>
      {Object.entries(saved.items).map(([,{ title, id, poster, type }]) => 
        <Col span={8}>
          <ResultsItem title={title} id={id} type={type} poster={poster} size='small' />
        </Col>
      )}
    </Row>
    </Drawer>
  )
}