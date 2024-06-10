import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { createReactEditorJS } from 'react-editor-js'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const ReactEditorJS = createReactEditorJS()
root.render(
  <>
    <Router>
      <App />
      <ToastContainer />
    </Router>
  </>
);
