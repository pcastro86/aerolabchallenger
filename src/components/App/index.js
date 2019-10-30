import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import {getProductsRequest, getUserRequest, getProductRequest} from '../../store';

// Others
import { GlobalStyle } from "./styled"

// Components
import Home from "../../pages/Home";
import Header from "../Header";
import Details from '../../pages/Details'
import Hero from "../Hero/";




class App extends Component {

  componentDidMount(){
    const { getUsers, getProductsItems } = this.props;
    getUsers();
    getProductsItems();
  }


  productItem = (id)=>{
    const { getProductItem } = this.props;
    getProductItem(id)
  }


  render() {
    return (
      <Router>
        <GlobalStyle />
        <Header redeemHistory={this.redeemHistory} />
        <Hero />
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/details/:id" exact render={props => (<Details {...props} productItem={this.productItem} />)}  />
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    productsItems: state.products,
    loading: state.loading,
    error: state.error,
    image: state.image,
    coins: state.coins,
    points: state.points,
    user: state.user,
    historyShop: state.historyShop,
    product: state.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductsItems: () => dispatch(getProductsRequest()),
    getUsers: () => dispatch(getUserRequest()),
    getProductItem: id => dispatch(getProductRequest(id)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
