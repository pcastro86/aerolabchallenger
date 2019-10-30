import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import {
  getProductStoreInital,
  getProductRequest,
  getShopHistory,
} from "../../store";

// Others
import {
  WrapperHeader,
  StyledUsers,
  StyledName,
  StyledPoints,
  WrapperModal,
  ModalHeader,
  ModalHistory,
  RowHistory
} from "./styled"

// Assets
import brand from "../../assets/img/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";


class Header extends Component {
  state = {
    isModal: false
  };

  openModal = () => {
    this.setState(currentState => ({
      isModal: !currentState.isModal
    }));
    this.props.getShopHistory();
  };

  reloadHome = () => {
    const { history, clearProductStore } = this.props;
    history.push("/");
    clearProductStore();
  };

  render() {
    const { user, historyShop, points } = this.props;
    return (
      <React.Fragment>
        <WrapperHeader>
          <div className="brand-icon" onClick={this.reloadHome}>
            <img src={brand}  alt='Aerolab'/>
          </div>
          <StyledUsers>
            <StyledName onClick={this.openModal}>
              <span>{user.name}</span>
              <StyledPoints>
                <img src={coin} alt='coins' />
                {points}
              </StyledPoints>
              {this.state.isModal ? (
                <WrapperModal>
                  <ModalHeader>Tus Compras</ModalHeader>
                  <ModalHistory>
                    {historyShop.map(element => (
                      <RowHistory>{element.name}</RowHistory>
                    ))}
                  </ModalHistory>
                </WrapperModal>
              ): null}
            </StyledName>
          </StyledUsers>
        </WrapperHeader>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product,
    user: state.user,
    historyShop: state.historyShop,
    points: state.points
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProductItem: id => dispatch(getProductRequest(id)),
    clearProductStore: () => dispatch(getProductStoreInital()),
    getShopHistory: () => dispatch(getShopHistory()),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);


