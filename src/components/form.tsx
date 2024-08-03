import { useState } from "react";
import { IProject } from "../models/Project";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProject>({ mode: "onBlur" });

  const [hasPosted, setHasPosted] = useState(false);

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IProject> = (data) => {
    navigate("/project-result", { state: { project: data } });
    setHasPosted(false);
  };

  //use react hook form SubmitHandler to access the data when the form is submitted

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <div className="mx-8">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Submit a new Project
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed to other users.
          </p>
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Name of project:
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                placeholder="..."
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                {...register("Name", {
                  required: true,
                  maxLength: 50,
                  minLength: 3,
                })}
              />
<div>
              {errors.Name?.type === "required" && (
                <p
                  className="block text-sm font-medium leading-6 text-red-600"
                  role="alert"
                >
                  Project Name is required
                </p>
              )}
              {errors.Name?.type === "maxLength" && (
                <p role="alert"  className="block text-sm font-medium leading-6 text-red-600">Project Name must be under 50 characters</p>
              )}
              {errors.Name?.type === "minLength" && (
                <p role="alert"  className="block text-sm font-medium leading-6 text-red-600">Project Name must be over 3 characters</p>
              )}
              </div>
            </div>
          </div>
          {/* add error handling to the form validation to inform the user what the specific issue is  */}
          <br />
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Your name:
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="...."
                {...register("Owner", {
                  required: true,
                  pattern: /^[A-Za-z- ]+$/gi,
                })}
              />
              {errors.Owner?.type === "required" && (
                <p role="alert">Your name is required</p>
              )}
              {errors.Owner?.type === "pattern" && (
                <p role="alert">Must only include letters</p>
              )}
            
            </div>
          </div>
          <br />
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Description of project:
          </label>
          <br />
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="...."
                {...register("Description", {
                  required: true,
                  maxLength: 200,
                  minLength: 30,
                })}
              />

              {errors.Description?.type === "required" && (
                <p role="alert">Description is required</p>
              )}
              {errors.Description?.type === "maxLength" && (
                <p role="alert">Description must be under 200 characters</p>
              )}
              {errors.Description?.type === "minLength" && (
                <p role="alert">Description must be over 30 characters</p>
              )}
            </div>
          </div>
          <br />
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Starting Date:
          </label>
          <br />
          <div className="mt-2">
            {/* <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"> */}
              <input type="date" {...register("Date", { required: true })} />

              {errors.Date?.type === "required" && (
                <p role="alert">Date is required</p>
              )}
            </div>
          <br />
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Status of project:
          </label>
          <br />
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <select
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                {...register("Status", { required: true })}
              >
                <option value="Complete">Complete</option>
                <option value="Working on it">Working on it</option>
                <option value="Not started">Not started</option>
              </select>
              {errors.Status?.type === "required" && (
                <p role="alert">Status is required</p>
              )}
            </div>
          </div>
          <br />
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Priority level
          </label>
          <br />
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <select
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                {...register("Priority", { required: true })}
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              {errors.Priority?.type === "required" && (
                <p role="alert">Priority field is required</p>
              )}
            </div>
          </div>
          <br />

          <button
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
            disabled={hasPosted}
          >
            Submit
          </button>

          <br />
        </div>
      </div>
      </div>
    </form>
  );
};

export default ProjectForm;
