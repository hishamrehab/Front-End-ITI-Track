import React from "react";

export default class Navbar
  extends React.Component
{
  constructor() {
    super();
    console.log(
      "constructor",
    );

    this.state =
      {
        name: "hisham",
        title:
          "Devleopre",
      };
  }

  componentDidMount() {
    console.log(
      "from componentDidMount",
    );
  }

  componentDidUpdate() {
    console.log(
      "from componentDidUpdate",
    );
  }

  // componentWillUnmount() { //clean up method
  //   console.log("from componentWillUnmount");
  // }
 changeName=() => {
  this.setState({name: "ahmed"})
 }


  render() {
    console.log(
      "render",
    );
    return (
      <>
        <h1>
          My Name is{" "}
          {
            this.state.name
          }
        </h1>
        <button onClick={()=> {
      this.changeName()
        }}>
          Change Name
        </button>
      </>
    );
  }
}
