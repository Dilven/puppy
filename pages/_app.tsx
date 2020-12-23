import React from 'react';
import 'antd/dist/antd.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Layout } from 'antd';
import { ReactQueryDevtools } from 'react-query-devtools'
import { SavedProvider } from '../client/providers/SavedProvider';
import { NotificationProvider } from '../client/providers/NotificationProvider';
import { SavedItems } from '../client/components/SavedItems';
import { defaultOptions } from '../client/config/cache';
import styles from './app.module.css';
import { Navigation } from '../client/components/Navigation/Navigation';


const { Header, Content, Footer } = Layout;

const queryCache = new QueryClient({ defaultOptions })

//TODO REMOVE UNNECESSARY STYLE
const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryCache}>
      <ReactQueryDevtools initialIsOpen />
      <NotificationProvider>
        <SavedProvider>
          <SavedItems />
          <Layout className={`site-layout ${styles.layout}`} >
              <Navigation />
              <Header className={`site-layout-sub-header-background ${styles.header}`} />
              <Content className={styles.content}>
                <main className={`site-layout-background ${styles.contentWrapper}`}>
                  <Component {...pageProps} />
                </main>
              </Content>
              <Footer className={styles.footer}>Training</Footer>
          </Layout>
        </SavedProvider>
      </NotificationProvider>
    </QueryClientProvider>
  )
}

export default MyApp
