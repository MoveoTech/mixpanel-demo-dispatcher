import ReactDOM from "react-dom";
import "./index.css";
import GlobalStyle from "./globalStyle/globalStyle";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
