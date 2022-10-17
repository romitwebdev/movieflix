import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout";
import { SSRProvider } from "react-bootstrap";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <SSRProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SSRProvider>
        </Provider>
    );
}

export default MyApp;
