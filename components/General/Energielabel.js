import Link from "next/link";

const Energielabel = ({ plaatsnaam = "Hellevoetsluis" }) => {
    return (
        <section id="energielabel" className="bg-white">
            <div className="container pt-3 pb-3">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <h5>Wettelijke verplicht</h5>
                        <h2>Energielabel</h2>
                        <hr />
                        <p>
                            Het energielabel van je woning in {plaatsnaam} laat
                            onder meer zien hoe goed jouw huis geïsoleerd is.
                            Als koper of huurder heb je recht op een
                            energielabel. Als verkoper of verhuurder ben je dus
                            ook verplicht om een geldig geregistreerd
                            energielabel te hebben voor de woning. Is dat label
                            er niet, dan riskeert de verkoper of verhuurder een
                            boete (€ 435 voor particulieren en € 870 voor
                            bedrijven).
                        </p>
                        <p>
                            Vanaf 1 januari 2022 zal ook een energielabel
                            geregistreerd moeten zijn bij het te koop aanbieden
                            van een gebouw in {plaatsnaam} (advertentieplicht).
                            Vraag dus vandaag nog een keuring aan voor jouw
                            energielabel bij Voorne Makelaars.
                        </p>
                        <Link href="/aanvragen/energielabel">
                            <a className="btn btn-action">
                                Vraag energielabel {plaatsnaam} aan
                            </a>
                        </Link>
                    </div>

                    <div className="col">
                        <img
                            src="https://api.voornemakelaars.nl/uploads/verschil_energielabel_a_en_b_469f541a21.png"
                            alt="Vraag energielabel aan voordat u uw huis gaat verkopen"
                            className="img-fluid"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Energielabel;
