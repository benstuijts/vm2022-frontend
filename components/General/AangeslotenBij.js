import Link from "next/link";

const AangeslotenBij = () => {
    return (
        <section id="aangesloten-bij">
            <div className="container">
                <hr />
                <div className="row row-cols-auto d-flex align-items-center">
                    <div className="col p-1">
                        <Link href="https://www.vbo.nl/makelaars-taxateurs/hellevoetsluis/makelaar-10138-voorne-makelaars-advies">
                            <img
                                alt="lid van VBO"
                                src="/img/aangeslotenbij/vbo-voorne-makelaars.svg"
                                width="160"
                            />
                        </Link>
                    </div>
                    <div className="col p-1">
                        <Link href="https://www.funda.nl/makelaars/hellevoetsluis/63481-voorne-makelaars/beoordelingen/verkoop/">
                            <img
                                alt="lid van Funda"
                                src="/img/aangeslotenbij/funda-voorne-makelaars.svg"
                                width="160"
                            />
                        </Link>
                    </div>
                    <div className="col p-1">
                        <Link href="https://huispedia.nl/makelaars/kantoor/voorne-makelaars-advies-204">
                            <img
                                alt="lid van Huispedia"
                                src="/img/aangeslotenbij/huispedia-voorne-makelaars.svg"
                                width="160"
                            />
                        </Link>
                    </div>
                    <div className="col p-1">
                        <Link href="https://www.facebook.com/voornemakelaars">
                            <img
                                alt="lid van Facebook"
                                src="/img/aangeslotenbij/facebook-voorne-makelaars.svg"
                                width="160"
                            />
                        </Link>
                    </div>
                    <div className="col p-1">
                        <Link href="https://www.instagram.com/voorne_makelaars/">
                            <img
                                alt="lid van Instagram"
                                src="/img/aangeslotenbij/instagram-voorne-makelaars.svg"
                                height="48"
                            />
                        </Link>
                    </div>
                    <div className="col p-1">
                        <Link href="https://www.immobilienscout24.de/">
                            <img
                                alt="lid van ImmoScout24.de"
                                src="/img/aangeslotenbij/ImmoScout24.svg"
                                height="48"
                            />
                        </Link>
                    </div>
                </div>
                <hr />
            </div>
        </section>
    );
};

export default AangeslotenBij;