import { useState } from "react";
import { IProject } from "../models/Project";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

const ProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProject>({mode: "onBlur"});

  const [hasPosted, setHasPosted] = useState(false)

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IProject> = (data) => {

    navigate("/project-result", { state: { project: data } });
    setHasPosted(false)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <br />
      <label>Name of project:</label>
      <input
        placeholder="...."
        {...register("name", { required: true, maxLength: 50, minLength: 3 })}
      />
       {errors.name?.type === "required" && (
        <p role = "alert">Project Name is required</p>
      )}
         {errors.name?.type === "maxLength" && (
        <p role="alert">Project Name must be under 50 characters</p>
      )}
           {errors.name?.type === "minLength" && (
        <p role="alert">Description must be over 3 characters</p>
      )}
      <br />
      <label>Your name:</label>
      <input
        placeholder="...."
        {...register("Owner", { required: true, pattern: /[A-Za-z]/g })}
      />
       {errors.Owner?.type === "required" && (
        <p role = "alert">Your name is required</p>
      )}
        {errors.Owner?.type === "Pattern" && (
        <p role="alert">Must only include letters</p>
      )}
<br/>
      <label>Description of project:</label>
      <br />

      <input
      placeholder="...."
        {...register("description", {
          required: true,
          maxLength: 200,
          minLength: 30,
        })}
      />

      {errors.description?.type === "required" && (
        <p role="alert">Description is required</p>
      )}
      {errors.description?.type === "maxLength" && (
        <p role="alert">Description must be under 200 characters</p>
      )}
      {errors.description?.type === "minLength" && (
        <p role="alert">Description must be over 30 characters</p>
      )}
<br/>
      <label>Starting Date:</label>
      <br />
      <input
        type="date"
        {...register("date", { required: true})}
      />
        
       {errors.date?.type === "required" && (
        <p role="alert">Date is required</p>
      )}

      <br />
      <label>Status of project:</label>
      <br />
      <select {...register("Status", { required: true })}>
        <option value="Complete">Complete</option>
        <option value="Working on it">Working on it</option>
        <option value="Not started">Not started</option>
      </select>
      {errors.Status?.type === "required" && (
        <p role="alert">Status is required</p>
      )}
      <br />
      <label>Priority level</label>
      <br />
      <select {...register("Priority", { required: true })}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      {errors.Priority?.type === "required" && (
        <p role="alert">Priority field is required</p>
      )}
      <br />
      <button type="submit" disabled={hasPosted}>Submit</button>
      <br />
    </form>
  );
};

export default ProjectForm;
