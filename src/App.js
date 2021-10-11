import { Switch, Route, useLocation  } from "react-router-dom";
import Routers from "./router";
import Header from "./components/Header/Header";
import { AnimatePresence } from "framer-motion";
import React,{useEffect,useContext} from "react";
import { observer } from 'mobx-react-lite';
import context from "./context";
function App() {
  let location = useLocation();
  const {Global,Products} = useContext(context)
  
  useEffect(()=>{
    Global.AuthFromToken()
    Global.LoatCart()
    Products.LoadBooks()
  },[])

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

export default observer(App);
