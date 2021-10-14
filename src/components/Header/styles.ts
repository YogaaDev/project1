import styled from "styled-components";

export const HeaderSection = styled("header")`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 2rem 0.5rem;
  
  @media only screen and (max-width: 1024px) {
    padding: 2rem 0rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 0rem;
  }

  @media only screen and (max-width: 414px) {
    padding: 2rem 0rem;
  }
`;

export const LogoContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoContainerText = styled("span")`
  margin: 0rem 0.5rem;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
`;

export const NavLink = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomNavLink = styled("div")`
  display: inline-block;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #DDD;
  transition: color 0.2s ease-in;
  border: 1px solid #fff;
  border-radius: 2px;
  padding: 0.3rem 0.5rem;
  margin: 1rem 0.5rem;
  height: 45px;
  width: 45px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    background: rgba(250, 250, 250, 0.5)
  }
`;

export const CustomNavLinkWallet = styled(NavLink)`
  border: 0px solid #fff;
  border-radius: 1px;
  padding: 0.3rem 0.5rem;
  margin: 1rem 0.5rem;
  background: rgba(250, 250, 250, 0.95);
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  height: 45px;

  &:hover,
  &:active,
  &:focus {
    background-color: #999;
    box-shadow: 0 0 30px rgb(30 30 30 / 40%);
  }
`;