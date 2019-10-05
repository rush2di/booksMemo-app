import React from "react";
import ReactDOM from "react-dom";
import { InputBox } from "./inputBox";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statut: "none"
    };
    this.active = this.active.bind(this);
    this.hide = this.hide.bind(this);
  }

  hide(e) {
    e = this.setState({ statut: "hidden" });
  }

  active() {
    const active = this.state.statut === "none" ? "active" : "none";
    this.setState({ statut: active });
  }

  render() {
    const { statut } = this.state;

    return (
      <div className="App">
        <div className="blackBg">
          <p>
            You can add a book to your library by clicking on the big green
            button
          </p>
          <button onClick={this.active} className="addBtn">
            Add a Book
          </button>
        </div>
        <div>
          <InputBox statut={statut} hide={this.hide} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
