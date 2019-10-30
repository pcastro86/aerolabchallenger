import styled from "styled-components";
import img from "../../assets/img/hero.png";

export const Styledjumbotron = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${img}) 75% center no-repeat;
  background-size: cover;
  height: 40vh;
  padding: 0 5vw;
  justify-content: flex-start;
  align-items: flex-end;

  h1 {
    font-size: 60px;
    color: #fff;
    font-weight: bold;
  }
`;