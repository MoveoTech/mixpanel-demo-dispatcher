import ReactDOM from "react-dom";
import "./index.css";
import GlobalStyle from "./globalStyle/globalStyle";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
