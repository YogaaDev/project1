import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ButtonPers } from "../../common/Button";
import { 
  BlockContainer,
  GenContainer, 
  Content,
} from "./styles";

import JoinImg from "../../common/Img/Join.png";

const Join = () => {

  return (
    <GenContainer style ={ { backgroundImage: 'url('+ JoinImg + ')' } }>
      <BlockContainer>
        <Row justify="center" align="middle">

          <Col lg={2} md={2} sm={2} xs={0} offset={0}> </Col>

          <Col lg={8} md={8} sm={8} xs={24} offset={0}>     
            
            <div>
              <Content><h1 style={{color: "#111"}}>Join the community</h1></Content>
              <Content>If you want to join the #OktoFamily it’s here. Join us to get the news as soon as possible and follow our latest announcements.</Content>
            </div>
       
          </Col>

          <Col lg={4} md={4} sm={4} xs={0} offset={0}> </Col>

          <Col lg={8} md={8} sm={8} xs={24} offset={0}> 
              <a href="https://discord.gg/C5s4sem38M" target="_blank" rel="noreferrer">
                  <ButtonPers>Join our Discord</ButtonPers>
              </a>
          </Col>

          <Col lg={2} md={2} sm={2} xs={0} offset={0}> </Col>

        </Row>
      </BlockContainer>
    </GenContainer>
  );
};

export default withTranslation()(Join);
