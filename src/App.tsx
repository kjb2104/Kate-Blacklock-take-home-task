import ProjectForm from "./components/form.tsx";
import ProjectResult from "./components/project-result.tsx";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main className="flex flex-col h-dvh bg-emerald-200">
      <header className="flex h-24 bg-emerald-300">
        <h1 className=" h-16 m-auto text-4xl font-bold text-blue-800 text-wrap">
          Project Platform
        </h1>
      </header>
      {/* add background and header colours to correspond with overall blue/emerald theme */}
      <Routes>
        <Route path="/" element={<ProjectForm />} />
        <Route path="/project-result" element={<ProjectResult />} />
      </Routes>
    </main>
    //  add routes for easy navigation when submitting form content
  );
}
