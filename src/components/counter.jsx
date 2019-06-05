import React, { Component } from "react";
import { timingSafeEqual } from "crypto";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
    //tags: []
  };

  // constructor() {
  //   super();
  //   //to make this reference the compoent on event calls
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  //handleIncrement() {
  // Another way is to change this function to arrow function rather
  //  binding this on constructor
  handleIncrement = () => {
    //Send single about the change.. angular automatically detects state change
    this.setState({ value: this.state.value + 1 });
  };


  render() {
    console.log(this.props);
    return (
      <div>
        {
          /*this.props.children*/
          /* <h4>Counter #{this.props.id}</h4> */
        }
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* {this.renderTags()} */}
        <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes += this.state.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
