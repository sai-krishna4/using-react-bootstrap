import React, { Component } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      currentStep: 0,
      finalStep: 1,
      inputListWithSteps: [
        {
          step: 0,
          controls: {
            firstName: {
              elementType: "text",
              label: "First Name",
              placeholder: "Enter First Name",
              value: ""
            },
            lastName: {
              elementType: "text",
              label: "Last Name",
              placeholder: "Enter Last Name",
              value: ""
            },
            email: {
              elementType: "email",
              label: "Email",
              placeholder: "Enter Email",
              value: ""
            }
          }
        },
        {
          step: 1,
          controls: {
            password: {
              elementType: "password",
              label: "Password",
              placeholder: "Enter Password",
              value: ""
            },
            address: {
              elementType: "text",
              label: "Address",
              placeholder: "Enter Address",
              value: ""
            },
            country: {
              elementType: "text",
              label: "Country",
              placeholder: "Enter Country",
              value: ""
            }
          }
        },
        {
          step: 1,
          controls: {
            password: {
              elementType: "password",
              label: "Password",
              placeholder: "Enter Password",
              value: ""
            },
            address: {
              elementType: "text",
              label: "Address",
              placeholder: "Enter Address",
              value: ""
            },
            country: {
              elementType: "text",
              label: "Country",
              placeholder: "Enter Country",
              value: ""
            }
          }
        }
      ]
    };
  }
  moveNext = () => {
    this.setState(prevState => {
      if (prevState.currentStep !== prevState.finalStep) {
        return {
          currentStep: prevState.currentStep + 1
        };
      }
    });
  };
  movePrevious = () => {
    this.setState(prevState => {
      if (prevState.currentStep !== 0) {
        return {
          currentStep: prevState.currentStep - 1
        };
      }
    });
  };
  controlChangeHandler = (event, controlName, stepno) => {
    console.log(event.target.value, controlName, stepno);
    console.log("this.state.inputListWithSteps", this.state.inputListWithSteps);
    const getCurrentStepIndex = this.state.inputListWithSteps.findIndex(
      x => x.step == stepno
    );
    console.log(this.state.inputListWithSteps[getCurrentStepIndex].controls);

    const currentControl = {
      ...this.state.inputListWithSteps[getCurrentStepIndex].controls
    };
    const updatedControl = {
      ...currentControl,
      [controlName]: {
        ...currentControl[controlName],
        value: event.target.value
      }
    };
    const copyInputList = [...this.state.inputListWithSteps];
    copyInputList[getCurrentStepIndex].controls = updatedControl;
    console.log("copyInputList", copyInputList);
    this.setState({ inputListWithSteps: copyInputList });
  };

  render() {
    const { inputListWithSteps, currentStep } = this.state;
    console.log(currentStep);
    const currentControls = inputListWithSteps[currentStep];
    const currentSteps = [];
    for (let key in currentControls.controls) {
      currentSteps.push({
        id: key,
        step: currentControls.step,
        config: currentControls.controls[key]
      });
    }
    const currentForm = currentSteps.map(control => (
      <div class="form-group" key={control.id}>
        <label for="exampleInputEmail1">{control.config.label}</label>
        <input
          type={control.config.elementType}
          class="form-control"
          placeholder={control.config.placeholder}
          onChange={e => this.controlChangeHandler(e, control.id, control.step)}
        />
      </div>
    ));
    return (
      <div className="container-fluid">
        {currentForm}
        <div className="d-flex justify-content-center">
          <button class="btn btn-sm btn-primary mr-2" onClick={e => this.movePrevious()}>
            {" "}
            Previous
          </button>
          <button class="btn btn-sm btn-primary" onClick={e => this.moveNext()}>
            {" "}
            Next
          </button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
