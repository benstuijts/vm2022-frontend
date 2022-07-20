import { PortableText } from "@portabletext/react";

const Omschrijving = ({body}) => {
    
    if(body==null) return null;

    return (
        <div className = "omschrijving-wrapper">
            <div className = "omschrijving-header">
                <h4>Omschrijving</h4>
            </div>
            <div className = "omschrijving-body">
            <PortableText value={post.body} />
            </div>
        </div>
    )
}

export default Omschrijving;