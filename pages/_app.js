import '../styles/globals.css'
import { storeWrapper } from '../Redux/Store';
import './global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default storeWrapper.withRedux(MyApp);