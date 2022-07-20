import { sanityClient, urlFor } from "../../sanity";

/* AANBOD ARTICLE PAGE */

import { useState } from "react";
import { useRouter } from "next/router";

import seoModal from "components/Aanbod/seoModal";
import { NextSeo, ArticleJsonLd } from "next-seo";

import Fotos from "../../components/Aanbod/Fotos";
import ModalFotos from "../../components/Aanbod/ModalFotos";
import Tab from "components/General/Tab";

import Acties from "../../components/Aanbod/Acties";
import Omschrijving from "../../components/Aanbod/Omschrijving";

function withPoints(x = 0) {
    return x && x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const Kenmerk = ({ omschrijving = "", waarde = "", bg = "" }) => (
    <li
        className={`list-group-item d-flex justify-content-between align-items-center ${bg}`}
    >
        {omschrijving} <span>{waarde}</span>
    </li>
);

const Kenmerken = ({ woning, router }) => (
    <div className="p-3 bg-light">
        <ul className="list-group list-group-flush">
            <Kenmerk
                omschrijving="Vraagprijs"
                waarde={`€ ${withPoints(woning.vraagprijs)}`}
                bg="bg-primary"
            />
            <Kenmerk omschrijving="Bouwjaar" waarde={woning.bouwjaar} />
            <Kenmerk
                omschrijving="Oppervlakte Wonen"
                waarde={`${woning.wonen} m2`}
            />
            <Kenmerk
                omschrijving="Oppervlakte Perceel"
                waarde={`${woning.perceel} m2`}
            />
            <Kenmerk
                omschrijving="Aantal slaapkamers"
                waarde={woning.slaapkamers}
            />
            <Kenmerk omschrijving="Wijk" waarde={woning.wijk} />
            <Kenmerk omschrijving="Buurt" waarde={woning.buurt} />
            <Kenmerk omschrijving="Energielabel" waarde={woning.energielabel} />
        </ul>
        <Acties
            adres={woning && woning.adres}
            url={router && router.asPath}
            brochure={woning && woning.brochure}
        />
        <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item d-flex flex-column align-items-left">
                <h6>telefonisch contact</h6>

                <ul>
                    <li>
                        Maandag tot vrijdag van 10:00 tot 17:00 uur en van 19:30
                        tot 21:00 uur.
                    </li>
                    <li>Op zaterdag 10:00 - 15:00 uur.</li>
                </ul>

                <p className="mt-2">
                    U kunt ook een <a href="/contact">bericht sturen</a>, dan
                    nemen wij zo spoedig mogelijk met u contact op.
                </p>
            </li>
        </ul>
    </div>
);


/* PLATTEGRONDEN WERKEN NIET IVM object plattegrond[] */
const Plattegronden = ({ woning }) => {
    if (!woning.plattegronden || woning.plattegronden.length === 0)
        return "Geen plattegronden aanwezig";
    const { API_URL } = process.env;

    return (
        <div>
            <ul className="list-group">
                {woning.plattegronden.map((plattegrond, i) => {
                    return (
                        <a
                            href={`${API_URL}${plattegrond.url}`}
                            target="_blank"
                            className="list-group-item list-group-item-action d-flex justify-content-between"
                            key={i}
                        >
                            {/beg/.test(plattegrond.url.toString())
                                ? "Begane grond"
                                : /1e/.test(plattegrond.url.toString())
                                ? "Eerste Verdieping"
                                : /2e/.test(plattegrond.url.toString())
                                ? "Tweede Verdieping"
                                : /3e/.test(plattegrond.url.toString())
                                ? "Derde Verdieping"
                                : /erste/.test(plattegrond.url.toString())
                                ? "Eerste Verdieping"
                                : /weede/.test(plattegrond.url.toString())
                                ? "Tweede Verdieping"
                                : /erde/.test(plattegrond.url.toString())
                                ? "Derde Verdieping"
                                : "Plattegrond"}
                            <span className="">&#128206;</span>
                        </a>
                    );
                })}
            </ul>
        </div>
    );
};

const AanbodPage = ({ woning }) => {
    const { API_URL } = process.env;

    const SEO = seoModal(woning);

    SEO.title = woning.wijk
        ? woning.adres + " makelaar " + woning.wijk
        : woning.adres;

    const router = useRouter();

    const [geselecteerdeFoto, setGeselecteerdeFoto] = useState(null);
    const _fotos = woning && [
        woning.mainImage,
        woning.mainImage,
        ...woning.images,
    ];

    return (
        <>
            <NextSeo {...SEO} />

            <div className="container">
                <h1>
                    {woning.adres}{" "}
                    {woning.status == 2 ? (
                        <span className="badge bg-success">verkocht</span>
                    ) : (
                        ""
                    )}
                </h1>

                <div className="row">
                    <Fotos
                        fotos={_fotos}
                        geselecteerdeFoto={geselecteerdeFoto}
                        setGeselecteerdeFoto={setGeselecteerdeFoto}
                    />

                    {geselecteerdeFoto && (
                        <ModalFotos
                            fotos={_fotos}
                            geselecteerdeFoto={geselecteerdeFoto}
                            setGeselecteerdeFoto={setGeselecteerdeFoto}
                        />
                    )}

                    <div className="col-md-6">
                        <Tab
                            tabHeaders={[
                                { caption: "KENMERKEN" },
                                { caption: "PLATTEGRONDEN" },
                            ]}
                            tabContents={[
                                <div>
                                    <Kenmerken
                                        woning={woning}
                                        router={router}
                                    />
                                </div>,
                                <div className="p-3 bg-light">
                                    VOID
                                </div>,
                            ]}
                        />
                    </div>
                </div>

                <Omschrijving omschrijving={woning.body} />

                <h5 className="mt-5">Disclaimer</h5>
                <p className="small">
                    De gegevens op deze webpagina zijn bedoeld om u een algemene
                    indruk te geven over de woning. Hoewel deze informatie met
                    de grootst mogelijke zorg is samengesteld, blijft de
                    mogelijkheid bestaan dat er fouten en/of onvolledigheden in
                    de omschrijving en/of de tekeningen staan. Noch de verkoper,
                    noch Voorne Makelaars aanvaardt in dit geval enige
                    aansprakelijkheid. Aan de informatie en de tekeningen op
                    deze webpagina kunnen geen rechten worden ontleend.
                </p>
            </div>
        </>
    );
};

export async function getStaticPaths() {
    const query2 = '*[ _type == "house"]';
    const woningen = await sanityClient.fetch(query2);

    const paths = woningen.map((woning) => `/aanbod/${woning.slug.current}`);

    return { paths, fallback: false };
}


export async function getStaticProps({ params }) {
    const slug = params.slug;

    const query2 = `*[ _type == "house" && slug.current == "${slug}"]`;
    const woningen = await sanityClient.fetch(query2);

    return {
        props: {
            woning: checkResponse(woningen)[0],
        },
    };
}

const checkResponse = (res) => {
    if (!res.length) {
        return [];
    } else {
        return res;
    }
};

export default AanbodPage;
