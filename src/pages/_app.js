import { Provider } from 'react-redux';
import { store } from '../store';
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  //return <Component {...pageProps} />;
  return (
    <Provider store={store}> {/* Envuelve la aplicación con el proveedor de Redux */}
      <Component {...pageProps} />
    </Provider>
  );
}
