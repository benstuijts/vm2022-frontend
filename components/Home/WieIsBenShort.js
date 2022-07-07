const WieIsBenShort = () => {
    const { CALL_ME_URL } = process.env;
    const { EMAIL_ME_URL } = process.env;

    return (
        <section id="voorne-makelaars-ben-stuijts">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <img
                            src="/img/home/ben-stuijts-voorne-makelaars.jpg"
                            className="img-fluid"
                            loading="lazy"
                            alt="voorne makelaars ben stuijts"
                        />
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6">
                        <h2>Voorne Makelaars</h2>
                        <p>
                            Het leuke van mijn werk is dat ik de combinatie kan
                            maken van bouwkundige kennis (TU Delft) en kennis
                            van vastgoed. Na jarenlang werkzaam te zijn geweest
                            binnen de vastgoed wereld, ben ik mijn eigen
                            makelaarskantoor begonnen in 2019. Ik maak gebruik
                            van mijn kennis en ervaring op het gebied van
                            bouwkunde, vergunningen en financiën om u zo goed
                            mogelijk te helpen.
                        </p>
                        <p>
                            Naast de makelaardij, adviseert Voorne Makelaar u
                            graag over al uw vastgoed vragen, zoals
                            (ver)bouwingen, grootschalig onderhoud en het huren
                            of verhuren van woningen en bedrijfspanden.
                        </p>
                        <p>Ik hoop u snel te spreken...</p>
                        <p>
                            <strong>ir. Ben Stuijts</strong>
                            <br />
                            <em>VBO makelaar onroerende zaken</em>
                            <br />
                            <a
                                href={CALL_ME_URL}
                                className="btn btn-outline-dark m-3"
                            >
                                &#128222; Bel mij
                            </a>

                            <a
                                href={EMAIL_ME_URL}
                                className="btn btn-outline-dark m-3"
                            >
                                &#128231; Mail mij
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WieIsBenShort;
