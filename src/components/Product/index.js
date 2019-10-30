import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Others
import Modal from 'react-modal';
import {
  StyledDetailWrapper,
  StyledContainer,
  StyledInfo,
  StyledImg,
  StyledReddem,
  StyedAlertPoints,
  ModalWrapper,
  customStyles
} from "./styled"

// Redux
import { connect } from "react-redux";
import {
  getProductRequest,
  getUpdatePoints,
  getRedeemRequest,
  getProductStoreInital,
  getNewPointsRequest
} from "../../store";

// Assets
import coin from "../../assets/icons/coin.svg";


class Product extends Component {
  state = {
    modalIsOpen: false,
  }


  handleRedeemProduct = () => {
    const { getUpdatePoints, product, points, cost, getRedeemRequest } = this.props;
    const res = points - cost;
    getUpdatePoints(res)
    getRedeemRequest(product._id)
    this.setState({modalIsOpen: true});
  }

  handleCloseModal = () => {
    this.setState({modalIsOpen: false});
  }

  handleReloadHome = () => {
    const { history, clearProductStore } = this.props;
    history.push("/");
    clearProductStore();
  };

  handleAddPoints = () => {
    const { getNewPointsRequest } = this.props;
    getNewPointsRequest()
  }


  render() {
    const { product, isRedeem, image } = this.props;
    const {modalIsOpen} = this.state;
    return (
      <React.Fragment>
        <StyledDetailWrapper>
          <React.Fragment>
                <StyledContainer>
                <StyledInfo>
                  <h2>{product.name}</h2>
                  <span>
                    <img src={coin} alt='coins' />
                    {product.cost}
                  </span>
                  {isRedeem ?
                    <StyledReddem onClick={this.handleRedeemProduct}>Comprar</StyledReddem> :
                    <StyedAlertPoints><p>Ooops..! No te alcanzan los puntos</p><StyledReddem onClick={this.handleAddPoints}>Dame mas puntos!</StyledReddem></StyedAlertPoints> }

                </StyledInfo>
              </StyledContainer>
              <StyledImg>
                <img src={image} alt={product.name} />
              </StyledImg>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={this.handleCloseModal}
                contentLabel="Compra Exitosa"
                style={customStyles}
                ariaHideApp={false}
              >
              <ModalWrapper>
                  <h2>Felicitaciones!</h2>
                  <p>Compraste un <b>{product.name}</b> de lujo! </p>
                  <img src={image} alt={product.name} />
                  <StyledReddem onClick={this.handleReloadHome}>Continuar comprando</StyledReddem>
              </ModalWrapper>
              </Modal>
            </React.Fragment>
      </StyledDetailWrapper>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    productsItems: state.products,
    loading: state.loading,
    error: state.error,
    image: state.image,
    points: state.points,
    cost: state.cost,
    total: state.total,
    product: state.product,
    isRedeem: state.isRedeem,
    success: state.success,
    newPoints: state.newPoints
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductItem: id => dispatch(getProductRequest(id)),
    getUpdatePoints: total => dispatch(getUpdatePoints(total)),
    getRedeemRequest: id => { dispatch(getRedeemRequest(id))},
    clearProductStore: () => dispatch(getProductStoreInital()),
    getNewPointsRequest: () => dispatch(getNewPointsRequest())
  };
};


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product)
);