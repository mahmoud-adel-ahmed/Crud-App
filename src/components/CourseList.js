import React, { Component } from "react";

export class CourseList extends Component {
  state = {
    isEdit: false,
  };

  constructor(props) {
    super(props);
    this.input = null;
    this.inputCb = (val) => {
      this.input = val;
    };
  }

  isEdit = () => {
    this.setState({ isEdit: !this.state.isEdit });
  };

  updateCourseVal = (e) => {
    e.preventDefault();
    this.props.editCourses(this.props.index, this.input.value);
    this.isEdit();
  };

  render() {
    let { name, filterCourses, index } = this.props;
    return (
      <>
        {this.state.isEdit ? (
          <form className="form" onSubmit={this.updateCourseVal}>
            <input
              type="text"
              id="update"
              defaultValue={name}
              placeholder="update course"
              ref={this.inputCb}
            />
            <button className="update" type="submit">
              update course
            </button>
          </form>
        ) : (
          <div className="pair">
            <h3>{name}</h3>
            <div>
              <button className="del" onClick={() => filterCourses(index)}>
                remove course
              </button>
              <button className="edit" onClick={this.isEdit}>
                edit course
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
