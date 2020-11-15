import React from 'react';
import { Link } from "react-router-dom";
import { paths } from '../../config/paths';
import { Layout, Menu, Button, Badge } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { OPEN_SAVED_ITEMS, useDispatchSaved, useSaved } from '../../providers/SavedProvider';
import styles from './Navigation.module.css';

const { Sider } = Layout;

export const Navigation = () => {
  const dispatch = useDispatchSaved();
  const saved = useSaved();

  return (
    <Layout>
      <Sider
        className={styles.sider}
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