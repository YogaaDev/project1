import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  CustomNavLinkSmall,
  LogoContainerText,
  CustomNavLinkWallet,
  NavLink,
} from "./styles";

// CANDY
import styled from "styled-components";
import { AnchorWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import { shortenAddress } from "../../candy-machine";
import { WalletDialogButton, WalletDisconnectButton } from "@solana/wallet-adapter-material-ui";


const ConnectButton = styled(WalletDialogButton)``;
const DisconnectButton = styled(WalletDisconnectButton)``;


const Header = () => {

  // CANDY
  interface IAnchorWallet extends AnchorWallet {
    connected?: boolean;
  }
  const wallet: IAnchorWallet | undefined = useAnchorWallet();


  return (
    <HeaderSection>

        <Row>
    
          <Col lg={9} md={9} sm={9} xs={24} offset={0}>
            <LogoContainer>
              <SvgIcon src="logo.png" width="64px" height="64px" />
              <LogoContainerText> Okto </LogoContainerText>
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

              <CustomNavLinkWallet>
                {!wallet && <ConnectButton variant="text" color="default">Connect Wallet</ConnectButton>}
                {wallet && <DisconnectButton variant="text" color="default"> {shortenAddress(wallet.publicKey?.toBase58() || "")} </DisconnectButton>}
              </CustomNavLinkWallet>
            </NavLink>
          </Col>

        </Row>

    </HeaderSection>
  );
};

export default withTranslation()(Header);
