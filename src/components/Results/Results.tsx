import React from 'react';
import { Movie } from '../../models/movie';
import { Episode } from '../../models/episode';
import { Series } from '../../models/series';
import { Item } from '../Item/Item';
import { Row, Col } from 'antd';
import styles from './Results.module.css';

type Props = { 
  data?: Movie[] | Series[] | Episode[],
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