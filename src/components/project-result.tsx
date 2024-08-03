import { useLocation } from "react-router-dom";

const ProjectResult = () => {
  const { state } = useLocation();
  console.log(state);

  return (
    <div>
      <h1>Result page</h1>
      <ul>
        <li>Name of Project:{state.project.name}</li>
        <li>Owner:{state.project.Owner}</li>
        <li>Project Description:{state.project.description}</li>
        <li>Starting Date:{state.project.date}</li>
        <li>Status: {state.project.Status}</li>
        <li>Priority level: {state.project.Priority}</li>
      </ul>
    </div>
  );
};

export default ProjectResult;
