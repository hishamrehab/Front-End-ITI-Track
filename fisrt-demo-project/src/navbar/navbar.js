import React from "react"


export default class Navbar extends React.Component {
    constructor() {
        super();
        console.log("constructor");
    }

    componentDidMount() {
      console.log("from componentDidMount");
    }

    componentDidUpdate() {
      console.log("from componentDidUpdate");
    }

    componentWillUnmount() { //clean up method
      console.log("from componentWillUnmount");
    }


  render() {
    console.log("render");
    return(
      <>
        <h1>this is Navbar</h1>
        <p>Hello</p>
      </>
    )
  }
}