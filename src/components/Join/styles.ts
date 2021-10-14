import styled from "styled-components";

export const GenContainer = styled("section")`
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 5rem 0rem;

  @media only screen and (max-width: 1024px) {
    padding: 1rem 0rem;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 0rem;
    text-align: center;
  }

  @media only screen and (max-width: 414px) {
    padding: 1rem 0rem;
    text-align: center;
  }
`;

export const BlockContainer = styled("section")`
  position: relative;
  margin: 0rem;
  padding: 0rem;
  width: 100%;

`;

export const Content = styled("p")`
  margin-top: 1.5rem;
  color: #111;
`;