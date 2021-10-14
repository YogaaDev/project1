import styled from "styled-components";

export const BlockContainer = styled("section")`
  position: relative;
  margin: 1rem;
  padding: 1rem 3rem;
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

export const Content = styled("p")`
  margin: 0rem;
  color: #EEE;
  font-size: 17px;
  line-height: 1.75;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  margin: 1.5rem 0;
`;