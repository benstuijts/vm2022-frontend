/* SEO */
import { NextSeo } from "next-seo";
const SEO = {
    title: "Makelaar Hellevoetsluis - Voorne Makelaars",
    description:
        "Voorne Makelaars is makelaar uit Hellevoetsluis en biedt een complete dienstverlening voor koper en verkoper: Begeleiding bij de verkoop & aankoop, aanvragen energielabel, onafhankelijk financieel advies, taxaties, bouwkundige keuring en een klusbedrijf.",
    canonical: "https://www.voornemakelaars.nl",

    openGraph: {
        title: "Op zoek naar makelaar in Hellevoetsluis: Voorne Makelaars",
        description:
            "Voorne Makelaars is makelaar in Hellevoetsluis en biedt een complete dienstverlening voor koper en verkoper: Begeleiding bij de verkoop & aankoop, aanvragen energielabel, onafhankelijk financieel advies, taxaties, bouwkundige keuring en een klusbedrijf.",
        url: "https://voornemakelaars.nl",
        type: "article",
        article: {
            publishedTime: "15-12-2020",
            modifiedTime: "18-12-2020",
            authors: ["Ben Stuijts - makelaar Hellevoetsluis"],
            tags: [
                "makelaar",
                "makelaar-hellevoetsluis",
                "waardebepaling",
                "aankoopmakelaar",
                "verkoopmakelaar",
                "woning kopen",
            ],
        },
        images: [],
    },
};

/* Page Components */
import Header from "components/General/Header";
import WaaromVM from "../components/Home/WaaromVM";
import AangeslotenBij from "components/General/AangeslotenBij";
import NieuwsteAanbod from "components/Home/NieuwsteAanbod";
import Woondossier from "components/General/Woondossier";
import Energielabel from "../components/General/Energielabel";
import Reviews from "components/General/Reviews";
import WieIsBenShort from "components/Home/WieIsBenShort";
import Blogs from "components/Home/Blogs";

/* Sanity.io */
import { sanityClient, urlFor } from "../sanity";

export default function Home({ woningen = [], blogs = [] }) {
    return (
        <>
            <NextSeo {...SEO }/>
            <span id="top-page"></span>

            <Header
                title="Makelaar Hellevoetsluis"
                subtitle="Voorne Makelaars"
                lead={`
        Bij het aan- of verkopen van een woning komt veel kijken. Zeker in deze markt waar de vraag naar woningen groot is en het aanbod steeds kleiner. Maar hoe verzilver je deze kans? En met welke verkoopplan behaal je de hoogste opbrengst? En hoe zit het nu eigenlijk juridisch gezien? Dit zijn allemaal vragen waar wij het antwoord op hebben.

        `}
                CTA={{
                    href: "/waardebepaling#waardebepaling-aanvragen",
                    text: "plan gratis waardebepaling in",
                }}
            />

            <WaaromVM woning={woningen[woningen.length - 1]} />

            <section id="introductie" className="bg-white pt-3 pb-3">
                <div className="container">
                    <h2>
                        Makelaar Hellevoetsluis voor het aankopen en verkopen
                        van uw woning
                    </h2>
                    <p>
                        Op zoek naar een makelaar Hellevoetsluis om uw
                        droomwoning te kopen of het maximale uit de verkoop van
                        uw woning te halen? Wij zijn actief in en rondom
                        Hellevoetsluis. Doordat wij deze regio goed kennen,
                        weten wij precies wat er nodig is om u bij te staan bij
                        de aan- en verkoop van uw woning. Daarnaast zijn wij
                        altijd op de hoogte van het nieuwste aanbod waardoor wij
                        snel kunnen schakelen.
                    </p>
                    <p>
                        Door onze brede kennis en ervaring, weten wij iedereen
                        goed te helpen en adviseren. Naast onderhandelingen en
                        bezichtigingen, beschikken wij ook over de nodige kennis
                        op gebied van bouwkunde, juridische zaken en
                        regelgeving. Dit maakt dat wij een compleet pakket aan
                        diensten kunnen aanbieden waarbij u volledig ontzorgt
                        wordt. Vooral in een tijd waarin woningen schaars zijn
                        en er snel gehandeld moet worden, zorgt dit voor een
                        complete service voor onze klanten
                    </p>
                    <p>
                        Bent u benieuwd wat wij voor u kunnen betekenen of wat
                        uw woning waard is? Neem contact met ons op voor een
                        gratis en vrijblijvende waardebepaling. Daarnaast
                        ontvangt u het nodige verkoopadvies, zodat u precies
                        weet waar u aan toe bent wanneer u uw woning gaat
                        verkopen!
                    </p>
                </div>
            </section>

            <AangeslotenBij />

            <NieuwsteAanbod woningen={woningen} />

            <Blogs blogs={blogs} />

            <Woondossier />
            <Energielabel />

            <Reviews />

            <WieIsBenShort />
        </>
    );
}

export const getServerSideProps = async () => {

    const query1 = '*[ _type == "house"]';
    const query2 = '*[ _type == "blog"]';
    const woningen = await sanityClient.fetch(query1);
    const blogs = await sanityClient.fetch(query2);

    return {
        props: {
            woningen: checkResponse(woningen),
            blogs: checkResponse(blogs),
        },
    };
};

const checkResponse = (res) => {
    if (!res.length) {
        return [];
    } else {
        return res;
    }
};
