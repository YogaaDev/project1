import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ImgPers } from "../../../common/Img";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  BlockContainer,
  Content,
  ContentWrapper,
} from "./styles";

const RightBlock = ({
  title,
  content,
  direction,
  icon,
  back,
  t,
}: ContentBlockProps) => {
  return (
    <Fade direction={direction}>
      <BlockContainer style={{ background: back }}>
        <Row justify="space-between" align="middle">
          <Col lg={17} md={17} sm={17} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
            </ContentWrapper>
          </Col>
          <Col lg={7} md={7} sm={7} xs={24}>
            <ImgPers src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </BlockContainer>
    </Fade>
  );
};

export default withTranslation()(RightBlock);
