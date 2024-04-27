

const AddWork = () => {
    return (

        <div>
            <form >

           
            <section className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content" data-aos="fade-up">
                        <p>
                            <input type="text" name="subtitle" id="" placeholder="subtitle..........." />
                        </p>
                        <h1 className="section-heading">
                            <img src="src/assets/images/star-2.png" alt="Star" />
                            <input type="text" name="title" id="" placeholder="Title............" />
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
                                <h3>Raven studio</h3>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Live link </span>
                                    </div>
                                    <input type="text" className="form-control"   />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">font-end </span>
                                    </div>
                                    <input type="text" className="form-control"   />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">back-end </span>
                                    </div>
                                    <input type="text" className="form-control"   />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Technology </span>
                                    </div>
                                    <input type="text" className="form-control"   />
                                </div>
                            </div>

                            <div className="project-details-info flex-1">
                                <h3>About</h3>
                                <p> <textarea name className="form-control" id="exampleFormControlTextarea1" rows="9"></textarea> </p>
                            </div>
                        </div>
                    </div>
                    <div className="project-details-2-img mb-24 border" data-aos="zoom-in">
                        <input type="file" className="form-control-file p-4" id="exampleFormControlFile1" />
                    </div>

                    <div data-aos="zoom-in">
                        <div className="project-about-2 d-flex shadow-box mb-24">
                            <img src="src/assets/images/bg1.png" alt="BG" className="bg-img" />
                            <div className="left-details">
                                <img src="src/assets/images/icon3.png" alt="Icon" />
                                <ul>
                                    <li>
                                        <p>Date</p>
                                        <h4> <input type="date" className="form-control" name="date" /></h4>
                                    </li>
                                    <li>
                                        <p>Client</p>
                                        <h4> <input type="text" className="form-control" name="ClientName" /></h4>
                                    </li>
                                    <li>
                                        <p>Services</p>
                                        <h4> <input type="text" className="form-control" name="Services" /></h4>
                                    </li>
                                    <li>
                                        <p>Project</p>
                                        <h4> <input type="text" className="form-control" name="ProjectType" /></h4>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-details">
                                <h3>Description </h3>
                                <p >
                                    ............................................................................................................................
                                    <textarea name="Description" className="w-100 mw-100 " rows="19"></textarea>  </p>
                            </div>
                        </div>
                    </div>    <button type="submit" className="btn btn-dark  btn-lg ">Submit </button>
                </div>
            </section>

        
            </form>
        </div>
    );
};

export default AddWork;