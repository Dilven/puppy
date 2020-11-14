import React, { useState } from "react"
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom"
import { SearchQuery } from "../api";
import { QueryKey } from "../constants/queriesKeys";
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

type Props = {
  query: SearchQuery;
  queryKey: QueryKey;
  redirectPath: string;
}

export const Form = ({ query, queryKey, redirectPath }: Props) => {
  const history = useHistory();
  const [name, setName] = useState('')
    const { isLoading, refetch } = useQuery(queryKey, query({ name }),  {
    refetchOnWindowFocus: false,
    enabled: false // turned off by default, manual refetch is needed
  })

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await refetch();
    history.push(`${redirectPath}?q=${name}`);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <Button type="primary" htmlType="submit" loading={isLoading} icon={<SearchOutlined />}>
        Search
      </Button>
    </form>
  )
}