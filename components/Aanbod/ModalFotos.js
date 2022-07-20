import { sortByName } from "components/General/sortConstructor";
import { urlFor } from "../../sanity";

const CarouselIndicator = ({ number, activeNumber, setGeselecteerdeFoto }) => {
    if (number === activeNumber) {
        return (
            <li
                data-target="#carouselExampleIndicators"
                data-slide-to={number}
                className="active"
                onClick={() => setGeselecteerdeFoto(number)}
            ></li>
        );
    } else {
        return (
            <li
                data-target="#carouselExampleIndicators"
                data-slide-to={number}
                onClick={() => setGeselecteerdeFoto(number)}
            ></li>
        );
    }
};

const CarouselItem = ({ foto, active, index }) => {
    if(!active) return null;
    if (active === index) {
        return (
            <div className="carousel-item carousel-container active d-flex justify-content-center align-items-center">
                <img
                    src={urlFor(woning.mainImage)}
                    className="modal_caroussel-image h-75"
                    alt="foto"
                />
            </div>
        );
    } else {
        return (
            <div className="carousel-item">
                <img
                    src={urlFor(woning.mainImage)}
                    className="modal_caroussel-image h-75"
                    alt="foto"
                />
            </div>
        );
    }
};

const Modal = ({ fotos = [], geselecteerdeFoto, setGeselecteerdeFoto }) => {
    const handleCloseModal = (e) => {
        if (
            e.target.classList.contains("modal_caroussel-image") ||
            e.target.classList.contains("carousel-control-prev-icon") ||
            e.target.classList.contains("carousel-control-next-icon") 
        ) { return;
        } else {
            setGeselecteerdeFoto(null);
        }
    };

    return (
        <div className="modal_backdrop" onClick={handleCloseModal}>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
            >
                {/* <ol className="carousel-indicators">
                    {fotos
                    .slice(1)
                    .map((f, i) => (
                        <CarouselIndicator
                            number={i}
                            activeNumber={geselecteerdeFoto}
                            setGeselecteerdeFoto={setGeselecteerdeFoto}
                            key={i}
                        />
                    ))}
                </ol> */}

                <div className="carousel-inner">
                    {fotos
                    .sort(sortByName)
                    .map((foto, index) => (
                        <CarouselItem
                            foto={foto}
                            active={geselecteerdeFoto}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>

                {geselecteerdeFoto !== 1 && (
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                        onClick={() =>
                            setGeselecteerdeFoto((prev) =>
                                prev - 1 > 0 ? prev - 1 : 1
                            )
                        }
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Previous</span>
                    </a>
                )}
                {geselecteerdeFoto !== fotos.length - 1 && (
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                        onClick={() =>
                            setGeselecteerdeFoto((prev) =>
                                prev + 1 < fotos.length - 1
                                    ? prev + 1
                                    : fotos.length - 1
                            )
                        }
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="sr-only">Next</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Modal;
