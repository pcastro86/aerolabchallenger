import styled from "styled-components";


export const WrapperHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  background: #ffffff;
  height: 80px;
  justify-content: space-between;
  padding: 0 5vw;
  .brand-icon {
    align-self: center;
    cursor: pointer;
  }
`;

export const StyledUsers = styled.div`
  align-self: center;
`;

export const StyledName = styled.div`
  font-size: 20px;
  color: #616161;
  position: relative;
  cursor: pointer;

  span:hover:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background: #FF8800;
    bottom: -2px;
    left: 0;
    -webkit-animation: expand 0.2s;
    animation: expand 0.2s;
    cursor: pointer;
    width: 47%;
  }
`;

export const StyledPoints = styled.span`
  padding: 0.4em 0.5em;
  background: #ededed;
  border-radius: 50px;
  margin-left: 0.6em;
  color: grey;
  img {
    animation: rotation 5s infinite linear;
  }
  @keyframes rotation {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }

    100% {
      transform: perspective(1000px) rotateY(360deg);
    }
  }
`;

export const WrapperModal = styled.div`
  position: absolute;
  width: 80vw;
  max-width: 340px;
  z-index: 2;
  right: 0;
  top: 50px;
  height: 310px;
  background: white;
  overflow: scroll;
  padding: 1em;
  border-radius: 3px;
  box-shadow: -1px 2px 7px 0px #00000014;
`;

export const ModalHeader = styled.div`
  height: 3em;
  background: #fff;
  border-radius: 3px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  color: #616161;
`;

export const ModalHistory = styled.div`
  height: 100%;
  overflow: scroll;
  padding-top: 1.8em;
`;

export const RowHistory = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3em 0;
  color: #616161;
  font-size: 16px;
  &:nth-child(odd) {
    background: #fff7f2;
  }
`;