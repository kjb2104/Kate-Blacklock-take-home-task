import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const ProjectResult = () => {
  const { state } = useLocation();
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState(state.project.Status);
// add navigation to return to the form to add another project
  const navigate = useNavigate();
// add status change for when the checkbox is marked as complete
  const handleChange = () => {
    setChecked(true);
    setStatus("Complete");
  };

  return (
    <div>
      <h1>Result page</h1>
      <ul>
        <li>Name of Project: {state.project.Name}</li>
        <li>Owner: {state.project.Owner}</li>
        <li>Project Description: {state.project.Description}</li>
        <li>Starting Date: {state.project.Date}</li>
        <li>Status: {status}</li>
        <li>Priority level: {state.project.Priority}</li>
      </ul>
      <label>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        Mark Project as Complete
      </label>
      <br />
      <button onClick={() => navigate("/")}>Add another Project</button>
    </div>
  );
};

export default ProjectResult;
