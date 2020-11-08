import React from "react";

function CourseList({ courseData }) {
  const mapFunc = () => {
    return courseData.map((course) => (
      <div key={course["courseID"]}>
        <p>Course ID: {course["courseID"]}</p>
        <p>Course Title: {course["courseTitle"]}</p>
        <p>Course Description: {course["courseDescription"]}</p>
        <p>Course Duration: {course["courseDuration"]} days</p>
        <p>............................................</p>
      </div>
    ));
  };

  return <div>{mapFunc()}</div>;
}

export default CourseList;
