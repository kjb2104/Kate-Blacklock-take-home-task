import { useState } from "react";
import { IProject } from "../models/Project";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
  const [newProject, setNewProject] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newDate, setNewDate] = useState("");
  const [hasPosted, setHasPosted] = useState(false);

  const navigate = useNavigate();

  //   submission event handler creates a new instance of the interface using input set in state
  const handleSubmit = () => {
    setHasPosted(true);

    const Project: IProject = {
      name: newProject,
      description: newDescription,
      date: newDate,
    };

    navigate("/project-result", { state: { project: Project } });

    setHasPosted(false);
  };

  // useNavigate from react router navigates to the new page with the details acquired from the form

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newProject">Project Name</label>
      <br />
      <input
        id="newProject"
        name="project-name"
        type="text"
        onChange={(e) => setNewProject(e.target.value)}
      />
      <br />
      <label htmlFor="newDescription">Description</label>
      <br />
      <textarea
        id="newDescription"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      ></textarea>
      <br />
      <label htmlFor="newDate">Starting Date</label>
      <br />
      <input
        id="date-input"
        name="date"
        type="date"
        onChange={(e) => setNewDate(e.target.value)}
      />
      <br />
      <button type="submit" disabled={newProject.length === 0 || hasPosted}>
        Submit Project
      </button>
    </form>
  );
};

export default ProjectForm;
