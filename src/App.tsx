import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import { Navigation } from './components/Navigation/Navigation';
import { Layout } from 'antd';
import { ReactQueryDevtools } from 'react-query-devtools'
import { SavedProvider } from './providers/SavedProvider';
import { NotificationProvider } from './providers/NotificationProvider';
import { SavedItems } from './components/SavedItems';
import styles from './App.module.css'
import { Routes } from './Routes';
import { cacheConfig } from './config/cache';

const { Header, Content, Footer } = Layout;

const queryCache = new QueryCache(cacheConfig)

const App = () => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    <ReactQueryDevtools initialIsOpen />
    <NotificationProvider>
      <SavedProvider>
        <SavedItems />
        <Layout className={`site-layout ${styles.layout}`} >
          <Router>
            <Navigation />
            <Header className={`site-layout-sub-header-background ${styles.header}`} />
            <Content className={styles.content}>
              <div className={`site-layout-background ${styles.contentWrapper}`}>
                <Routes />
              </div>
            </Content>
            <Footer className={styles.footer}>Training</Footer>
          </Router>
        </Layout>
      </SavedProvider>
    </NotificationProvider>
  </ReactQueryCacheProvider>
);

export default App;
