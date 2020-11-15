import React from 'react';
import { MovieBasic } from '../../../models/movie';
import { Item } from '../../Item/Item';
import { Row, Col } from 'antd';
import styles from './Results.module.css';

type Props = { 
  data?: MovieBasic[],
  isLoading: boolean;
}

export const Results = ({ data, isLoading }: Props) => {
  if (isLoading) {
    return <span>Loading...</span>
  }
  return (
    <Row className={styles.row}>
      {data?.map(d =>
        <Col span={8}>
          <Item title={d.Title} poster={d.Poster} type={d.Type} id={d.imdbID} />  
        </Col>
      )}
    </Row>
  )
}