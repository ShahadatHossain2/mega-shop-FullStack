import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddProducts from './Components/AddProducts/AddProducts';
import BuyProduct from './Components/BuyProduct/BuyProduct';
import Orders from './Components/Orders/Orders';
import Header from './Components/Header/Header';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Admin from './Components/Admin/Admin';
export const userContext = createContext();

function App() {
  const [loggedInUSer, setLoggedInUser] = useState({})

  return (
    <userContext.Provider value = {[loggedInUSer, setLoggedInUser]}>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/buy/:productId">
            <BuyProduct></BuyProduct>
          </PrivateRoute>
          <PrivateRoute path="/addProducts">
            <AddProducts></AddProducts>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
