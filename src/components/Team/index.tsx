import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import {
  GenContainer,
  BlockContainer,
  ContentTitleBottom,
  ContentWrapper,
  ContentWrapperTitle,
  ContentTitle,
} from "./styles";

const Team = () => {

  return (
    <GenContainer>
      <BlockContainer>
          <Row justify="center" align="middle">
            <ContentWrapperTitle>
                <h1>Unique</h1>
                <ContentTitle>Over 100 Attributes. Thousands of possibilities.</ContentTitle>
            </ContentWrapperTitle>
          </Row>

        <Row>
          <Col lg={8} md={8} sm={8} xs={24} offset={0}> 
            <Slide direction="left">
              <ContentWrapper style ={ { backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url('https://i.pinimg.com/736x/bc/44/4e/bc444e8f08bb660cfe36e306923e984c.jpg')" } }>
                  <ContentTitleBottom>Type</ContentTitleBottom>
              </ContentWrapper>
            </Slide>          
          </Col>

          <Col lg={8} md={8} sm={8} xs={24} offset={0}> 
            <Slide direction="left">
            <ContentWrapper style ={ { backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url('https://i.pinimg.com/736x/bc/44/4e/bc444e8f08bb660cfe36e306923e984c.jpg')" } }>
              <ContentTitleBottom>TROLL</ContentTitleBottom>
              </ContentWrapper>
            </Slide>       
          </Col>

          <Col lg={8} md={8} sm={8} xs={24} offset={0}>     
            <Slide direction="right">
            <ContentWrapper style ={ { backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url('https://i.pinimg.com/736x/bc/44/4e/bc444e8f08bb660cfe36e306923e984c.jpg')" } }>
              <ContentTitleBottom>PHANTOM</ContentTitleBottom>
              </ContentWrapper>
            </Slide>        
          </Col>

        </Row>

        <Row>
        <Col lg={4} md={4} sm={4} xs={24} offset={0}> </Col>
          <Col lg={8} md={8} sm={8} xs={24} offset={0}> 
            <Slide direction="left">
              <ContentWrapper style ={ { backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url('https://i.pinimg.com/736x/bc/44/4e/bc444e8f08bb660cfe36e306923e984c.jpg')" } }>
                  <ContentTitleBottom>Type</ContentTitleBottom>
              </ContentWrapper>
            </Slide>          
          </Col>

          <Col lg={8} md={8} sm={8} xs={24} offset={0}>     
            <Slide direction="right">
            <ContentWrapper style ={ { backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),url('https://i.pinimg.com/736x/bc/44/4e/bc444e8f08bb660cfe36e306923e984c.jpg')" } }>
              <ContentTitleBottom>PHANTOM</ContentTitleBottom>
              </ContentWrapper>
            </Slide>        
          </Col>
          <Col lg={4} md={4} sm={4} xs={24} offset={0}> </Col>
        </Row>
      </BlockContainer>
      </GenContainer>
  );
};

export default withTranslation()(Team);
