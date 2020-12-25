import React from 'react';
import { CommentEditor } from './CommentEditor';
import { CommentsList } from './CommentsList';

type CommentType = {
  id: number,
  author: string,
  content: string;
  replies?: CommentType[];
}

type Props = {
  data?: CommentType[]
}

export const Comments = ({ data = [] }: Props) => (
  <div>
    <CommentsList data={data} />
    <CommentEditor />
  </div>
);
