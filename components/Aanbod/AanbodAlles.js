import { useState } from "react";
import { urlFor } from "../../sanity";

import Link from "next/link";

const AanbodAlles =  ({ data = [], limit = 60 }) => {
    if (limit == null) limit = data.length;

    const [q, setQ] = useState("");

    function search(rows) {
        if (!rows || !Array.isArray(rows)) return [];
        return rows.filter((row) => {
            //if(!row.adres) return
            return (
                row.adres &&
                row.adres.toLowerCase().indexOf(q.toLowerCase()) > -1
            );
        });
    }

    const sortConstructor = (sortedField, direction) => {
        return (a,b) => {
            if (a[sortedField] < b[sortedField]) {
                return direction === 'asc' ? -1 : 1;
              }
              if (a[sortedField] > b[sortedField]) {
                return direction === 'asc' ? 1 : -1;
              }
        }
    }

    const sortByCreatedAt = sortConstructor("created_at", "desc");
    const sortByStatus = sortConstructor("status", "asc");

    // function sortByStatus(a, b) {
    //     return a.status - b.status;
    // }

    // function sortByCreatedAt(a, b) {
    //     return new Date(a.created_at) + new Date(b.created_at);
    // }

    function searchOnProperty(prop, value, rows) {
        return rows.filter(
            (row) => row[prop] && row[prop].toLowerCase().indexOf(value) > -1
        );
    }

    return (
        <div className="container">
            <h2 className="mb-5">Bekijk & zoek het Aanbod aan koopwoningen</h2>

            <div className="aanbod-filter">
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                        >
                            Zoek op adres
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </div>
                <p className="text-muted">
                    Huizen gevonden: {search(data).length}
                </p>
            </div>

            <div className="aanbod-data mb-3">
                <div className="container ">
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                        {search(data.sort(sortByCreatedAt)).length > 0 ? (
                            search(data.sort(sortByStatus))
                                .slice(0, limit)
                                .map((woning) => (
                                    <CardWoning
                                        woning={woning}
                                        key={woning.id}
                                    />
                                ))
                        ) : (
                            <p>Adres niet gevonden</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
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
        <Link href={`/aanbod/${woning.slug.current}`}>
            <a className="col mb-4 text-decoration-none">
                <div className="card h-100">
                    <div style={{ position: "relative" }} className="">
                    <img
                            src={urlFor(woning.mainImage)}
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


export default AanbodAlles;