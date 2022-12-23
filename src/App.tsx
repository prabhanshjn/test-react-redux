import React from "react"
import { Provider } from "react-redux"
import store from "./Redux/reducers/rootReducer"
import { BrowserRouter } from "react-router-dom"
import RouterManager from "./RouterManager"
import ModalProvider from "./Provider/ModalProvider/ModalProvider"
import "./App.css"
import { Helmet } from "react-helmet"

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <ModalProvider />
          <RouterManager />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
