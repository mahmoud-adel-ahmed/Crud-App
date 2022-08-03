import React, { Component } from "react";
import { CourseList } from "./components/CourseList";
import { FormList } from "./components/FormList";
import { courses } from "./courses";

class App extends Component {
  state = {
    courses,
    current: "",
  };

  filterCourses = (index) => {
    let { courses } = this.state;
    courses.splice(index, 1);
    this.setState({
      courses,
    });
  };

  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  handleSubmit = (e) => {
    let { courses, current } = this.state;
    if (e.target.course.value) {
      courses.push({ name: current });
      this.setState({
        courses,
        current: "",
      });
    }
    e.preventDefault();
  };

  editCourses = (index, newValue) => {
    let { courses } = this.state;
    let course = courses[index];
    course["name"] = newValue;
    this.setState({ courses });
  };

  render() {
    let { courses, current } = this.state;
    return (
      <div className="courses">
        <div className="add-courses">
          <h2>add courses</h2>
        </div>
        <FormList
          updateCourse={this.updateCourse}
          handleSubmit={this.handleSubmit}
          current={current}
        />
        {courses.length ? (
          courses.map((course, index) => {
            return (
              <CourseList
                {...course}
                key={index}
                index={index}
                filterCourses={this.filterCourses}
                editCourses={this.editCourses}
              />
            );
          })
        ) : (
          <div className="empty">
            <p>all courses are deleted</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
