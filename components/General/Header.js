import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const CarouselItem = ({ href = "/", title = "<>" }) => {
    return (
        <Link href={href}>
            <a className="nounderline d-flex justify-content-center align-items-center bg-dark p-3 text-white">
                {title.toUpperCase()}
            </a>
        </Link>
    );
};

const Header = ({
    title = "Voorne Makelaars",
    subtitle,
    lead,
    footer,
    CTA,
}) => {
    return (
        <div>
            <div className="HH_jumbotron">
                <div className="HH_overlay"></div>
                <div className="HH_inner">
                    <div className="container">
                        <h1 className="display-5">{title}</h1>
                        {subtitle && (
                            <h2 className="fw-light fst-italic">{subtitle}</h2>
                        )}

                        <hr className="my-4" />
                        {!lead && (
                            <p className="lead">
                                Voorne Makelaars biedt een complete
                                dienstverlening voor koper en verkoper:
                                Begeleiding bij de verkoop & aankoop, aanvragen
                                energielabel, onafhankelijk financieel advies,
                                taxaties, bouwkundige keuring en een
                                klusbedrijf.
                            </p>
                        )}

                        

                        {lead && <p className="lead">{capitalizeFirstLetter(lead)}</p>}

                        {CTA && (
                            <p>
                                <Link href = {CTA.href}>
                                    <a className = "btn btn-action">
                                        {capitalizeFirstLetter(CTA.text)}
                                    </a>
                                </Link>
                            </p>
                        )}

                        {!footer && (
                            <h4 className="secondary-text text-center ">
                                Aankoop Verkoop Klusbedrijf
                            </h4>
                        )}

                        {footer && (
                            <h4 className="secondary-text text-center">
                                {footer}
                            </h4>
                        )}
                    </div>
                </div>
            </div>

            <div>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    showDots={false}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={false}
                    removeArrowOnDeviceType={[
                        "superLargeDesktop",
                        "desktop",
                        "tablet",
                        "mobile",
                    ]}
                >
                    <CarouselItem href="/aanbod" title="aanbod" />
                    <CarouselItem href="/aankoopmakelaar" title="huis kopen" />
                    <CarouselItem href="/contact" title="contact" />
                    <CarouselItem
                        href="/verkoopmakelaar"
                        title="huis verkopen"
                    />
                    <CarouselItem
                        href="/makelaar/vrijstaande-woning"
                        title="vrijstaand wonen"
                    />
                    <CarouselItem
                        href="/makelaar/europarcs-poort-van-zeeland-hellevoetsluis"
                        title="recreatiewoning"
                    />
                    <CarouselItem
                        href="/waardebepaling"
                        title="waardebepaling"
                    />
                    <CarouselItem
                        href="/aanvragen/energielabel"
                        title="energielabel"
                    />
                </Carousel>
            </div>
        </div>
    );
};

const Button = ({ header = "header", href = "#" }) => (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-3">
        <Link href={href}>
            <a className="btn btn-outline-primary btn-block">{header}</a>
        </Link>
    </div>
);

export default Header;
