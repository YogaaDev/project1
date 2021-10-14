import styled from "styled-components";

export const GenContainer = styled("section")`
  position: relative;
  width: 100%;
  background: #101015;
  margin-right: auto;
  margin-left: auto;
  padding: 1.5rem 10rem;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 0rem;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0rem;
    text-align: center;
  }

  @media only screen and (max-width: 414px) {
    padding: 2rem 0rem;
    text-align: center;
  }
`;

export const BlockContainer = styled("section")`
  position: relative;
  margin: 1rem;
  padding: 4rem 0rem;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const ContentTitle = styled("p")`
  padding: 0.75rem 0 0.75rem;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const ContentWrapperTitle = styled("div")`
  text-align: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Container = styled("div")`
  position: relative;
  width: 300px;
  height: 300px;
`;


export const ContentWrapper = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8) );
`;

export const ContentTitleBottom = styled("p")`
  position: absolute;
  bottom: 10px;
  left: 20px;
  width: 100%;
`;