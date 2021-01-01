import React from 'react';
import { Row, Col } from 'antd';
import { Movie } from '../../models/movie';
import { Episode } from '../../models/episode';
import { Series } from '../../models/series';
import { Item } from '../Item/Item';
import { Error } from '../Error';
import styles from './Results.module.css';

type Props = {
  data?: Array<Episode|Series|Movie>,
  isLoading: boolean;
  isError: boolean;
}

export const Results = ({ data, isLoading, isError }: Props) => {
  if (isLoading) return <span>Loading...</span>;
  if (!data || isError) return <Error />;
  if (!data.length) return <p>NO RESULTS</p>;
  return (
    <Row className={styles.row}>
      {data?.map((d) => (
        <Col span={8} key={d.imdbID}>
          <Item key={d.imdbID} title={d.Title} poster={d.Poster} type={d.Type} id={d.imdbID} />
        </Col>
      ))}
    </Row>
  );
};
