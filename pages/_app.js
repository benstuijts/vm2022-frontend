import "bootstrap/dist/css/bootstrap.css";
import "../styles.css";

import { useEffect } from "react";

import Navbar from "../components/General/Navbar";

function MyApp({ Component, pageProps }) {
    // Loading Bootstrap javascript in every page
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
