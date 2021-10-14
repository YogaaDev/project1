import styled from "styled-components";

export const FooterSection = styled("footer")`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 2rem 0rem;

  @media only screen and (max-width: 768px) {
    padding: 0;
  }

  @media only screen and (max-width: 414px) {
    padding: 0;
  }
`;

export const Chat = styled("p")`
  font-size: 14px;
  text-transform: capitalize;
  color: #AAA;
  }
`;


export const LogoContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;

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

export const LogoContainerText = styled("p")`
  margin: 0rem 0.5rem;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
`;

export const Copyright = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const NavLink = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0rem;
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
  margin: 0rem 0.5rem;
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