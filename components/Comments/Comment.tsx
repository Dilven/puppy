import React from 'react';
import { Comment, Avatar } from 'antd';

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
    {data.map(({ replies, author, content }) => (
      <Comment
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        // TODO
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        author={<a>{author}</a>}
        avatar={(
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt={author}
          />
        )}
        content={(<p>{content}</p>)}
      >
        <Comments data={replies} />
      </Comment>
    ))}
  </div>
);
