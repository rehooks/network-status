import React from "react";
import { render } from "react-dom";
import useNetworkStatus from "./";

function App() {
  let connection = useNetworkStatus();
  return (
    <div>
      <div>downlink: {connection.downlink}</div>
      <div>effectiveType: {connection.effectiveType}</div>
      <div>rtt: {connection.rtt}</div>
      <div>type: {connection.type}</div>
      <div>saveData: {connection.saveData ? "yes" : "no"}</div>
    </div>
  );
}

render(<App />, window.root);
