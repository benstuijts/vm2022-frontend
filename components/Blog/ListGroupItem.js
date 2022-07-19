import Link  from 'next/link';
const ListGroupItem = ({post}) => (
    <Link href = {`/blog/${post.slug.current}`}>
        <a className="list-group-item list-group-item-action">
            <h5>{post.title}</h5>
            <p>{post.description}</p>
            <p className="text-grey">
                {
                    post.keywords &&
                    post.keywords.map(
                        (keyword, index) => (
                            <span key = {index}>&#127991; {" "} {keyword} {" "}</span>
                        )
                    )
                }
            </p>
            
            </a>
    </Link>
    
)

export default ListGroupItem;