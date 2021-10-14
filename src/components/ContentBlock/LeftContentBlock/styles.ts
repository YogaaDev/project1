import styled from "styled-components";

export const BlockContainer = styled("section")`
  position: relative;
  margin: 2rem;
  padding: 2rem 4rem;
  background: #223;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 4rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color: #AAA;
  font-size: 19px;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  margin: 0.5rem 1.5rem;
`;