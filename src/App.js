import "./App.css";
import { Fragment } from "react";
import Pic from "./components/picprofile";
import Name from "./components/nom";
import Addresse from "./components/addresse";
function App() {
  return (
    <Fragment>
      {" "}
      <Pic />
      <Name />
      <Addresse />
    </Fragment>
  );
}

export default App;
