/* BLOG HOME PAGE */
import { sanityClient, urlFor } from "../../sanity";

import { useState } from "react";

import { NextSeo } from "next-seo";

import Header from "components/General/Header";
import ListGroupItem from "components/Blog/ListGroupItem";



const BlogList = ({ blogposts }) => {
    const [q, setQ] = useState("");

    const sortedBlogpost = [ ...blogposts ];

    function search(rows) {
        if (!rows || !Array.isArray(rows)) return [];
        return rows.filter((row) => {
            return (
                row.title &&
                row.title.toLowerCase().indexOf(q.toLowerCase()) > -1
            );
        });
    }

    const SEO = {
        title: "overzicht van alle artikelen",
        description: "Heeft u vragen, vindt dan hier allerlei informatie over het kopen en verkopen van woningen.",
        openGraph: {
            title: "",
            description: "",
        },
    };

    // function sortByCreatedAt(a, b) {
    //     return new Date(a.created_at) - new Date(b.created_at);
    // }

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

    const sortByCreatedAt = sortConstructor("_createdAt", "desc");
    

    const sortFn = (a, b) => {
        let sortedField = "created_at"
        if (a[sortedField] < b[sortedField]) {
          return +1;
        }
        if (a[sortedField] > b[sortedField]) {
          return -1;
        }
        return 0;
      }

    const sortById = (a, b) => {
        return (a.id) + (b.id);
    }

    return (
        <>
            <NextSeo {...SEO} />
            <Header
                title="Overzicht artikelen"
                lead="Hieronder vindt u een aantal handige artikelen, waarin verschillende onderwerpen toegelicht worden. Met enige regelmaat worden nieuwe artikelen toegevoegd."
                footer="extra informatie"
            />
            <section className="container">
                <h2>Overzicht van alle artikelen ({blogposts.length})</h2>
                <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-sm"
                        >
                            Zoek op onderwerp
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
                
                <div className = "list-group">
                    {
                        search(sortedBlogpost.sort(sortByCreatedAt)).map(
                            blogpost => <ListGroupItem key = {blogpost.created_at} post = {blogpost} />
                        )
                    }
                </div>
                

                
            </section>
            
            
        </>
    );
};



export async function getStaticProps() {
    
    const query2 = '*[ _type == "blog"]';
    const blogs = await sanityClient.fetch(query2);

    return {
        props: {
            blogposts: checkResponse(blogs),
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

export default BlogList;