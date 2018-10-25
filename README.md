# `@rehooks/network-status`

> React hook for getting network-status

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/network-status
```

## Usage

```js
import useNetworkStatus from "@rehooks/network-status";

function MyComponent() {
  let connection = useNetworkStatus();
  return (
    <div>
      <div>downlink: {connection.downlink}</div>
      <div>effectiveType: {connection.effectiveType}</div>
      <div>rtt: {connection.rtt}</div>
      <div>saveData: {connection.saveData ? "yes" : "no"}</div>
    </div>
  );
}
```
