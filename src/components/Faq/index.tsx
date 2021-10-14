import { Row } from "antd";
import {useState} from "react";
import { withTranslation } from "react-i18next";

import {
  GenContainer,
  BlockContainer,
  ContentWrapperTitle,
  FaqContainer,
  FaqContent,
  FaqContentWrapper,
} from "./styles";



const Faq = () => {

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);

  return (
    <GenContainer>
      <BlockContainer>
          <Row justify="center" align="middle">
            <ContentWrapperTitle>
                <h1>F A Q</h1>
            </ContentWrapperTitle>
          </Row>

          <FaqContainer onClick={() => setVisible1(!visible1)}>
            <FaqContentWrapper>
              <h6>What is Okto ?</h6>
              { visible1 &&  <FaqContent>
                4,389 Unique, Punchy, Cuty, Algorithmically generated Oktos (Octopus). Stored with proof of ownership on the Solana blockchain.
              </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>


          <FaqContainer onClick={() => setVisible10(!visible10)}>
            <FaqContentWrapper>
              <h6>Why Solana ?</h6>
              { visible10 &&  <FaqContent>
                We believe that NFTs should be accessible to as many people as possible. This is why we chose Solana. We believe that after ethereum it is the most qualitative way at low cost to participate in the adventure.
              </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>

          <FaqContainer onClick={() => setVisible9(!visible9)}>
            <FaqContentWrapper>
              <h6>When will it be released ? &nbsp; Where ? &nbsp; At what price? </h6>
              { visible9 &&  <FaqContent>
                At the end of October we will launch the Okto on www.okto.com with a Presale of 999 Okto to reward the most fervent supporters of the project. And right after the public sale to give everyone the chance to have their own Okto.
                We are considering the possibility of offering a single Okto per wallet in order to give the chance to as many people as possible.
                <br /><br />
                The price will be discussed with our community but it should be between 0.75 and 1 Solana, we want to be as accessible as possible.
              </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>

          <FaqContainer onClick={() => setVisible2(!visible2)}>
            <FaqContentWrapper>
              <h6>How do I buy an Okto ?</h6>
              { visible2 &&  <FaqContent>
                Simple! Connect your Wallet and follow the instructions on screen on the day we launch!
                <br /><br /> For example with Phantom Wallet :
                <br/> 1. Download the Phantom Wallet extension for your browser (Google Chrome recommended).
                <br/> 2. Buy Solana (SOL) on an exchange like Coinbase, Binance, FTX etc and send it to your Phantom wallet Public Address.
                <br/> 3. Connect your Wallet to our website by clicking on the Connect button.
                <br/> 4. Click the 'Mint for x SOL' button on www.okto.com and approve the transaction in your Wallet.
                <br/> 5. If mint success, enjoy your okto!
              </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>

          <FaqContainer onClick={() => setVisible3(!visible3)}>
            <FaqContentWrapper>
              <h6>Do you have a presale ?</h6>
              { visible3 &&  <FaqContent>
                There will be a presale right before our public launch. We want to reward the first participants who made the project known, as well as the people who participate in our community. We recommend that you join our Discord to find out more.
              </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>

          <FaqContainer onClick={() => setVisible4(!visible4)}>
            <FaqContentWrapper>
              <h6>What about rarity ?</h6>
              { visible4 &&  <FaqContent>
                Information regarding Solana Okto's attributes and scarcity will be published soon. 
              </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>

          <FaqContainer onClick={() => setVisible5(!visible5)}>
            <FaqContentWrapper>
              <h6>Will there be a secondary market ?</h6>
              { visible5 &&  <FaqContent>
                Once the Okto's mint is over, we will initiate the process to get listed on the secondary market as quickly as possible, more information will be released on the discord.
                </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>

          <FaqContainer onClick={() => setVisible6(!visible6)}>
            <FaqContentWrapper>
              <h6>Why Okto ? Why 4,386 ?</h6>
              { visible6 &&  <FaqContent>
                1) We wanted to build something fun and unique, and... Octopus are beautiful !
                <br/>
                2) In an unprecedented way, we are going to make a huge lottery with a share of the mint price and putting in this piggy bank 100% of the royalties. After that we will have a 3D collection to continue to increase the hype and large-scale projects.
                <br/>
                2) We have 4,386 unique nft: 4 is the number of people at the start of this project and 3 / 8 / 9, because an octopus has 3 hearts, 8 tentacles and 9 brains. We love this spectacular animal.
              </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>

          <FaqContainer onClick={() => setVisible7(!visible7)}>
            <FaqContentWrapper>
              <h6>How will the project unfold ?</h6>
              { visible7 &&  <FaqContent>
                - After launch, you will be able to list your Okto directly on different marketplaces.
                <br />
                - A few days later an event will take place, during which some with (at least) an Okto will be rewarded!
                <br />
                - Each Okto represents a "ticket" for that event, the number of nft you have and their rarity will improve your chances of winning.
                <br />
                - After this event, each month we will ask the community to vote between another rewards event, a purchase of oktos below the floor price to destroy them, or to donate the funds to an association. 100% of the royalties will be used each month to perform this action.
                <br />
                - We will do this until the next part of the project which is the transition from pixel art to 3D.
              </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>

          <FaqContainer onClick={() => setVisible8(!visible8)}>
            <FaqContentWrapper>
              <h6>Our Vision</h6>
              { visible8 &&  <FaqContent>
                We believe in Solana and we believe in NFTs. In the future, we will regard this period as a turning point in culture and technology. History is being made, and we want to be a part of it in a meaningful way.
                <br /><br />
                We believe that NFTs should be more than a JPEG in your portfolio. It is a cultural revolution. A new form of art accessible to all. A gathering of two wonderful worlds of art and technology.
              </FaqContent>    }
            </FaqContentWrapper>
          </FaqContainer>

      </BlockContainer>
    </GenContainer>
  );
};

export default withTranslation()(Faq);
