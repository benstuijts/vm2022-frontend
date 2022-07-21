import { sortByName } from "components/General/sortConstructor";
import { urlFor } from "../../sanity";

const Fotos =  ({ fotos = [], setGeselecteerdeFoto }) => {
    const { API_URL } = process.env;

    return (
        <div className="col-md-6" style={{ border: "none" }}>
            {/* <div className="row">
                <div className="col">
                    <img
                        src={`${API_URL}${fotos[0].formats.small.url}`}
                        alt=""
                        style={{ width: "100%" }}
                        onClick={() => {
                            setGeselecteerdeFoto(0);
                        }}
                    />
                </div>
            </div> */}

            <div className="row">
                <div
                    className="img-grid img-grid-items-4"
                    style={{ gridGap: "16px" }}
                >
                    {fotos
                        .slice(1)
                        .sort(sortByName)
                        .map((foto, index) => {
                        
                            

                        return (
                            <div className="img-wrap" key={index}>
                                <img
                                    src={urlFor(foto)}
                                    alt="foto"
                                    onClick={() => {
                                        
                                        setGeselecteerdeFoto(parseInt(index+1));

                                    }
                                        
                                    }
                                />
                            </div>
                        );
                    })}
                </div>
                
            </div>

            
        </div>
    );
};

export default Fotos;
