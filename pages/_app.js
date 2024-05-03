import '@/styles/globals.css'
import Layout from "@/components/Layout";
import store from '../redux/store';
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div style={{
        backgroundColor: '#949494',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Layout />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}