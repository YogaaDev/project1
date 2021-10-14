import styled from "styled-components";

export const GenContainer = styled("section")`
  position: relative;
  width: 100%;
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
  max-width: 570px;
  text-align: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;