import styled from "styled-components";

export const GenContainer = styled("section")`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 1.5rem 10rem;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 0rem 0rem;
    text-align: center;
  }
`;

export const BlockContainer = styled("section")`
  position: relative;
  padding: 2rem 1rem;
`;


export const ContentInfoMint = styled("p")`
  width: 100%;
  font-size: 16px;
  display: flex;
  color: #DDD;
  text-align: center;
  justify-content: center;
`;

export const Content = styled("p")`
  margin: 0.5rem 0rem;
  color: #DDD;
`;

export const ContentWrapper = styled("div")`
  position: relative;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ContentWrapperSvg = styled("div")`
  border: 4px solid #edf3f5;
  border-radius: 2px;
`;

export const ButtonWrapper = styled("div")`
  min width: 200px;
  max-width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
`;

export const ButtonContainer = styled("div")`
min-width: 200px;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;