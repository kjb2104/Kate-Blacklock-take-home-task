import { useState } from "react";
import { IProject } from "../models/Project";


const Form = () => {


    const [newProject, setNewProject] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newDate, setNewDate] = useState('');
    const [projectDetails, setProjectDetails] = useState({})
    const [hasPosted, setHasPosted] = useState(false)


    const handleSubmit = () => {
     
        
        setHasPosted(true)


        const Project: IProject = {
            name: newProject,
        description: newDescription,
        date: newDate,
            };

       setProjectDetails(Project)
    
       setHasPosted(false)


    }

return(
    <form onSubmit={handleSubmit}>
    <label htmlFor="newProject">Project Name</label>
    <br/>
    <input
          id="newProject"
          name="project-name"
          type="text"
      onChange={(e) => setNewProject(e.target.value)}
    />
    <br/>
    <label htmlFor="newDescription">Description</label>
    <br/>
    <textarea
      id="newDescription"
      value={newDescription}
      onChange={(e) => setNewDescription(e.target.value)}
    ></textarea>
    <br/>
    <label htmlFor="newDate">Starting Date</label>
    <br/>
    <input id="date-input" name="date" type="date" onChange={(e) => setNewDate(e.target.value)}
      />
    <br/> 
    <button type="submit" disabled={newProject.length === 0 || hasPosted}>
      Submit Project
    </button>
  </form>
)

}

export default Form