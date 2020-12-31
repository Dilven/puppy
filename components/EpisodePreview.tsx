import React from 'react';
import {
  Card, Image, Row, Col,
} from 'antd';
import { EpisodePreview as EpisodePreviewType } from '../models/episode';

type Props = EpisodePreviewType;

// eslint-disable-next-line max-len
const placeholderImage = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';
export const EpisodePreview = (props: Props) => {
  const {
    Title, Poster, Genre,
    Awards, Plot, Actors,
    Country, Director, Language,
    Metascore, Rated, Released,
    Response, Runtime, Type,
    Writer, Year, imdbID,
    imdbRating, Ratings, imdbVotes,
  } = props;
  return (
    <Card title={Title}>
      <Row>
        <Col span={6}>
          <Image
            width={200}
            src={Poster}
          />
          <p>
            Genre:
            {' '}
            {Genre}
          </p>
          <p>
            Awards:
            {' '}
            {Awards}
          </p>
        </Col>
        <Col span={18}>
          <p>
            Plot:
            {' '}
            {Plot}
          </p>
          <br />
          Actors:
          {' '}
          {Actors}
          <br />
          Country:
          {' '}
          {Country}
          <br />
          Director:
          {' '}
          {Director}
          <br />
          Language:
          {' '}
          {Language}
          <br />
          Metascore:
          {' '}
          {Metascore}
          <br />
          Rated:
          {' '}
          {Rated}
          <br />
          Released:
          {' '}
          {Released}
          <br />
          Response:
          {' '}
          {Response}
          <br />
          Runtime:
          {' '}
          {Runtime}
          <br />
          Type:
          {' '}
          {Type}
          <br />
          Writer:
          {' '}
          {Writer}
          <br />
          Year:
          {' '}
          {Year}
          <br />
          imdbID:
          {' '}
          {imdbID}
          <br />
          imdbRating:
          {' '}
          {imdbRating}
          <br />
          imdbVotes:
          {' '}
          {imdbVotes}
          <br />
          {Ratings.map((rate) => (
            <p>
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
};
