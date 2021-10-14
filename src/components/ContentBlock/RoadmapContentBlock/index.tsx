import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  BlockContainer,
  Content,
  ContentWrapper,
} from "./styles";

const RoadmapContentBlock = ({
  icon,
  title,
  content,
  direction,
  back,
  t,
}: ContentBlockProps) => {
  return (
    <Fade direction={direction}>
      <BlockContainer style={{ background: back }}>
        <Row justify="space-between" align="middle">
          <Col lg={4} md={4} sm={4} xs={24} >
              <h6>{t(icon)}<br/>{t(title)}</h6>
          </Col>
          <Col lg={18} md={18} sm={18} xs={24} offset={0}>
            <ContentWrapper>
              <Content>{t(content)}</Content>
            </ContentWrapper>
          </Col>
        </Row>
      </BlockContainer>
    </Fade>
  );
};

export default withTranslation()(RoadmapContentBlock);
