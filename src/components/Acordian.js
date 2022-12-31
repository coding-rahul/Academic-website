const Acordian = () => {
    return (
        <>
            <div className="container-fluid p-5 pcontainer mb-2">
                <div className="row ">
                    <div className="col-lg-12 text-center fs-1 about_head mb-5">FAQs</div>

                    <div class="accordion accordion-flush">
                        <div class="accordion-item mb-4 ">
                            <h2 class="accordion-header" >
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                    This is the first item's accordion body,  Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4 rounded">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                                    This is the Second item's accordion body, Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div class="accordion-item mb-4 ">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" >
                                    This is the third item's accordion body,  Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-lg-10 ">
                        <h2 className="fs-3 about_head mb-3">Do you want to start a career in aviation?</h2>
                        <h6 className="para text-muted">Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</h6>
                    </div>
                    <div className="col-lg-2">
                        <button className="btn btn-danger btn-sm font-monospace btm1">APPLY FOR EXAM</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Acordian;