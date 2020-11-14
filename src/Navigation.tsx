import React from 'react';
import { Link } from "react-router-dom";
import { paths } from './config/paths';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export const Navigation = () => (
  <Layout>
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0
      }}
    >
    <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link to={paths.searchMovies}>Search movies</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to={paths.searchSeries}>Search series</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          <Link to={paths.searchEpisodes}>Search episodes</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  </Layout>
)