
import { useLocation } from "react-router-dom";

const ProjectResult = () => {
  const { state } = useLocation();

  // basic rendering of the details acquired from the form

  return (
    <div>
      <h1>Result page</h1>
      <ul>
        <li>{state.project.name}</li>
        <li>{state.project.description}</li>
        <li>{state.project.date}</li>
      </ul>
    </div>
  );
};

export default ProjectResult;


