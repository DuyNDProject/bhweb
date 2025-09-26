import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/header";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header></Header>
        <AppRoutes></AppRoutes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
