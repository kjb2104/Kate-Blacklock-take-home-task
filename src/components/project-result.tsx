import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProjectResult = () => {
  const { state } = useLocation();

  const [status, setStatus] = useState(state.project.Status)

  const handleChange = () => {

    setStatus('Complete')
  }
  

  return (
    <div>
      <h1>Result page</h1>
      <ul>
        <li>Name of Project:{state.project.Name}</li>
        <li>Owner:{state.project.Owner}</li>
        <li>Project Description:{state.project.Description}</li>
        <li>Starting Date:{state.project.Date}</li>
        <li>Status: {status}</li>
        <li>Priority level: {state.project.Priority}</li>
      </ul>
      <label>
        <input type="checkbox" onChange={handleChange}/>
        Mark Project as complete
      </label>
    </div>
  );
};

export default ProjectResult;
