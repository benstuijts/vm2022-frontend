/* BLOG ARTICLE PAGE */

import { sanityClient, urlFor } from "../../sanity";

import { PortableText } from "@portabletext/react";
import { NextSeo, ArticleJsonLd } from "next-seo";

import Header from "components/General/Header";

/* SCENARIO 2: [id].js page... Your page paths depend on external data: Use getStaticPaths (usually in addition to getStaticProps). */

const BlogPost = ({ post }) => {
    const { API_URL } = process.env;

    const SEO = {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `https://voornemakelaars.nl/blog/${post.slug}`,
            type: "article",
            article: {
                publishedTime: post.created_at,
                modifiedTime: post.updated_at,
                authors: [post.auteur],
                tags: post.keywords && post.keywords,
            },
            images: [],
        },
    };

    function sortByCreatedAt(a, b) {
        return new Date(a.created_at) + new Date(b.created_at);
    }

    return (
        <>
            <NextSeo {...SEO} />
            <ArticleJsonLd
                url={SEO.openGraph.url}
                title={SEO.openGraph.title}
                images={SEO.openGraph.images.map((image) => image.url)}
                datePublished={SEO.openGraph.article.datePublished}
                dateModified={SEO.openGraph.article.dateModified}
                authorName={SEO.openGraph.article.authors[0]}
                description={SEO.openGraph.description}
            />
            <Header title={post && post.title} lead={" "} footer={" "} />
            <article className="container">
                <p className="lead">{post && post.description}</p>
                <hr />
                <p className="small text-muted">
                    {post && post.auteur} - {post && post._createdAt}
                    <br />
                    {post &&
                        post.keywords &&
                        post.keywords.map((keyword, i) => (
                            <span key={i}>&#127991; {keyword.trim()} </span>
                        ))}
                </p>
                <hr className="mb-5" />

                <PortableText value={post.body} />
            </article>
        </>
    );
};

export async function getStaticPaths() {
    const query2 = '*[ _type == "blog"]';
    const blogposts = await sanityClient.fetch(query2);

    const paths = blogposts.map((blogpost) => `/blog/${blogpost.slug.current}`);

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const slug = params.slug;

    const query2 = `*[ _type == "blog" && slug.current == "${slug}"]`;
    const blogs = await sanityClient.fetch(query2);

    return {
        props: {
            post: checkResponse(blogs)[0],
        },
    };

    const { API_URL } = process.env;

    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    //const res = await fetch(`https://.../posts/${params.id}`)
    const res = await fetch(`${API_URL}/blogs?slug=${params.slug}`);
    const post = await res.json();

    // Pass post data to the page via props
    return {
        props: {
            post: post[0],
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

export default BlogPost;
