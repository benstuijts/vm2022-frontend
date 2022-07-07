import Link from "next/link";

const Woondossier = ({plaatsnaam = "Hellevoetsluis"}) => {
    return (
        <section id="woondossier">
            <div className="container pt-3 pb-3">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <img
                            src="https://api.voornemakelaars.nl/uploads/woondossier_voorne_makelaars_95f08cc6bf.jpeg"
                            alt="Woondossier Voorne Makelaars"
                            className="img-fluid"
                            loading="lazy"
                        />
                    </div>

                    <div className="col">
                        <h5>Informatie in cruciaal</h5>
                        <h2>Woondossier</h2>
                        <hr />
                        <p>
                            Bij de verkoop van uw woning in {plaatsnaam} is het van belang om
                            een koper zoveel mogelijk informatie te verstrekken.
                            Informatie die hij altijd en overal kan raadplegen
                            op alle mobiele apparaten. Informatie die
                            interactief is en op maat voor iedere potentiële
                            koper. Dus geen ouderwetse brochure meer maar een
                            interactief dossier wat antwoord geeft op alle
                            mogelijke vragen, dat is weer van belang voor de
                            opbrengst van uw woning. Immers, indien een
                            potentiële koper geen twijfels meer heeft zal deze
                            ongeremd de onderhandelingen in gaan, dat draagt
                            zeker bij aan het behalen van de hoogste opbrengst.
                        </p>
                        {/* <Link href="/aanvragen/energielabel">
                            <a className="btn btn-action">
                                Meer informatie over Woondossier
                            </a>
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Woondossier;
