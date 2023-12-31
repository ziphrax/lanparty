import React from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import WelcomePage from "../pages/Home.page";
import RenderOnAnonymous from "./RenderOnAnonymous";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import Weather from "./Weather";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <RenderOnAnonymous>
          <WelcomePage/>
        </RenderOnAnonymous>
        <RenderOnAuthenticated>
          <h1>Authenticated</h1>
          <Weather />
        </RenderOnAuthenticated>
      </div>
    </BrowserRouter>
  );
}

export default App;
