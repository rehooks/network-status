# `@rehooks/online-offline`

> React hook for OnlineOffline

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/online-offline
```

## Usage

```js
import useOnlineOffline from "@rehooks/online-offline";

function MyComponent() {
  let isOnline = useOnlineOffline();
  return <div>{isOnline ? <span>yes we are online</span> : <span>Sorry, Disconnected</span>}</div>;
}
```
