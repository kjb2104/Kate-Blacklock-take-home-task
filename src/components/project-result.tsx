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

      {/* add tailwindcss styling to button and list elements */}
      <div className="border-4">
      <h1 className="pt-0 mx-8 text-4xl font-semibold text-blue-700">Your project details:</h1>
      <br/>
      <ul>
        <li className="text-2x1 font-semibold leading-7 text-blue-700 mx-8">Name of Project: {state.project.Name}</li>
        <li className="text-2x1 font-semibold leading-7 text-blue-700 mx-8">Owner: {state.project.Owner}</li>
        <li className="text-2x1 font-semibold leading-7 text-blue-700 mx-8">Project Description: {state.project.Description}</li>
        <li className="text-2x1 font-semibold leading-7 text-blue-700 mx-8">Starting Date: {state.project.Date}</li>
        <li className="text-2x1 font-semibold leading-7 text-blue-700 mx-8">Status: {status}</li>
        <li className="text-2x1 font-semibold leading-7 text-blue-700 mx-8">Priority level: {state.project.Priority}</li>
      </ul>
      <label className="text-2x1 font-semibold leading-7 text-blue-700 mx-8">
            Mark Project as Complete
        <input className="ml-4"type="checkbox" checked={checked} onChange={handleChange} />
      </label>
      <br />
      <div>
      <button className=" mx-8 my-8 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => navigate("/")}>Add another Project</button>
      </div>
    </div></div>

  );
};

export default ProjectResult;
