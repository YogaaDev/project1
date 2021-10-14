import { withTranslation } from "react-i18next";
import RightContentBlock from "../ContentBlock/RightContentBlock";

import {
  GenContainer,
  BlockContainer,
} from "./styles";

const Block1 = () => {

  return (
    <GenContainer>
      <BlockContainer>
          {/*          <Row justify="center" align="middle">
            <ContentWrapperTitle>
                <h1>What's in a mint?</h1>
                <ContentTitle>The Okto project is a gateway to a future bigger project</ContentTitle>
            </ContentWrapperTitle>
          </Row> */}

        <RightContentBlock 
          title="A unique Okto NFT stored on Solana"
          content="Each Okto is different in its own way, some more rare than others. But one thing's guaranteed: there will only ever be 4,389 Oktos in the world."
          icon="Okto_1.png"
          direction="up"
          back="#1D9393"
        />

        <RightContentBlock
          title="A chance to be rewarded"
          content="A few days after the mint, a live event will be organized to reward the community. Several rewards will be distributed !"
          icon="Okto_2.png"
          direction="up"
          back="#6C53D1"
        />

        <RightContentBlock
          title="Get an Okto and Choose"
          content="Each month/week 100% of the royalties will be distributed randomly during a community event in agreement with the community. It's up to you !"
          icon="Okto_3.png"
          direction="up"
          back="#3341AE"
        />

        <RightContentBlock
          title="A chance for the futur..."
          content="Okto is the gateway to our future project on which we are working. By participating in the mint, you will be part of our support, you help us participate in the wonderful world of NFTs and what they represent. To thank you, during the mint, your public wallet address will be saved and will be part of the whitelist of the future project !"
          icon="Okto_4.png"
          direction="up"
          back="#C58FC9"
        />
      </BlockContainer>
    </GenContainer>
  );
};

export default withTranslation()(Block1);
