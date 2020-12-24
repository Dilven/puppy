import React from 'react';
import {
  Card, Image, Row, Col,
} from 'antd';
import { MoviePreview as MoviePreviewType } from '../models/movie';

type Props = MoviePreviewType;

export const MoviePreview = (props: Props) => (
  <Card title={props.Title}>
    <Row>
      <Col span={6}>
        <Image
          width={200}
          src={props.Poster}
          placeholder={(
            <Image
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
              width={200}
            />
            )}
        />
        <p>
          Genre:
          {' '}
          {props.Genre}
        </p>
        <p>
          Awards:
          {' '}
          {props.Awards}
        </p>
      </Col>
      <Col span={18}>
        <p>
          Plot:
          {' '}
          {props.Plot}
        </p>
        <br />
        Actors:
        {' '}
        {props.Actors}
        <br />
        Country:
        {' '}
        {props.Country}
        <br />
        Director:
        {' '}
        {props.Director}
        <br />
        Language:
        {' '}
        {props.Language}
        <br />
        Metascore:
        {' '}
        {props.Metascore}
        <br />
        Rated:
        {' '}
        {props.Rated}
        <br />
        Released:
        {' '}
        {props.Released}
        <br />
        Response:
        {' '}
        {props.Response}
        <br />
        Runtime:
        {' '}
        {props.Runtime}
        <br />
        Type:
        {' '}
        {props.Type}
        <br />
        Writer:
        {' '}
        {props.Writer}
        <br />
        Year:
        {' '}
        {props.Year}
        <br />
        imdbID:
        {' '}
        {props.imdbID}
        <br />
        imdbRating:
        {' '}
        {props.imdbRating}
        <br />
        imdbVotes:
        {' '}
        {props.imdbVotes}
        <br />
        {props.Ratings.map((rate) => (
          <p key={rate.Source}>
            {rate.Source}
            ,
            {' '}
            {rate.Value}
          </p>
        ))}
        <br />
      </Col>
    </Row>
  </Card>
);
