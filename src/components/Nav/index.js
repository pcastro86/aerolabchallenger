import React from "react";

// Redux
import { connect } from "react-redux";
import {
  getsortHighest,
  getsortLowest
} from "../../store";

// Others
import {
  StyleNav,
  StyleTitle,
  StyledItems
} from "./styled"

function Nav(props) {
    const {productsItems, getsortHighest, getsortLowest} = props;
    return (
      <StyleNav>
        <StyleTitle><span className="products-total"> {productsItems.length} Productos | </span>  Sort by:</StyleTitle>
        <div>
          <StyledItems onClick={getsortHighest}>Highest Price</StyledItems>
          <StyledItems onClick={getsortLowest}>Lowest Price</StyledItems>
        </div>
      </StyleNav>
    );
  }



const mapStateToProps = state => {
  return {
    productsItems: state.products,
    loading: state.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getsortHighest: () => dispatch(getsortHighest()),
    getsortLowest: () => dispatch(getsortLowest())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);

