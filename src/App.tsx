<<<<<<< HEAD
import ProjectForm from "./components/form.tsx";
import ProjectResult from "./components/project-result.tsx";
import { Routes, Route } from "react-router-dom";
=======
import Form from './components/form.tsx'
import ProjectResult from './components/project-result.tsx'

>>>>>>> 36ddd4f0da9227db4e699c3bc48677bc0325d87c
export default function App() {


  return (
    <main className="flex flex-col">
      <header className="flex h-24 bg-light-green">
        <img src="/logo.png" height={64} className="h-16 m-auto" />
      </header>
<<<<<<< HEAD

      <Routes>
        <Route path="/" element={<ProjectForm />} />
        <Route path="/project-result" element={<ProjectResult />} />
      </Routes>
=======
      <Form/>
     <ProjectResult/>
    
>>>>>>> 36ddd4f0da9227db4e699c3bc48677bc0325d87c
    </main>
    //  add routes for easy navigation when submitting form content
  );
}
