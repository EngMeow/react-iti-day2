import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import {Navbar} from "./components/Navbar";
import {Slider} from "./components/Slider";
import { useState } from "react";
import { Todos } from "./components/todos";
import { Footer } from "./components/Footer";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const removeStudent = (id) => {
    const updatedStudents = students.filter((student, index) => index !== id);
    setStudents(updatedStudents);
  };
  return (
    <>
        <Navbar></Navbar>
        <Slider></Slider>
        <StudentForm addStudent={addStudent} />
        <StudentTable listOfStudents={students} removeStudent={removeStudent} />
        {/* <Todos></Todos> */}
        <Footer></Footer>
    </>
  );
}

export default App;
