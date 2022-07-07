import Link from "next/link";

const waaromVM = ({ woning = null }) => {
    const { API_URL } = process.env;
    return (
        <section id="waarom-voorne-makelaars">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 order-2">
                        { woning && (
                            <Link href={`/aanbod/${woning.slug}`}>
                            <div className="card">
                                <img
                                    src={
                                        woning.hoofdfoto &&
                                        `${API_URL}${woning.hoofdfoto.formats.small.url}`
                                    }
                                    className="card-img-top"
                                    loading="lazy"
                                    alt={woning.adres}
                                />
                                <div className="card-img-overlay">
                                    <span className="badge bg-secondary">
                                        Nieuw in de verkoop
                                    </span>
                                </div>
                                <div className="card-body">
                                    <h6>
                                        {woning.adres} - &euro;{" "}
                                        {woning.vraagprijs.toLocaleString("nl")}{" "}
                                        {woning.kk ? "k.k." : "v.o.n."}
                                    </h6>
                                </div>
                            </div>
                        </Link>
                        )}
                        
                    </div>
                    <div className="col-sm-12 col-md-6 order-1">
                        <h2>Waarom Voorne Makelaars?</h2>
                        <p className="mb-5">
                            <ol className="list-group list-group-numbered">
                                <li className="list-group-item">
                                    Wij realiseren bewezen de beste verkoopprijs
                                </li>
                                <li className="list-group-item">
                                    Wij ontzorgen u gedurende het proces
                                </li>
                                <li className="list-group-item">
                                    Wij regelen het juridische papierwerk en
                                    adviseren u hierbij                                </li>
                            </ol>
                        </p>
                                    
                        <p className="mt-5">
                            <a
                                className="btn btn-primary"
                                href="#reviews-voorne-makelaars"
                            >
                                Lees hier de reviews van onze klanten
                            </a>
                        </p>

                        <p>
                            <Link href="/makelaar/europarcs-chalet-verkopen">
                                <a className = "btn btn-outline-primary">
                                    Wilt u uw recreatiewoning verkopen? (Europarcs)
                                </a>
                            </Link>

                        </p>
                    </div>
                </div>
                <hr className = "mt-5"/>
            </div>
            
        </section>
    );
};

export default waaromVM;
