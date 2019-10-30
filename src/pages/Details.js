import React, {Component} from "react";

// Redux
import { connect } from "react-redux";
import {
  getProductRequest,
} from "../store";

// Components
import Product from "../components/Product/index";

class Detail extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    const { getProductItem } = this.props;
    getProductItem(id);
  }

  render(){
    return (
      <React.Fragment>
        <Product />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductItem: id => dispatch(getProductRequest(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);

