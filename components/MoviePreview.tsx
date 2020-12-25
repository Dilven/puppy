import React from 'react';
import {
  Card, Image, Row, Col,
} from 'antd';
import { MoviePreview as MoviePreviewType } from '../models/movie';
import { Comments } from './Comments/Comments';

const fakeComments = [
  { id: 1, author: 'Dilven', content: 'hahahahaha' },
  {
    id: 2,
    author: 'Dilven2',
    content: 'xxxxx',
    replies: [
      { id: 3, author: 'Dilven3', content: 'eeeeee' }, { id: 4, author: 'Dilven4', content: '444444' },
    ],
  },
  { id: 5, author: 'Dilven', content: '555555' },
];

type Props = MoviePreviewType;
// eslint-disable-next-line max-len
const placeholderImage = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';
export const MoviePreview = (props: Props) => {
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
            placeholder={(
              <Image
                src={placeholderImage}
                width={200}
              />
              )}
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
      <Comments data={fakeComments} />
    </Card>
  );
};
