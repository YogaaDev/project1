import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  BlockContainer,
  Content,
  ContentWrapper,
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  content,
  direction,
  t,
}: ContentBlockProps) => {
  return (
    <Fade direction={direction}>
      <BlockContainer>
        <Row>
          <Col lg={7} md={7} sm={7} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={17} md={17} sm={17} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
            </ContentWrapper>
          </Col>
        </Row>
      </BlockContainer>
    </Fade>
  );
};

export default withTranslation()(LeftContentBlock);
