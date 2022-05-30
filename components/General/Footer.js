import Link from "next/link";

const Footer = () => {
    const { ADRES } = process.env;
    const { POSTCODE } = process.env;
    const { WOONPLAATS } = process.env;
    const { API_URL } = process.env;
    const { CALL_ME_URL } = process.env;
    const { EMAIL_ME_URL } = process.env;
    const { KVK } = process.env;
    const { IBAN } = process.env;
    const { BTW } = process.env;
    const { FB_URL } = process.env;
    const { PHONE_NUMBER } = process.env;

    return (
        <footer className="container-fluid bg-dark">
            <div className="container pt-5 pb-5 text-white">
                <div className="row">
                    <div className="col-sm-12 col-md-4 p-3">
                        <h2>Voorne Makelaars</h2>
                        <p>
                            Bij het aan- of verkopen van een woning komt veel
                            kijken. Zeker in deze markt waar de vraag naar
                            woningen groot is en het aanbod steeds kleiner. Maar
                            hoe verzilver je deze kans? En met welke verkoopplan
                            behaal je de hoogste opbrengst? En hoe zit het nu
                            eigenlijk juridisch gezien? Dit zijn allemaal vragen
                            waar wij het antwoord op hebben.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-4 p-3">
                        <h2>Links</h2>
                        <div>
                            <Link href="/verkoopmakelaar">
                                <a className="nounderline text-white">
                                    Huis verkopen - verkoopmakelaar
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/aankoopmakelaar">
                                <a className="nounderline text-white">
                                    Huis Kopen - aankoopmakelaar
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/waardebepaling">
                                <a className="nounderline text-white">
                                    Gratis waardebepaling
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/blog">
                                <a className="nounderline text-white">
                                    Artikelen (blog)
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/aanbod">
                                <a className="nounderline text-white">
                                    Zoeken in aanbod
                                </a>
                            </Link>
                        </div>
                        <hr />
                    </div>

                    <div className="col-sm-12 col-md-4 p-3">
                        <h2>Contact</h2>

                        <p className="strong">Voorne Makelaars en Advies</p>
                        <p>
                            {ADRES} <br />
                            {POSTCODE} {WOONPLAATS} <br />
                            {PHONE_NUMBER}
                        </p>
                        <div>
                            <div>
                                <a
                                    href={CALL_ME_URL}
                                    className="nounderline text-white"
                                >
                                    &#128222; Bel ons
                                </a>
                            </div>

                            <div>
                                <a
                                    href={EMAIL_ME_URL}
                                    className="nounderline text-white"
                                >
                                    &#128231; Mail ons
                                </a>
                            </div>
                        </div>
                        <p>
                            KVK: {KVK} <br />
                            IBAN: {IBAN} <br />
                            BTW: {BTW}
                        </p>
                    </div>
                </div>
                <div className="row border-top">
                    <div className="col">
                        <p className="mt-2 text-center">
                            &copy; 2022 Voorne Makelaars |{" "}
                            <a
                                target="_blank"
                                href="https://s3.eu-central-1.amazonaws.com/storage.topsite.nl/vbomakelaar.nl/uploads/docs/voorwaarden/Algemene%20Consumentenvoorwaarden%20VBO%20Makelaar.pdf"
                                className="nounderline text-white"
                            >
                                Algemene Voorwaarden
                            </a>{" "}
                            |{" "}
                            <a
                                href="/privacyverklaring"
                                className="nounderline text-white"
                            >
                                Privacy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
