import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import { useEffect } from "react";

import Navbar from "../components/General/Navbar";
import Footer from "../components/General/Footer";

function MyApp({ Component, pageProps }) {
    // Loading Bootstrap javascript in every page
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <>
            <DefaultSeo {...SEO} />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
