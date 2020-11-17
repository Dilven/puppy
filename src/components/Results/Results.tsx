import React from 'react';
import { Movie } from '../../models/movie';
import { Episode } from '../../models/episode';
import { Series } from '../../models/series';
import { Item } from '../Item/Item';
import { Row, Col } from 'antd';
import { Error } from '../Error';
import styles from './Results.module.css';

type Props = { 
  data?: Movie[] | Series[] | Episode[],
  isLoading: boolean;
  isError: boolean;
}

export const Results = ({ data, isLoading, isError }: Props) => {
  if (isLoading) {
    return <span>Loading...</span>
  }
  if(!data || isError) return <Error />
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