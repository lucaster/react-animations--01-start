import React, { Component } from "react";
import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    modalOpen: false
  };
  showModal = () => {
    this.setState({
      modalOpen: true
    });
  };
  closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {
          this.state.modalOpen &&
          <div>
            <Modal
              show={this.state.modalOpen}
              closed={this.closeModal}
            />
            <Backdrop
              show={this.state.modalOpen}
            />
          </div>
        }
        <button
          className="Button"
          onClick={this.showModal}
        >
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
