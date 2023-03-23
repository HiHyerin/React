
import {Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import FoodList from "./components/food/FoodList";
import EventList from "./components/food/EventList";
import RecipeList from "./components/recipe/RecipeList";
import FoodDetail from "./components/food/FoodDetail";
import ProductList from "./components/product/ProductList";
// route : 바뀌는 화면, routes :화면 모아놓은 것

function App() {
  return (
    <Router>
      <Fragment>
        <Header/>
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
            <Route path={"/jeju/food_list"} element={<FoodList/>}/>
            <Route path={"/jeju/event_list"} element={<EventList/>}/>
            <Route path={"/recipe/recipe_list"} element={<RecipeList/>}/>
            <Route path={"/jeju/food_detail/:no"} element={<FoodDetail/>}/>
            <Route path={"/jeju/product_list"} element={<ProductList/>}/>
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
