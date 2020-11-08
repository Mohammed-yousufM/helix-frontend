import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import CourseList from "./Components/CourseList";
import CreateCourse from "./Components/CreateCourse";

function App() {
  const [create, setCreate] = useState(false);
  const [cDetails, setcDetails] = useState([]);
  const createScreen = () => {
    setCreate(!create);
  };

  useEffect(() => courseDetails(), []);
  const courseDetails = async () => {
    const res = await axios.get("http://localhost:8000/course");
    setcDetails(res.data);
  };

  return (
    <div className="App">
      <button onClick={createScreen}>Create a New Course</button>
      {create ? <CreateCourse /> : null}
      <CourseList courseData={cDetails} />
    </div>
  );
}

export default App;
