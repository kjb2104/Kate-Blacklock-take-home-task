import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const ProjectResult = () => {
  const { state } = useLocation();

  const [status, setStatus] = useState(state.project.Status);

  // add navigation to return to the form to add another project
  const navigate = useNavigate();
  // add status change for when the status is marked as complete
  const handleChange = () => {
    setStatus("Complete");
    state.project.Status = "Complete";
  };

  return (
    <div className="m-auto">
      {/* add tailwindcss styling to button and list elements */}
      <div className=" text-left items-left border-2 rounded-r border-y-sky-700 border-x-sky-700 px-5 mb-5 bg-emerald-50">
        <h1 className="py-2 mt-6 mx-8 text-4xl font-semibold text-blue-700">
          Project details:
        </h1>
        <br />
        <ul className="text-left mx-8">
          <li className="text-2x1 font-bold leading-7 text-blue-700 mx-8">
            Project Name:
          </li>
          <li className="break-word text-2x1 font-normal leading-7 text-blue-400 mx-8">
            {state.project.Name}
          </li>
          <li className="text-2x1 font-bold leading-7 text-blue-700 mx-8">
            Owner:
          </li>
          <li className="break-word text-2x1 font-normal leading-7 text-blue-400 mx-8">
            {state.project.Owner}
          </li>
          <li className="text-2x1 font-bold leading-7 text-blue-700 mx-8">
            Project Description:
          </li>
          <li className="text-2x1 font-normal leading-7 text-blue-400 mx-8">
            {state.project.Description}
          </li>
          <li className="text-2x1 font-bold leading-7 text-blue-700 mx-8">
            Starting on:
          </li>
          <li className="text-2x1 font-normal leading-7 text-blue-400 mx-8">
            {state.project.Date}
          </li>
          <li className="text-2x1 font-bold leading-7 text-blue-700 mx-8">
            Status:
          </li>
          <li className="text-2x1 font-normal leading-7 text-blue-400 mx-8">
            {status}
          </li>
          <li className="text-2x1 font-bold leading-7 text-blue-700 mx-8">
            Priority:
          </li>
          <li className="text-2x1 font-normal leading-7 text-blue-400 mx-8">
            {state.project.Priority}
          </li>
        </ul>

        {/* add a button to indicate completion in a similar style to the others */}
        <button
          className=" mx-8 text-left items-left my-8 rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          onClick={handleChange}
        >
          Mark Project as Complete ✓
        </button>

        <button
          className=" mx-8 text-left items-left my-8 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => navigate("/")}
        >
          Add another Project
        </button>
      </div>
    </div>
  );
};

export default ProjectResult;
