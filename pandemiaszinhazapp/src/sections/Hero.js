function Hero() {
  return (
    <section className="hero hero-home with-pattern d-flex align-items-center py-5">
      <div className="container py-5 mt-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-5 mb-md-0">
            <h1 className="mb-3">Great <span className="text-primary">companies </span>are built on great products</h1>
            <p className="text-muted">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p><a className="video-btn d-flex align-items-center" href="#!" data-video-id="B6uuIHpFkuo"><span className="video-btn-icon"><i className="fas fa-play"></i></span>
              <div className="ms-3"><span className="text-muted d-block line-height-sm">Watch</span><strong className="text-uppercase text-dark">Intro Video</strong></div></a>
          </div>
          <div className="col-md-5 ml-auto">
            <div className="img-gradient img-gradient-right"><img className="img-fluid shadow rounded" src="img/hero-img.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;