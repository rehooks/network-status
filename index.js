"use strict";
let { useState, useEffect } = require("react");

function getConnection() {
  return navigator.connection || navigator.mozConnection || navigator.webkitConnection;
}

function useNetworkStatus() {
  let [connection, updateNetworkConnection] = useState(getConnection());

  function updateConnectionStatus() {
    updateNetworkConnection(getConnection());
  }
  useEffect(() => {
    connection.addEventListener("change", updateConnectionStatus);
    return () => {
      connection.removeEventListener("change", updateConnectionStatus);
    };
  });

  return connection;
}

module.exports = useNetworkStatus;
