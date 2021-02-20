import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/home";
import Services from "./pages/our-services/services";
import Contact from "./pages/contact/contact";
const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </BrowserRouter>
  );
};

export default App;
