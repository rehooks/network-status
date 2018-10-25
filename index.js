"use strict";
let { useState, useEffect } = require("react");

function getNetworkState() {
  return navigator.onLine;
}

function useOnlineOffline() {
  let [isOnline, setIsOnline] = useState(getNetworkState());

  function handleNetworkChange() {
    setIsOnline(getNetworkState());
  }
  useEffect(() => {
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);
    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  });

  return isOnline;
}

module.exports = useOnlineOffline;
