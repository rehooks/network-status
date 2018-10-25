import React from "react";
import { render } from "react-dom";
import useOnlineOffline from "./";

function App() {
  let areWeOnline = useOnlineOffline();
  return <div>{areWeOnline ? <span>Yes we are</span> : <span>Sorry! Disconnected</span>}</div>;
}

render(<App />, window.root);
