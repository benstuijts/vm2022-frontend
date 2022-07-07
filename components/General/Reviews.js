const Review = () => {
    return (
        <section className="container mt-5 mb-5" id="reviews-voorne-makelaars">
            <h5>Ervaringen</h5>
            <h2>Onze klanten aan het woord…</h2>
            <hr />
            <div className="row mt-5">
                <ReviewCard>
                    Ben is een toegankelijke makelaar met veel begrip voor
                    persoonlijke wensen en eigen verwachtingen, is prettig in
                    omgang en wanneer nodig snelle en kordate afhandeling.
                    Kortom een makelaar om mee te werken.
                </ReviewCard>
                <ReviewCard>
                Voorne Makelaars (Ben), heeft onze vakantie woning binnen 2 maanden verkocht voor een prijs die zelfs nog hoger lag dan we hadden verwacht. De transactie verliep soepel met de notaris en de stukken zijn tijdig toegezonden. De opvolging en bereikbaarheid ook prima! Kortom: Ben bedankt voor de goede afwikkeling en begeleiding.
                </ReviewCard>
                <ReviewCard>
                Ben Stuijts was onze aankoopmakelaar bij het kopen van ons eerste huis. Omdat het in deze tijd en als starter soms lastig is om een huis te vinden, hebben wij Ben ingeschakeld.
                Met Ben zijn kennis en kunde hebben wij gelukkig snel een huis gevonden! Super meedenkend en eerlijk. 
                </ReviewCard>
            </div>

        </section>
    );
};

const ReviewCard = ({ children }) => (
    <div className="col-lg-4 col-md-12">
        <div className="card p-3">
            <img
                src="https://seofy.nl/wp-content/uploads/2021/12/Review-Seofy-marketing.png"
                className="w-25"
            />
            <div className="row mt-3">
                <div className="col-2">
                    <img src="/img/quote.png" className="img-fluid" />
                </div>
                <div className="col-10">
                    <blockquote className="blockquote">
                        <p className="small">{children}</p>
                    </blockquote>
                </div>
            </div>
            <div>
                <img src = "https://seofy.nl/wp-content/uploads/2021/12/Google-review-.png"
                    className = "float-end"
                    height = "32"
                />
            </div>
        </div>
    </div>
);

export default Review;
