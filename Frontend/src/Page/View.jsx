import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./style.css"
const View = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/project`)
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    const handleDelete = (id) => {
        // Make DELETE request to server
        fetch(`http://localhost:5000/project/${id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                })




            })
            .catch((error) => {
                console.error("Error deleting project:", error);
            });
    };



    return (

        <div className="text-white">
            <table className="project-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Sub Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((project) => (
                        <tr className="project-row" key={project.id}>
                            <td>{project.title}</td>
                            <td>{project.subtitle}</td>
                            <td>{project.description}</td>
                            <td>
                                <button className="delete-btn" onClick={() => handleDelete(project._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>


    );
};

export default View;
