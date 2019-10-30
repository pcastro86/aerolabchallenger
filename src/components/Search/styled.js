import styled from "styled-components";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";

export const OverlayWrapper = styled.div`
  position: absolute;
  display: none;
  background-image: linear-gradient(
    -180deg,
    rgba(10, 212, 250, 0.86) 0%,
    rgba(37, 187, 241, 0.86) 100%
  );
  border-radius: 3px;
  font-size: 2em;
  color: white;
  width: calc(100% + 1px);
  height: calc(100% + 1px);
  top: 0;
  left: 0;
  animation: fadeInOverlay 0.3s;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 1em;
  margin: 1em 5vw;
`;

export const StyledCard = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 276px;
  position: relative;
  margin: 15px auto;
  margin-top: 0;
  width: 100%;
  padding: 1em;
  border-radius: 3px;
  background: #ffffff;
  transition: 0.3s ease box-shadow, 0.3s ease transform;
  cursor: pointer;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.1);
  .overlay {
    display: none;
  }
  &:hover {
    box-shadow: -1px 6px 20px 2px #00000030;
    transform: scale(1.05) translateY(-7px);

    .overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .change-icon {
      background: url(${buyWhite});
      background-size: contain;
    }
  }
`;

export const StyedImage = styled.div`
  border: none;
  border-bottom: 1px solid #d9d9d9;
  height: 190px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 0.4em;
  margin-left: 0.8em;
  margin-top: 1em;

  .category {
    color: #a3a3a3;
    display: block;
  }
  .name {
    color: #616161;
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
  width: 40px;
  height: 40px;
  background: url(${buyBlue});
  background-size: contain;
  z-index: 2;
`;

export const StyledDetailBtn = styled.div`
  span {
    background: #fff;
    font-size: 18px;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    color: #616161;
    box-shadow: -1px 6px 20px 2px #00000030;
  }
`;
