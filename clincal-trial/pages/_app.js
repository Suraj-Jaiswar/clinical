import '../styles/globals.css'
import '../component/common/common.scss';
import Layout from '../component/common/Layout'
import { Inter } from '@next/font/google';

const roboto = Inter();

function MyApp({ Component, pageProps }) {

  return(
    <Layout className={roboto.className}>
      <Component {...pageProps} />
    </Layout>
  ) 

}

export default MyApp
