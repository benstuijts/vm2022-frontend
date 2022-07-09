import Link from "next/link";
import {
    sortById,
    sortByPrice,
    sortByStatusAndId,
} from "components/General/sortConstructor";
import { urlFor } from "../../sanity";

const _samenstelling = [
    { aanbod: 6, ov: 0, verkocht: 0 },
    { aanbod: 5, ov: 1, verkocht: 1 },
    { aanbod: 4, ov: 1, verkocht: 1 },
    { aanbod: 3, ov: 2, verkocht: 1 },
    { aanbod: 2, ov: 2, verkocht: 2 },
    { aanbod: 1, ov: 3, verkocht: 2 },
    { aanbod: 0, ov: 3, verkocht: 3 },
];

const NieuwsteAanbod = ({ woningen = [], h2 = "Nieuwste aanbod", id = "nieuwste-aanbod" }) => {
    const data = woningen.filter((w) => w.status === 0 || w.status === 1);

    const byStatus = (a, b) => a.status - b.status;

    let aantalAanbod = woningen.filter((w) => w.status === 0).length;
    aantalAanbod = (aantalAanbod > 6 ) ? 6 : aantalAanbod;

    const samenstelling = _samenstelling.filter(
        (o) => o.aanbod === aantalAanbod
    )[0];

    const _aanbod = woningen
        .filter((w) => w.status === 0)
        .reverse()
        .slice(0, samenstelling.aanbod);
    const _ov = woningen
        .filter((w) => w.status === 1)
        .sort(sortByPrice)
        .slice(0, samenstelling.ov);
    const _verkocht = woningen
        .filter((w) => w.status === 2)
        .sort(sortByPrice)
        .slice(0, samenstelling.verkocht);
    let _addExtra = [];

    if ([..._aanbod, ..._ov, ..._verkocht].length < 6) {
        
        _addExtra = woningen
            .filter((w) => w.status === 2)
            .sort(sortByPrice)
            .slice(
                samenstelling.verkocht,
                samenstelling.verkocht +
                    6 -
                    [..._aanbod, ..._ov, ..._verkocht].length
            );
    }

    const showcase = [..._aanbod, ..._ov, ..._verkocht, ..._addExtra];
    return (
        <section className="container" id={id}>
            <h2>{h2}</h2>
            
            <p>
                <Link href="/aanbod">
                    <a className="btn btn-dark">
                        Bekijk & zoek in al het aanbod
                    </a>
                </Link>
            </p>

            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                {showcase
                    .sort(sortByStatusAndId)
                    .slice(0, 6)
                    .map((woning) => (
                        <CardWoning woning={woning} key={woning.id} />
                    ))}
            </div>
            <a href="#top-page" className="btn btn-outline-primary mt-3">
                Naar boven &uarr;
            </a>
        </section>
    );
};

const CardWoning = ({ woning = {} }) => {
    const { API_URL } = process.env;
    const status =
        woning.status === 0
            ? "te koop"
            : woning.status === 1
            ? "verkocht onder voorbehoud"
            : "verkocht";

    return (
        <Link href={`/aanbod/${woning.slug}`}>
            <a className="col mb-4 text-decoration-none">
                <div className="card h-100">
                    <div style={{ position: "relative" }} className="">
                        <img
                            src = { urlFor(woning.mainImage) }

                            className="card-img-top"
                            loading="lazy"
                            alt={woning.adres}
                        />
                        <span className="NA_img_wrap_status badge badge-pill">
                            {status}
                        </span>
                        <div className="NA_img_wrap_header">
                            <p>{woning.adres}</p>
                        </div>
                    </div>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                            <p title="woonoppervlakte">
                                &#127968; {woning.wonen} m<sup>2</sup>
                            </p>
                            <p title="oppervlakte perceel">
                                &#127969; {woning.perceel} m
                                <sup>2</sup>
                            </p>
                            <p title="aantal slaapkamers">
                                &#128164; {woning.slaapkamers}
                            </p>
                        </li>
                    </ul>
                    <div className="card-body">
                        {/* <h5 className="card-title">Vraagprijs</h5> */}
                        <p className="card-text">{woning.description}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <p title="vraagprijs">Vraagprijs</p>
                        <p title={woning.vraagprijs}>
                            &euro; {woning.vraagprijs.toLocaleString("nl")}{" "}
                            {woning.kk ? "k.k." : "v.o.n."}
                        </p>
                    </div>
                </div>
            </a>
        </Link>
    );
};

export default NieuwsteAanbod;