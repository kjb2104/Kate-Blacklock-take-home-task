import ProjectForm from "./components/form.tsx";
import ProjectResult from "./components/project-result.tsx";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <main className="flex flex-col">
      <header className="flex h-24 bg-light-green">
        <img src="/logo.png" height={64} className="h-16 m-auto" />
      </header>

      <Routes>
        <Route path="/" element={<ProjectForm />} />
        <Route path="/project-result" element={<ProjectResult />} />
      </Routes>
    </main>
    //  add routes for easy navigation when submitting form content
  );
}
