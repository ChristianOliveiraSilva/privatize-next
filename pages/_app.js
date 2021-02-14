import '../styles/globals.css'
import { storeWrapper } from '../Redux/Store'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './global.css'
import '../Global/Fonts/fonts.css'
import GlobalStyle from '../Global/Style/global'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <ReactNotification/>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default storeWrapper.withRedux(MyApp);