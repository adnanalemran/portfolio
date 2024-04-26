import { Link } from "react-router-dom";


const Works = () => {
    return (
        <div>
            <section className="projects-area">
                <div className="container">



                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="section-heading" data-aos="fade-up"><img src="src/assets/images/star-2.png" alt="Star" /> All Projects <img src="src/assets/images/star-2.png" alt="Star" /></h1>
                                <div className="row gap-20  ">
                                    <div data-aos="zoom-in" className="col-md-4">
                                        <div className="project-item shadow-box">
                                            <Link className="overlay-link"  to="/work-details"></Link>
                                            <img src="src/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <div className="project-img">
                                                <img src="src/assets/images/project3.jpg" alt="Project" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="project-info">
                                                    <p>mOBILE DESIGNING</p>
                                                    <h1>Seven Studio</h1>
                                                </div>
                                                <Link to="/work-details" className="project-btn">
                                                    <img src="src/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div data-aos="zoom-in" className="col-md-4">
                                        <div className="project-item shadow-box">
                                            <a className="overlay-link" href="work-details.html"></a>
                                            <img src="src/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <div className="project-img">
                                                <img src="src/assets/images/project4.jpg" alt="Project" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="project-info">
                                                    <p>Branding</p>
                                                    <h1>Raven Studio</h1>
                                                </div>
                                                <a href="work-details.html" className="project-btn">
                                                    <img src="src/assets/images/icon.svg" alt="Button" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>   <div data-aos="zoom-in" className="col-md-4">
                                        <div className="project-item shadow-box">
                                            <a className="overlay-link" href="work-details.html"></a>
                                            <img src="src/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <div className="project-img">
                                                <img src="src/assets/images/project4.jpg" alt="Project" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="project-info">
                                                    <p>Branding</p>
                                                    <h1>Raven Studio</h1>
                                                </div>
                                                <a href="work-details.html" className="project-btn">
                                                    <img src="src/assets/images/icon.svg" alt="Button" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>   <div data-aos="zoom-in" className="col-md-4">
                                        <div className="project-item shadow-box">
                                            <a className="overlay-link" href="work-details.html"></a>
                                            <img src="src/assets/images/bg1.png" alt="BG" className="bg-img" />
                                            <div className="project-img">
                                                <img src="src/assets/images/project4.jpg" alt="Project" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="project-info">
                                                    <p>Branding</p>
                                                    <h1>Raven Studio</h1>
                                                </div>
                                                <a href="work-details.html" className="project-btn">
                                                    <img src="src/assets/images/icon.svg" alt="Button" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                        



                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Works;