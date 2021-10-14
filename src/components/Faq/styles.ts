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

export const FaqContainer = styled("div")`
  position: relative;
  margin: 1rem;
  padding: 0.1rem 3rem;
  background: #0A0A14;
  border: 0px solid #303031;
  border-radius: 2px;

  @media only screen and (max-width: 1024px) {
    padding: 1rem 2rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const FaqContent = styled("p")`
  margin: 0rem;
  color: #AAA;
  font-size: 17px;
  line-height: 1.75;
`;

export const FaqContentWrapper = styled("div")`
  position: relative;
  margin: 0.5rem 0;
`;