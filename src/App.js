import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";

class App extends Component {
  state = {
    modalOpen: void 0,
    showBlock: false
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
        <div>
          <button
            className="Button"
            onClick={() =>
              this.setState(prevState =>
                ({ showBlock: !prevState.showBlock })
              )
            }
          >
            Toggle
          </button>
          <br />
          <Transition
            // in: similar to *ngIf. exp change will trigger state change (exited -> entering -> entered -> exiting -> exited)
            in={this.state.showBlock}
            // time to go from entering to entered and from exiting to exited
            // you actually animate entering -> entered and exiting -> exited
            timeout={300}
            mountOnEnter
            unmountOnExit
          >
            {
              // paint the element based on the transition state state
              state => (
                <div
                  style={{
                    backgroundColor: 'red',
                    width: 100,
                    height: 100,
                    margin: 'auto', /* centered horizontally */
                    opacity: state === 'exiting' ? 0 : 1,
                    transition: 'opacity 1s ease-out'
                  }}
                >
                </div>
              )
            }
          </Transition>
        </div>
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
