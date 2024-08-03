
import ProjectForm from "./components/form.tsx";
import ProjectResult from "./components/project-result.tsx";
import { Routes, Route } from "react-router-dom";

export default function App() {


  return (
    <main className="flex flex-col">
      <header className="flex h-24 bg-purple-200">
        <h1 className="pt-0 mx-56 text-5xl font-semibold text-blue-700">Project Management Platform</h1>
      </header>

      <Routes>
        <Route path="/" element={<ProjectForm />} />
        <Route path="/project-result" element={<ProjectResult />} />
      </Routes>
    </main>
    //  add routes for easy navigation when submitting form content
  );
}
