import React from 'react';
import {
  Form, Button, Comment, Avatar, Input,
} from 'antd';

const { TextArea } = Input;

export const CommentEditor = ({
  onChange, onSubmit, submitting, value,
}: any) => (
  <Comment
    avatar={(
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    )}
    content={(
      <>
        <Form.Item>
          <TextArea rows={4} onChange={onChange} value={value} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
            Add Comment
          </Button>
        </Form.Item>
      </>
  )}
  />
);
