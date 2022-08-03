import React, { Component } from "react";
import { createRef } from "react";

export class FormList extends Component {
  constructor(props) {
    super(props);
    this.inputFocus = createRef();
  }

  componentDidMount() {
    this.inputFocus.current.focus();
  }

  render() {
    let { updateCourse, current, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="add course"
          name="course"
          value={current}
          onChange={updateCourse}
          ref={this.inputFocus}
        />
        <button className="add" type="submit">
          add course
        </button>
      </form>
    );
  }
}
