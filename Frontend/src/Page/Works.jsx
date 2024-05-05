import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Works = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/project`)
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);



    return (
        <div>
            <section className="projects-area">
                <div className="container">



                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="section-heading" data-aos="fade-up"><img src="src/assets/images/star-2.png" alt="Star" /> All Projects <img src="src/assets/images/star-2.png" alt="Star" /></h1>
                            <div className="row gap-20  ">

                                {projects.map((project) => (



                                    <div key={project.id} data-aos="zoom-in" className="col-md-4">

                                        <div className="project-item shadow-box">
                                            <Link className="overlay-link" to="/work-details"></Link>
                                            <img src={project.image} alt="BG" className="bg-img" />
                                            <div className="project-img">
                                                <img src={project.image} alt="Project" />
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="project-info">
                                                    <p>{project?.subtitle}</p>
                                                    <h1>{project?.title}</h1>
                                                </div>
                                                <Link to="/work-details" className="project-btn">
                                                    <img src="src/assets/images/icon.svg" alt="Button" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                ))}









                            </div>





                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Works;