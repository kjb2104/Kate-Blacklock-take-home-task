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
    if(!checked){
    setStatus("Complete");
    }
    else{
      setStatus(state.project.Status)
    }
  };

  return (
    <div className="flex flex-col text-left items-left mx-8">
      {/* add tailwindcss styling to button and list elements */}
      <div className="text-left items-left mx-8 border-2 rounded-r border-y-sky-700 border-x-sky-700 px-5 mb-5 bg-emerald-50">
        <h1 className="py-2 mt-6 mx-8 text-4xl font-semibold text-blue-700">
          Project details:
        </h1>
        <br />
        <ul className="text-left mx-8">
          <li className="text-2x1 font-bold leading-7 text-blue-700 mx-8">
            Project Name:
          </li>
          <li className="text-2x1 font-normal leading-7 text-blue-400 mx-8">
            {state.project.Name}
          </li>
          <li className="text-2x1 font-bold leading-7 text-blue-700 mx-8">
            Owner:
          </li>
          <li className="text-2x1 font-normal leading-7 text-blue-400 mx-8">
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
        <br />

{/* Add styling to the checkbox and allow to check and uncheck the box with relevant status changes */}
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="check"
          >
            <input
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-sky-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
              id="check"
              checked={checked}
              onChange={ () => {
                setChecked(!checked)
                handleChange()
              }}
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            className="mt-px font-bold text-blue-700 cursor-pointer select-none"
            htmlFor="check"
          >
            Mark as Complete
          </label>
        </div>
        <br />
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
