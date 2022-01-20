import { Navbar } from '../components/Navbar';

import { AuthProvider } from '../contexts/AuthContext';

import { AppContainer } from "../styles/app.styles"
import GlobalStyle from "../styles/global"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppContainer>
        <Navbar pageTitle="Home" />

        <Component {...pageProps} />

        <GlobalStyle />
      </AppContainer>
    </AuthProvider>
  )
}

export default MyApp