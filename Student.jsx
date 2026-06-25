import React, { Component } from "react";

class Student extends Component {
  constructor() {
    super();

    this.state = {
      name: "Pranesh",
      course: "React JS"
    };

    console.log("1. Constructor Called");
  }

  componentDidMount() {
    console.log("3. Component Did Mount");
  }

  componentDidUpdate() {
    console.log("5. Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  changeValue = () => {
    this.setState({
      name: "React Developer"
    });
  };

  render() {
    console.log("2. Render Method Called");

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Class Component Example</h1>

        <h2>Name : {this.state.name}</h2>
        <h2>Course : {this.state.course}</h2>

        <button onClick={this.changeValue}>
          Change Name
        </button>
      </div>
    );
  }
}

export default Student;