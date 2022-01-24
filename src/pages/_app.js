import { Layout } from '../components/Layout';

import { AuthProvider } from '../contexts/AuthContext';

import GlobalStyle from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />

        <GlobalStyle />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp