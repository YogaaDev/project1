import { Row } from "antd";
import { withTranslation } from "react-i18next";
import RoadmapContentBlock from "../ContentBlock/RoadmapContentBlock";

import {
  GenContainer,
  BlockContainer,
  ContentWrapperTitle,
} from "./styles";

import bubble from "../../common/Img/bubbles.png";

const Roadmap = () => {

  return (
    <GenContainer style ={ { backgroundImage: 'url('+ bubble + ')' } }>
      <BlockContainer>
          <Row justify="center" align="middle">
            <ContentWrapperTitle>
                <h1>Roadmap</h1>
            </ContentWrapperTitle>
          </Row>

        <RoadmapContentBlock 
          title="Launch on October"
          content="Launch the Okto Solana campaign on Discord and Twitter / Website setup / Customization of each Okto"
          icon="1."
          direction="left"
          back="#1D9393"
        />

        <RoadmapContentBlock 
          title="Minting time !"
          content="4,389 oktos will be available during our main launch. The project will be listed on the exchange platforms as soon as possible."
          icon="2."
          direction="left"
          back="#4B9393"
        />

        <RoadmapContentBlock 
          title="A few days later..."
          content="A few days later, we will proceed to an event. During this event, part of the funds collected during the mint and the royalties from the secondary market will be donated to certain happy okto owner. More information will be communicated soon on Discord, Twitter and in the FAQ."
          icon="3."
          direction="left"
          back="#809393"
        />

        <RoadmapContentBlock 
          title="Creation period"
          content="We will then devote ourselves to our 3D and animated project. Several phases will take place, information will be communicated at this time. During this period, whenever the prize pool exceeds a certain amount, events will be organized to reward the community (100% of the royalties will always be used to reward the community !)."
          icon="4."
          direction="left"
          back="#AF9393"
        />

        <RoadmapContentBlock
          title="Futur..."
          content="This period represents a defining moment in culture and technology, history is being written, and we want to be a meaningful part of it by creating a unique work, which draws from the heart of the NFT community.
          That's why we have a huge project that brought together an engineer, a developer, artists and enthusiasts who want to push the limits of art and the way it is displayed.
          We believe that art deserves to be admired in a new way, in keeping with the very representation of NFT."
          icon="5."
          direction="left"
          back="#CE9393"
        />
      </BlockContainer>
    </GenContainer>
  );
};

export default withTranslation()(Roadmap);
