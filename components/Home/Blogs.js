
import { urlFor } from "../../sanity";
import Link from "next/link";

const Blogs = ({ blogs = [] }) => {
    return (
        <section id="blog" className = "bg-dark">
            <div className="container pt-3 pb-3">
                <h2 className="text-light">Nieuws, informatie & artikelen</h2>
                <hr className = "mb-5"/>
                <div className = "row row-cols-xs-1 row-cols-sm-1 row-cols-md-2">
                    {
                        blogs.map(blog=>(
                            <Blog2 blog = {blog}/> 
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

const Blog2 = ({blog}) => (
    <div className = "col d-flex align-content-stretch">
        <div className = "card mb-3">
            <div className = "row">
                <div className = "col-4">
                <img 
                        src= { urlFor(blog.mainImage )} 
                        class="img-fluid" 
                        alt= {blog.title} />
                </div>
                <div className = "col-8">
                <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
        </div>
                </div>
            </div>
        
        </div>
    </div>
)

const Blog = ({ blog = {} }) => {
    return (
        <div className="col card" key = {blog.publishedAt}>
            <div className="row">
                <div className="col-md-4">
                    <img 
                        src= { urlFor(blog.mainImage )} 
                        class="img-fluid" 
                        alt= {blog.title} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{blog.title}</h5>
                        <p className="card-text">
                            { blog.description }
                        </p>
                        <p className="card-text">
                            { blog.keywords.map((keyword, index) => (
                                <small class="text-muted" key={index}>
                                    {keyword} * { " " }
                                </small>
                            ))}

                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
