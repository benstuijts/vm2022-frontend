import { sanityClient, urlFor } from "../../sanity";

import AanbodAlles from "components/Aanbod/AanbodAlles";
import Header from "components/General/Header";
import Link from "next/link";
import { NextSeo } from "next-seo";

const SEO = {
    title: "Zoeken in het aanbod van koopwoningen",
    description:
        "Zoek hier uw koopwoning op Voorne Putten en Goedereede die via Voorne Makelaars te koop worden aangeboden.",
    canonical: "https://www.voornemakelaars.nl/aanbod",

    openGraph: {
        title: "Zoeken in het aanbod van koopwoningen",
        description:
            "Zoek hier uw koopwoning op Voorne Putten en Goedereede die via Voorne Makelaars te koop worden aangeboden.",
        url: "https://voornemakelaars.nl/aanbod",
        type: "article",
        article: {
            publishedTime: "15-12-2020",
            modifiedTime: "18-12-2020",
            authors: ["Ben Stuijts - voornemakelaars"],
            tags: [
                "makelaar",
                "aanbod",
                "aankoopmakelaar",
            ],
        },
        images: [],
    },
};

const AanbodList = ({ woningen, blogposts }) => {
    return (
        <div >
            <NextSeo {...SEO} />
            <Header 
                title = "Overzicht van de te koop aangeboden woningen"
                lead = "Zoek hier uw koopwoning."
                footer = " "

            />
            <div className = "container mb-5 mt-5">
            
            <p className = "lead">
                Met enige regelmaat worden er nieuwe woningen op Voorne Putten en Goedereede via
                Voorne Makelaars te koop aangeboden. Deze woningen worden meestal eerst als preview
                gepubliceerd op onze <a className="text-highlight" href="https://fb.me/voornemakelaars" title = "facebook pagina Voorne Makelaars" target = "_blank">Facebookpagina</a>. Het is mogelijk om dan direct een afspraak te maken 
                om een woning te bekijken. U kunt zich ook <a className="text-highlight" href="/contact/inschrijven">gratis inschrijven</a> wanneer u op zoek bent naar een 
                specifieke woning of een woning in een bepaalde plaats of wijk. Wij benaderen mensen actief 
                wanneer er een interessante optie voorbij komt. Tenslotte helpen wij ook mensen met het zoeken en 
                kopen van hun nieuwe woning als <a className="text-highlight" href="/aankoopmakelaar">aankoopmakelaar</a>.
            </p>
            </div>

            <section id = "aankoop-makelaar">
                <div className = "container">
                <h2>Aankoop makelaar</h2>
                        <p>
                            Ga echt voor dat droomhuis, zorg voor een scherpe
                            onderhandeling en koop geen huis met allerlei
                            mankementen, waar u vooraf geen weet van hebt. Laat
                            u bij deze belangrijke beslissing begeleiden door
                            een aankoopmakelaar. Dit heeft een groot aantal
                            voordelen en eigenlijk is er altijd sprake van het
                            zichzelf terugverdienen van de kosten van de
                            makelaar.
                        </p>
                        <div className = "d-flex justify-content-between">
                        <Link href="/aankoopmakelaar">
                                <a className="btn btn-outline-primary">
                                    Meer informatie aankoopmakelaar
                                </a>
                            </Link>
                            <Link href="/aankoopmakelaar#contact-formulier">
                                <a className="btn btn-outline-primary">
                                    Vrijblijvende afspraak inplannen 
                                </a>
                            </Link>
                        </div>
                        
                </div>
            </section>

            <div><code>
                {JSON.stringify(woningen)}</code></div>
            

            <AanbodAlles 
                data = { woningen }
                limit = { null }
            />

            

        </div>
    )
}

export default AanbodList;

export async function getStaticProps() {
    
    const query2 = '*[ _type == "house"]';
    const woningen = await sanityClient.fetch(query2);

    return {
        props: {
            woningen: checkResponse(woningen),
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