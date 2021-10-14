import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import {
  FooterSection,
  LogoContainer,
  LogoContainerText,
  NavLink,
  CustomNavLinkSmall,
  Chat,
} from "./styles";

const Footer = ({ t }: any) => {

  return (
    <FooterSection>
        <Row>
          
          <Col lg={9} md={9} sm={9} xs={24} offset={0}>   
              <LogoContainer>
                <SvgIcon src="logo.png" width="50px" height="50px" />
                <LogoContainerText> OKTO </LogoContainerText>
              </LogoContainer>
          </Col>

          <Col lg={6} md={6} sm={6} xs={0} offset={0}></Col>

          <Col lg={9} md={9} sm={9} xs={24} offset={0}>
            <NavLink>
            <a href="https://discord.gg/C5s4sem38M" target="_blank" rel="noreferrer">
                <CustomNavLinkSmall>
                  <SvgIcon src="discord.svg" width="25px" height="25px" />
                </CustomNavLinkSmall>
              </a>

              <a href="https://twitter.com/Okto_Solana" target="_blank" rel="noreferrer">
                <CustomNavLinkSmall>
                  <SvgIcon src="twitter.svg" width="25px" height="25px" />
                </CustomNavLinkSmall>
              </a>
            </NavLink>
          </Col>

      </Row>

      <Row>
        <Col lg={9} md={9} sm={9} xs={24} offset={0}>   
            <LogoContainer>
              <Chat> ©2021 Okto. All rights reserved. </Chat>
            </LogoContainer>
        </Col>
        <Col lg={15} md={15} sm={15} xs={0} offset={0}></Col>
      </Row>
    </FooterSection>
  );
};

export default withTranslation()(Footer);
