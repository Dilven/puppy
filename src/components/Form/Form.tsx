import React from "react"
import { useMutation, useQueryCache } from "react-query";
import { useHistory } from "react-router-dom"
import { SearchParams, SearchQuery } from "../../api";
import { QueryKey } from "../../constants/queriesKeys";
import { Button, DatePicker, Input, Form as AntdForm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useForm, Controller } from "react-hook-form";
import styles from './Form.module.css';

type Props = {
  query: SearchQuery;
  queryKey: QueryKey;
  redirectPath: string;
}

export const Form = ({ query, queryKey, redirectPath }: Props) => {
  const history = useHistory();
  const { handleSubmit, control } = useForm();

  const cache = useQueryCache();

  const [mutate, { isLoading }] = useMutation(async (data: SearchParams) => query(data), {
    onSuccess: (data, variables) => {
      cache.setQueryData([queryKey, variables], data)
      history.push(`${redirectPath}?q=${variables.name}&y=${variables.year}`);
    }
  });

  const onSubmit = async (data: any) => {
    console.log('DEBUGGING: : Form -> data', data);
    await mutate({ name: data.name, year: `${data.year?.year() || ''}` });
  }

  return (
    <AntdForm onFinish={handleSubmit(onSubmit)} layout="inline" className={styles.form}>
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