import { Switch, Route,useLocation  } from "react-router-dom";
import Routers from "./router";
import Header from "./components/Header/Header";
import { AnimatePresence } from "framer-motion";
import React,{useEffect} from "react";
function App() {
  let location = useLocation();
  

  const RenderRouters = () =>
    Routers.map((element) => (
      <Route
        path={element.path}
        key={element.path}
        exact={true}
        component={element.component}
      />
    ));

  return (
    <>
      <Header />
      <AnimatePresence> 
      <Switch location={location} key={location.pathname}>{RenderRouters()}</Switch>
      </AnimatePresence>
      </>
  );
}

export default App;
