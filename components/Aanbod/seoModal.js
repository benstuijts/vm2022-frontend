const { API_URL } = process.env;

const SEOModal =  (data) => {

    const slug = data.slug.current || data.adres.replace(" ", "-");

    

    return {
        title: data.titel,
        description: data.omschrijving,
        slug: slug,
        openGraph: {
            title: data.titel,
            description: data.omschrijving,
            url: `https://voornemakelaars.nl/aanbod/${slug}`,
            type: "article",
            article: {
                publishedTime: data.created_at,
                modifiedTime: data.updated_at,
                authors: [
                    "Ben Stuijts",
                    "Voorne Makelaars"
                ],
                tags: [
                    "voornemakelaars",
                    "belben",
                    data.plaatsnaam && data.plaatsnaam,
                    data.wijk && data.wijk
                ]
            },
            images: [
                
            ]
        }
    }
}

export default SEOModal;