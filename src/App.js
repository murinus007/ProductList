import './App.css';
import ProductList from "./components/productList/ProductList"
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from "react-router-dom";
import Details from './components/details/Details';
import CreateProduct from './components/createProduct/CreateProduct';

function App() {
  return (
    <div className="App">
      <p className={'title'}>Products</p>
      <Router>
      <Switch>
        <Route 
        exact 
        path = "/"
         component={() => <ProductList />} />
          
        <Route
            exact
            path="/details"
            component={(props) => <Details {...props} />}
          />
      </Switch>
      <Route path="/create">
        <CreateProduct />
      </Route>
      </Router>
    </div>
  );
}

export default App;
