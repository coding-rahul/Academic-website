import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <>
            <Carousel
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                className="text-white"
            >
                <div>
                    <img src="aero5.webp" className="slider position-relative" alt="car1" />
                    <span className="position-absolute top-50 start-0 px-5 ">
                        <h1 className="fs">Wants to be a pilot</h1>
                        <p>Enroll for Apl and CTPL coaching.</p>
                        <button className="btn btn-sm btn-danger">GUARANTEED SUCCESS</button>
                    </span>
                </div>
                <div>
                    <img src="cardn1.webp" className="slider position-relative" alt="car1" />
                    <span className="position-absolute top-50 start-0 px-5 ">
                        <h1 className="fs">Wants to be a pilot</h1>
                        <p>Enroll for Apl and CTPL coaching.</p>
                        <button className="btn btn-sm btn-danger">GUARANTEED SUCCESS</button>
                    </span>
                </div>
                <div>
                    <img src="card2.jpeg" className="slider position-relative" alt="car1" />
                    <span className="position-absolute top-50 start-0 px-5 ">
                        <h1 className="fs">Wants to be a pilot</h1>
                        <p>Enroll for Apl and CTPL coaching.</p>
                        <button className="btn btn-sm btn-danger">GUARANTEED SUCCESS</button>
                    </span>
                </div>

            </Carousel>
        </>
    )
}
export default Slider;