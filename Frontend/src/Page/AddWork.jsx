import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2'

const AddWork = () => {
    const [formData, setFormData] = useState({
        subtitle: '',
        title: '',
        liveLink: '',
        frontend: '',
        backend: '',
        technology: '',
        about: '',
        date: '',
        clientName: '',
        services: '',
        projectType: '',
        description: '',

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/project", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <section className="breadcrumb-area">
                    <div className="container">
                        <div className="breadcrumb-content" data-aos="fade-up">
                            <p>
                                <input type="text" name="subtitle" value={formData.subtitle} onChange={handleChange} placeholder="subtitle..........." />
                            </p>
                            <h1 className="section-heading">
                                <img src="src/assets/images/star-2.png" alt="Star" />
                                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title............" />
                                <img src="src/assets/images/star-2.png" alt="Star" />
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="project-details-wrap">
                    <div className="container">
                        <div data-aos="zoom-in">
                            <div className="d-flex project-infos-wrap shadow-box mb-24">
                                <img src="src/assets/images/bg1.png" alt="BG" className="bg-img" />
                                <img src="src/assets/images/icon2.png" alt="Icon" />
                                <div className="project-details-info flex-1">
                                    <h3>Technical info</h3>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Live link </span>
                                        </div>
                                        <input type="text" className="form-control" name="liveLink" value={formData.liveLink} onChange={handleChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">font-end </span>
                                        </div>
                                        <input type="text" className="form-control" name="frontend" value={formData.frontend} onChange={handleChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">back-end</span>
                                        </div>
                                        <input type="text" className="form-control" name="backend" value={formData.backend} onChange={handleChange} />
                                    </div>
                                    <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="inputGroup-sizing-default">Technology </span>
                                        </div>
                                        <input type="text" className="form-control" name="technology" value={formData.technology} onChange={handleChange} />
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div  >
                            <div className="project-details-2-img mb-24 border "  >
                                <input type="text" className="form-control  mt-3 " name="image" placeholder=" cover Image link " value={formData.image} onChange={handleChange} />
                                <img src={formData?.image} alt="upload image link not valid" className="" />
                            </div>
                        </div>
                        <div  >
                            <div className="project-about-2 d-flex shadow-box mb-24">
                                <img src="src/assets/images/bg1.png" alt="BG" className="bg-img" />
                                <div className="left-details">
                                    <img src="src/assets/images/icon3.png" alt="Icon" />
                                    <ul>
                                        <li>
                                            <p>Date</p>
                                            <h4> <input type="date" className="form-control" name="date" value={formData.date} onChange={handleChange} /></h4>
                                        </li>
                                        <li>
                                            <p>Client</p>
                                            <h4> <input type="text" className="form-control" name="clientName" value={formData.clientName} onChange={handleChange} /></h4>
                                        </li>
                                        <li>
                                            <p>Services</p>
                                            <h4> <input type="text" className="form-control" name="services" value={formData.services} onChange={handleChange} /></h4>
                                        </li>
                                        <li>
                                            <p>Project type</p>
                                            <h4> <input type="text" className="form-control" name="projectType" value={formData.projectType} onChange={handleChange} /></h4>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right-details">
                                    <h3>Description </h3>
                                    <p>
                                        <textarea name="description" rows="19" cols="76" value={formData.description} onChange={handleChange}></textarea>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg">Submit</button>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default AddWork;
