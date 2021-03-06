import React from 'react';
import 'antd/dist/antd.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { Layout } from 'antd';
import { Provider as AuthProvider } from 'next-auth/client';
// import { ReactQueryDevtools } from 'react-query-devtools';
import type { AppProps } from 'next/app';
import { SavedProvider } from '../providers/SavedProvider';
import { NotificationProvider } from '../providers/NotificationProvider';
import { SavedItems } from '../components/SavedItems';
import { defaultOptions } from '../config/cache';
import { Navigation } from '../components/Navigation/Navigation';
import styles from '../styles/app.module.css';

const { Header, Content, Footer } = Layout;

const queryCache = new QueryClient({ defaultOptions });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider session={pageProps.session}>
    <QueryClientProvider client={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <ReactQueryDevtools initialIsOpen /> */}
        <NotificationProvider>
          <SavedProvider>
            <SavedItems />
            <Layout className={`site-layout ${styles.layout}`}>
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
      </Hydrate>
    </QueryClientProvider>
  </AuthProvider>
);

export default MyApp;
