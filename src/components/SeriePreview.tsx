import React from 'react';
import { Card } from 'antd';
import { Image } from 'antd';
import { SeriesPreview } from '../models/series';

type Props = SeriesPreview;

export const SeriePreview = (props: Props) => {
  return (
    <Card title={props.Title}>
      <Image
        width={200}
        src={props.Poster}
        placeholder={
          <Image
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
      {props.Actors}
      <br />
      {props.Awards}
      <br />
      {props.Country}
      <br />
      {props.Director}
      <br />
      {props.Genre}
      <br />
      {props.Language}
      <br />
      {props.Metascore}
      <br />
      {props.Plot}
      <br />
      {props.Rated}
      <br />
      {props.Released}
      <br />
      {props.Response}
      <br />
      {props.Runtime}
      <br />
      {props.Type}
      <br />
      {props.Writer}
      <br />
      {props.Year}
      <br />
      {props.imdbID}
      <br />
      {props.imdbRating}
      <br />
      {props.imdbVotes}
      <br />
      {props.totalSeasons}
      <br />
      {props.Ratings.map((rate) => <p>{rate.Source}, {rate.Value}</p>)}
      <br />
    </Card>
  )
}
