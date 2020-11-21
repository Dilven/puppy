import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { paths } from '../../config/paths';
import { Layout, Menu, Button, Badge } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { OPEN_SAVED_ITEMS, useDispatchSaved, useSaved } from '../../providers/SavedProvider';
import styles from './Navigation.module.css';
import { useNotification } from '../../providers/NotificationProvider';

const { Sider } = Layout;

export const Navigation = () => {
  const dispatch = useDispatchSaved();
  const saved = useSaved();
  const { pathname } = useLocation();
  const contextHolder = useNotification();

  return (
    <Layout>
      {contextHolder}
      <Sider
        className={styles.sider}
      >
      <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          <Menu.Item key={paths.signUp} icon={<UserOutlined />}>
            <NavLink to={paths.signUp}>Sign up</NavLink>
          </Menu.Item>
          <Menu.Item key={paths.home} icon={<UserOutlined />}>
            <NavLink to={paths.home}>Home</NavLink>
          </Menu.Item>
          <Menu.Item key={paths.searchMovies} icon={<VideoCameraOutlined />}>
            <NavLink to={paths.searchMovies}>Search movies</NavLink>
          </Menu.Item>
          <Menu.Item key={paths.searchSeries} icon={<UploadOutlined />}>
            <NavLink to={paths.searchSeries}>Search series</NavLink>
          </Menu.Item>
          <Menu.Item key={paths.searchEpisodes} icon={<UserOutlined />}>
            <NavLink to={paths.searchEpisodes}>Search episodes</NavLink>
          </Menu.Item>
        </Menu>
        <div className={styles.savedButtonWrapper}>
          <Badge 
            count={Object.keys(saved.items).length} 
          >
            <Button 
              block
              className={styles.savedButton}
              type="dashed" 
              icon={<PlusSquareOutlined />}
              onClick={() => dispatch({ type: OPEN_SAVED_ITEMS })}
            >
              Saved
            </Button>
          </Badge>
        </div>
      </Sider>
    </Layout>
  )
}