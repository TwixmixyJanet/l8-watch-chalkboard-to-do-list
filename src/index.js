import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Chalkboard extends Component {
  state = {
    chalk: "",
    notes: []
  };

  updateChalk = (event) => {
    this.setState({ chalk: event.target.value });
  };

  updateNotes = (event) => {
    event.preventDefault();
    const newNotes = this.state.notes.slice();
    newNotes.push(this.state.chalk);

    this.setState({
      chalk: "",
      notes: newNotes
    });
  };

  render() {
    const notes = this.state.notes.map((note) => <li>{note}</li>);
    return (
      <div className="App">
        <form onSubmit={this.updateNotes}>
          <input
            type="text"
            placeholder="type here!"
            value={this.state.chalk}
            onChange={this.updateChalk}
          />
          <input type="submit" />
        </form>
        <div className="board">
          <h1 className="chalk">{this.state.chalk}</h1>
        </div>
        <ul className="notes">{notes}</ul>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chalkboard />, rootElement);
