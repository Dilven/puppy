import React from "react"
import { SearchQuery } from "../../helpers/api";
import { QueryKey } from "../../constants/queries-keys";
import { Button, DatePicker, Input, Form as AntdForm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Controller } from "react-hook-form";
import styles from './Form.module.css';
import { useSearchForm } from "../../hooks/useSearchForm";

type Props = {
  query: SearchQuery;
  queryKey: QueryKey;
  redirectPath: string;
}

export const Form = ({ query, queryKey, redirectPath }: Props) => {
  const { onSubmit, control, isLoading } = useSearchForm(queryKey, query, redirectPath);
  
  return (
    <AntdForm onFinish={onSubmit} layout="inline" className={styles.form}>
      <Controller
        as={<Input type='text' placeholder="Title" />}
        name='name'
        className={styles.input}
        control={control}
        defaultValue=''
        rules={{ required: true }}
      />
      <Controller
        as={<DatePicker name='year' picker="year" placeholder="Select a year" />}
        name='year'
        control={control}
      />
      <Button type="primary" htmlType="submit" loading={isLoading} icon={<SearchOutlined />}>
        Search
      </Button>
    </AntdForm>
  )
}