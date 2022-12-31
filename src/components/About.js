const About = () => {
    return (
        <>
            <div className="container-fluid p-5 about">
                <div className="row p-5">
                    <div className="col-lg-6">
                        <img className="about_img " src="about.jpg" alt="about" />
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <h1 className="about_head fs-1">About Aviation Course</h1>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames.<br />
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet,<br />
                            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;