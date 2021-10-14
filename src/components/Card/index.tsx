import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import {
  GenContainer,
  BlockContainer,
  ContentTitleBottom,
  ContentWrapper,
  ContentWrapperTitle,
  ContentTitle,
  Container,
} from "./styles";

import { ImgPers } from "../../common/Img";

const Card = () => {

  return (
    <GenContainer>
      <BlockContainer>
          <Row justify="center" align="middle">
            <ContentWrapperTitle>
                <h1>Collectible & Unique</h1>
                <ContentTitle>4 collections, more than 100 attributes, thousands of possibilities.</ContentTitle>
            </ContentWrapperTitle>
          </Row>

        <Row justify="center" align="middle">

          <Col lg={8} md={8} sm={8} xs={24} offset={0}> 
            <Fade>
            <div style={{ display: "flex", justifyContent: "center"}}>
              <Container>
                <ImgPers src="Okto_gif.gif" width="100%" height="100%" />
                <ContentWrapper />
                <ContentTitleBottom>COMMON</ContentTitleBottom>
              </Container>
            </div>
            </Fade>          
          </Col>

          <Col lg={8} md={8} sm={8} xs={24} offset={0}> 
            <Fade>
            <div style={{ display: "flex", justifyContent: "center"}}>
              <Container>
                <ImgPers src="Okto_gif.gif" width="100%" height="100%" />
                <ContentWrapper />
                <ContentTitleBottom>RARE</ContentTitleBottom>
              </Container>
            </div>
            </Fade>       
          </Col>

          <Col lg={8} md={8} sm={8} xs={24} offset={0}>    
            <Fade>
            <div style={{ display: "flex", justifyContent: "center"}}>
              <Container>
                <ImgPers src="Okto_gif.gif" width="100%" height="100%" />
                <ContentWrapper />
                <ContentTitleBottom>EDITION</ContentTitleBottom>
              </Container>
            </div>
            </Fade>        
          </Col>

        </Row>

      </BlockContainer>
      </GenContainer>
  );
};

export default withTranslation()(Card);
