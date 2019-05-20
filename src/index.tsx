import * as React from "react"
import * as reactDom from "react-dom"
import Routes from "./Routes"
import 'babel-polyfill'

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  )
}

const rootElement = document.getElementById("root");
reactDom.render(<App />, rootElement);
