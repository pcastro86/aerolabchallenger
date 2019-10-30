import React, { Component } from "react";
import { withRouter } from "react-router-dom";

// Others
import {
  OverlayWrapper,
  Wrapper,
  StyledCard,
  StyedImage,
  StyledTitle,
  StyledIcon,
  StyledDetailBtn
} from "./styled"
import ContentLoader from 'react-content-loader'

// Assets
import coin from "../../assets/icons/coin.svg";

// Redux
import { connect } from "react-redux";


class Search extends Component {

  handleNavigation = id => {
    const { history } = this.props;
    history.push(`/details/${id}`);
  };

  render() {
    const { productsItems, loading } = this.props;
    return (
      <React.Fragment>
        <Wrapper>
          {loading &&
            Array.from({ length: 32 }, (_, index) => (
              <ContentLoader key={index}>
                <rect width="264" height="350" />
              </ContentLoader>
            ))}

          {productsItems.map(element => (
            <StyledCard onClick={() => this.handleNavigation(element._id)} key={element._id}>
              <StyedImage>
                <img
                  className="card-img-top"
                  src={element.img.url}
                  alt={element.name}
                />
              </StyedImage>
              <StyledTitle>
                <p className="card-text">
                  <span className="category"> {element.category} </span>
                  <span className="name"> {element.name} </span>
                </p>
              </StyledTitle>
              <OverlayWrapper className="overlay">
                <div className="points">
                  <img src={coin} alt="coins" />
                  {element.cost}
                  <StyledDetailBtn>
                    <span>Ver Detalle</span>
                  </StyledDetailBtn>
                </div>
              </OverlayWrapper>
              <StyledIcon className="change-icon"></StyledIcon>
            </StyledCard>
          ))}
        </Wrapper>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsItems: state.products,
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(Search));
