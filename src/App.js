import React from "react";
import {Analytics} from "@vercel/analytics/react";

import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <Main />
      <Analytics />
    </div>
  );
}

export default App;
