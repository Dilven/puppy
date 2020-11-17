import React from "react"
import { useMutation, useQueryCache } from "react-query";
import { useHistory } from "react-router-dom"
import { SearchQuery } from "../../helpers/api";
import { QueryKey } from "../../constants/queries-keys";
import { Button, DatePicker, Input, Form as AntdForm } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useForm, Controller } from "react-hook-form";
import styles from './Form.module.css';
import { SearchParams } from "../../models/search-params";
import { getQueryParams } from "../../helpers/search-params";
import { rejectEmpty } from "../../helpers/reject-empty";
type Props = {
  query: SearchQuery;
  queryKey: QueryKey;
  redirectPath: string;
}

export const Form = ({ query, queryKey, redirectPath }: Props) => {
  const history = useHistory();
  const cache = useQueryCache();
  const { handleSubmit, control } = useForm();

  const [mutate, { isLoading }] = useMutation(async (data: SearchParams) => query(data), {
    onSuccess: (data, variables) => {
      cache.setQueryData([queryKey, {...variables, page: '1' }], data)
      const searchParams = getQueryParams({...variables, page: '1' });
      history.push(`${redirectPath}?${searchParams}`);
    }
  });

  const onSubmit = async (data: any) => {
    const year = data.year?.year();
    const params: SearchParams = { ...data, year: year ? `${year}` : null }
    await mutate(rejectEmpty(params));
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