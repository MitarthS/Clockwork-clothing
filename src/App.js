import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import { Header } from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";
import { useEffect, useState } from "react";
import { auth } from "./firebase/firebase.utils";

function App() {
  const [currUser, setCurrUser] = useState([]);
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged((u) => {
      setCurrUser(u);
      console.log("current user", currUser);
    });
    return () => unsubscribeFromAuth();
  }, [currUser]);
  return (
    <div>
      <Header currentUser={currUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signIn" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
