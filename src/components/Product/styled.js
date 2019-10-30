import styled from "styled-components";


export const StyledDetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 4em 5vw;
  padding: 3em;
  border-radius: 3px;
  transition: 0.3s ease box-shadow, 0.3s ease transform;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h2{
    display: flex;
    justify-content: center;
  }
  span {
    padding: 0.4em 0.5em;
    background: #ededed;
    border-radius: 50px;
    margin-left: 0.6em;
    color: grey;
    justify-content: center;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const StyledImg = styled.div`
  img {
    display: block;
    height: 220px;
    width: 300px;
    margin-bottom: 1em;
    object-fit: contain;
    background: #ffffff;
    border: 1px solid rgba(21, 219, 255, 0.9);
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export const StyledReddem = styled.button`
  margin: 20px auto;
  text-align: center;
  letter-spacing: 1px;
  padding: 0.1em 3.4em;
  border-radius: 4px;
  transition: 0.15s ease all;
  cursor: pointer;
  border: 1px solid #fff;
  color: #fff;
  background-color: rgba(21, 219, 255, 0.9); ;
  &:hover {
    background-color:#fff;
    color: rgba(21, 219, 255, 0.9);
    border: 1px solid rgba(21, 219, 255, 0.9);
  }
`;

export const StyedAlertPoints = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 20px 0 10px 0;
    font-size: 20px;
    color: rgba(21,219,255,0.9);
    font-weight: bold;
  }
`

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #616161;
  p {
    font-size: 18px;
  }
`

export const customStyles = {
content : {
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom : 'auto',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  padding:'50px',
}
};