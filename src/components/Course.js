const Course = () => {
    return (
        <>
            <div className="container-fluid p-5">
                <div className="row gx-5 p-3 ">
                    <div className="col-lg-12 text-center fs-1 about_head mb-5">Courses</div>
                    <div className="col-lg-6 mb-5">
                        <div className="card shadow round ">
                            <div className="header">
                                <img src="card1.jpeg" alt="img" className="cimg" />
                            </div>
                            <div className="card-body p-4">
                                <h6 className="mb-4 fw-bold">CPL(COMMERCIAL PILOT LICENSE)Course</h6>
                                <p className="para">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                    Quisque sit amet est et sapien ullamcorper pharetra.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow round">

                            <img src="card2.jpeg" alt="img" className="cimg" />

                            <div className="card-body p-4">
                                <h6 className="mb-4 fw-bold">ATPL Courses</h6>
                                <p className="para">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                    Quisque sit amet est et sapien ullamcorper pharetra.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card shadow round">

                            <img src="card3.jpg" alt="img" className="cimg" />

                            <div className="card-body p-4 mb-3">
                                <h6 className="mb-4 fw-bold">Flying School Guidance</h6>
                                <p className="para">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                                    Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                    Quisque sit amet est et sapien ullamcorper pharetra.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container mb-5 pb-3">
                <div className="row">
                    <div className="col-lg-12 text-center fs-1 about_head mb-4">Important Dates</div>
                </div>
                <div className="col-lg-12">
                    <table className="table">
                        <thead className="bg-secondary text-white">
                            <tr>
                                <th className="thead1 p-2">Activity</th>
                                <th className="thead2 p-2">Dates</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="thead1">DGC Exam Date</td>
                                <td className="thead2">June 06, 2023</td>
                            </tr>
                            <tr>
                                <td className="thead1">Applications open</td>
                                <td className="thead2">June 06, 2023</td>
                            </tr>
                            <tr>
                                <td className="thead1">Last Date to Submit Applications</td>
                                <td className="thead2">June 06, 2023</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default Course;
