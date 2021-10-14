import styled from "styled-components";


export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#000"};
  color: ${(p) => (p.color ? "#000" : "#DDD")};
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  border: 0px solid #111;
  border-radius: 0px;
  padding: 10px;
  cursor: pointer;
  max-width: 300px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 30px rgb(100 100 100 / 40%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    background-color: #358;
    box-shadow: 0 0 30px rgb(23 31 114 / 40%);
  }
`;
