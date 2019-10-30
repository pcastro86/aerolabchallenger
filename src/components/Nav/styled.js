import styled from "styled-components";


export const StyleNav = styled.div`
  display: flex;
  height: 5vh;
  margin: 1em auto;
  justify-content: end;
  margin: 2em auto;
  padding-bottom: 2.5em;
  border-bottom: 1px solid lightgray;
  width: calc(100% - 10vw);
  @media (max-width: 470px) {
    flex-direction: column;
    padding: 15px 0;
    align-items: center;
    margin: 0em auto;
    border-bottom: none;
    height: auto;
  }
`;

export const StyleTitle = styled.span`
  font-size: 18px;
  color: #616161;
  margin-right: 0.5em;
  white-space: nowrap;
  .products-total {
    font-size: 20px;
    font-weight: bold;
  }
  @media (max-width: 470px) {
    padding-bottom: 10px;
    font-size: 24px;
  }
`;

export const StyledItems = styled.span`
  cursor: pointer;
  font-size: 18px;
  margin-right: 0.5em;
  color: #616161;
  padding: 0.4em 0.5em;
  border-radius: 1em;
  background: #ededed;
  cursor: pointer;
  transition: 0.2s ease all;
  @media (max-width: 470px) {
    font-size: 20px;
  }
`;