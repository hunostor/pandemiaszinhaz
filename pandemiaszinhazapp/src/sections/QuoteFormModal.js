function QuoteFormModal() {
  return (
    <div className="modal fade" id="quoteForm" tabIndex="-1" role="dialog" aria-labelledby="quoteForm" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div className="modal-content p-md-3">
        <div className="modal-header border-0">
          <h4 className="modal-title">Request a <span className="text-primary">quote</span></h4>
          <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          {/* https://www.tutorialrepublic.com/faq/autoplay-youtube-video-inside-bootstrap-modal.php */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fJONdKr6XNE?si=Qxql32T0VhD5hJkQ&amp;controls=0&amp;start=4543" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <form action="#">
            <div className="row gy-3">
              <div className="col-lg-6">
                <label className="form-label text-sm" htmlFor="firstname">First name<span className="text-primary ms-1">&#42;</span></label>
                <input className="form-control" id="firstname" type="text" placeholder="Enter your first name" required />
              </div>
              <div className="col-lg-6">
                <label className="form-label text-sm" htmlFor="lastname">Last name<span className="text-primary ms-1">&#42;</span></label>
                <input className="form-control" id="lastname" type="text" placeholder="Enter your last name" required />
              </div>
              <div className="col-lg-12">
                <label className="form-label text-sm" htmlFor="email">Email address<span className="text-primary ms-1">&#42;</span></label>
                <input className="form-control" id="email" type="email" placeholder="Enter your email address" required />
              </div>
              <div className="col-lg-6">
                <label className="form-label text-sm" htmlFor="phone">Phone number <small className="fw-light small text-gray">optional</small></label>
                <input className="form-control" id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <div className="col-lg-6">
                <label className="form-label text-sm" htmlFor="projecttype">Project type<span className="text-primary ms-1">&#42;</span></label>
                <input className="form-control" id="projecttype" type="text" placeholder="Enter your project type" required />
              </div>
              <div className="col-lg-6">
                <label className="form-label text-sm" htmlFor="budget">Estimated budget<span className="text-primary ms-1">&#42;</span></label>
                <input className="form-control" id="budget" type="text" placeholder="Enter your estimated budget" required /><small className="form-text text-gray-500 ms-3">Project budget in $</small>
              </div>
              <div className="col-lg-6">
                <label className="form-label text-sm" htmlFor="timeframe">Time frame<span className="text-primary ms-1">&#42;</span></label>
                <input className="form-control" id="timeframe" type="text" placeholder="Maximum time for the project" required />
              </div>
              <div className="col-lg-12">
                <label className="form-label text-sm" htmlFor="projectdetail">Project details<span className="text-primary ms-1">&#42;</span></label>
                <textarea className="form-control" id="projectdetail" rows="5" placeholder="Provide a short brief about your project" required></textarea>
              </div>
              <div className="col-lg-12">
                <button className="btn btn-primary" type="submit">Submit your request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default QuoteFormModal;