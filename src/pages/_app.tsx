import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux'
import store from "../store";
import "../App.css";

type AppPropsConPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: any
  }
}

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps, router }: AppPropsConPageLayout) {
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait">
        {
          Component.PageLayout ?
            <Component.PageLayout>
              <Component {...pageProps} key={router.route} />
            </Component.PageLayout>
            :
            <Component {...pageProps} key={router.route} />
        }
      </AnimatePresence>
    </Provider>
  );
}
