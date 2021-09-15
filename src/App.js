import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/ShopPage";
import { Header } from "./components/header/Header";
import SignInSignUp from "./pages/sign-in-sign-up/SignInSignUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signIn" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
