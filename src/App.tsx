import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";
import { SIZE_TYPE, VARIANT } from "./types";
import icon from './assets/icons/back.svg';
import Search from "./components/Search/Search";

function App() {
  return(
    <div>
      <Navbar>YC</Navbar>
      {/* <Button onClick={() => window.open("https://www.ynet.co.il/", "_blank")} size={SIZE_TYPE.small} variant={VARIANT.primary} icon={icon}>continue</Button> */}
    </div>
  )
}

export default App;
