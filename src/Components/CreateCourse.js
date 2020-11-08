import React, { Component } from "react";
import axios from "axios";

export class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseTitle: "",
      courseDescription: "",
      courseDuration: 0,
    };
  }

  submitFunc = async (ev) => {
    ev.preventDefault();
    console.log(
      this.state.courseTitle,
      this.state.courseDescription,
      this.state.courseDuration
    );
    try {
      const res = await axios.post("http://localhost:8000/course", this.state, {
        headers: { "Content-Type": "application/json" },
      });
      // console.log(res);
      if (res.data.rep === "success") {
        console.log("is-success");
      } else {
        console.log("try error", res);

        alert("Submission failed!\nPlease check your internet and try again!");
      }
    } catch (error) {
      console.log("catch err", error);
      alert("Submission failed!\nPlease check your internet and try again!");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitFunc}>
          <div>
            <label htmlFor="title">Course Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={(e) => {
                this.setState({ courseTitle: e.target.value });
              }}
              value={this.state.courseTitle}
            />
          </div>
          <div>
            <label htmlFor="Description">Course Description</label>
            <input
              id="Description"
              name="Description"
              type="text"
              onChange={(e) => {
                this.setState({ courseDescription: e.target.value });
              }}
              value={this.state.courseDescription}
            />
          </div>
          <div>
            <label htmlFor="Duration">Course Duration (in days)</label>
            <input
              id="Duration"
              name="Duration"
              type="number"
              onChange={(e) => {
                this.setState({ courseDuration: e.target.value });
              }}
              value={this.state.courseDuration}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateCourse;
