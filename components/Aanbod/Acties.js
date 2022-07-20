import Link from "next/link";
import { urlFor } from "../../sanity";

/* Download brochure eruit gehaald */

// const DownloadBrochure = ({ brochure }) => {
//     if (brochure === undefined || brochure === null) return null;
//     if (brochure.url === undefined || brochure.url === null) return null;

//     const { API_URL } = process.env;

//     return (
//         <a
//             href={`${API_URL}${brochure.url}`}
//             target="_blank"
//             className="list-group-item list-group-item-warning list-group-item-action d-flex justify-content-between align-items-center"
//         >
//             Brochure downloaden
//             <span>&#128206;</span>
//         </a>
//     );
// };

const Acties = ({ adres = "", url = "", brochure = null }) => {
    const EMAIL_ME_URL = process.env.EMAIL_ME_URL;

    return (
        <div className="mt-3">
            <ul className="list-group list-group-flush">
                <Link
                    href={{
                        pathname: "/contact",
                        query: { subject: `Aanvragen bezichtiging ${adres}` },
                    }}
                >
                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Bezichtiging aanvragen
                        <span>&#128197;</span>
                    </a>
                </Link>
                <Link
                    href={{
                        pathname: "/contact",
                        query: { subject: `Ik heb een vraag over ${adres}` },
                    }}
                >
                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Stel een vraag
                        <span>&#128172;</span>
                    </a>
                </Link>
                <Link
                    href={`mailto:?subject=${
                        adres && adres
                    }&body=Hallo\n, ik heb een interessante woning gezien: https://voornemakelaars.nl${url}`}
                >
                    <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                        Tip een vriend(in)
                        <span>&#127804;</span>
                    </a>
                </Link>
                
            </ul>
        </div>
    );
};

export default Acties;
