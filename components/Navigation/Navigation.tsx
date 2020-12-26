import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Layout, Menu, Button, Badge,
} from 'antd';
import {
  UploadOutlined, UserOutlined, VideoCameraOutlined, PlusSquareOutlined,
} from '@ant-design/icons';
import { paths } from '../../config/paths';
import { OPEN_SAVED_ITEMS, useDispatchSaved, useSaved } from '../../providers/SavedProvider';
import styles from './Navigation.module.css';
import { useNotification } from '../../providers/NotificationProvider';
import { AuthHeader } from '../AuthHeader/AuthHeader';

const { Sider } = Layout;

export const Navigation = () => {
  const dispatch = useDispatchSaved();
  const saved = useSaved();
  const { pathname } = useRouter();
  const contextHolder = useNotification();

  return (
    <Layout>
      {contextHolder}
      <Sider
        className={styles.sider}
      >
        <div className="logo" />
        <AuthHeader />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
          <Menu.Item key={paths.signUp} icon={<UserOutlined />}>
            <Link href={paths.signUp}>Sign up</Link>
          </Menu.Item>
          <Menu.Item key={paths.profile} icon={<UserOutlined />}>
            <Link href={paths.profile}>My profile</Link>
          </Menu.Item>
          <Menu.Item key={paths.home} icon={<UserOutlined />}>
            <Link href={paths.home}>Home</Link>
          </Menu.Item>
          <Menu.Item key={paths.searchMovies} icon={<VideoCameraOutlined />}>
            <Link href={paths.searchMovies}>Search movies</Link>
          </Menu.Item>
          <Menu.Item key={paths.searchSeries} icon={<UploadOutlined />}>
            <Link href={paths.searchSeries}>Search series</Link>
          </Menu.Item>
          <Menu.Item key={paths.searchEpisodes} icon={<UserOutlined />}>
            <Link href={paths.searchEpisodes}>Search episodes</Link>
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
  );
};
