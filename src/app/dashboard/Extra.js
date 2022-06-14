import React from "react";

class Todo extends React.Component {
  state = {
    nameOfList: "",
    lists: []
  };

  render() {
    console.log(this.state);
    console.log(this.values);
    return (
      <div>
        {/* <h1>Lists</h1> */}
        <input
          type="text"
          value={this.state.nameOfList}
          onChange={this.handleChange.bind(this)}
          name="nameofList"
        />
        <button onClick={this.handleAddClick.bind(this)}>+</button>
        <ul>
          {this.state.lists.map((data, key) => (
            <li key={key}>{data}</li>
          ))}
        </ul>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      nameOfList: e.target.value
    });
  }

  handleAddClick() {
    if (!this.state.nameOfList.length) {
      return;
    }
    this.setState({
      nameOfList: "",
      lists: [...this.state.lists, this.state.nameOfList]
    });
  }
}

export default Todo;
