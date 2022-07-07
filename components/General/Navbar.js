const VM_Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://voornemakelaars.nl/img/VM-logo-liggend.svg"
                        alt="Voorne Makelaars Logo"
                        height="32"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="/aanbod"
                                title="Bekijk hier de woningen die te koop zijn."
                            >
                                Aanbod
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/verkoopmakelaar" title="U wilt uw woning verkopen?">
                                Verkopen
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aankoopmakelaar" title="U wilt een woning kopen?">
                                Kopen
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog" title="Lees meer informatie op onze blog">
                                Informatie
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact" title="Neem contact met ons op">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default VM_Navbar;
