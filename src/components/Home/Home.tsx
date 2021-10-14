import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { ImgPers } from "../../common/Img";
import { Button } from "@material-ui/core";
import { Slide } from "react-awesome-reveal";
import {
  GenContainer,
  BlockContainer,
  Content,
  ContentWrapperSvg,
  ButtonContainer,
  ContentInfoMint,
} from "./styles";
import { ButtonPers } from "../../common/Button";

import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import * as anchor from "@project-serum/anchor";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { AnchorWallet, useAnchorWallet } from "@solana/wallet-adapter-react";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
} from "../../candy-machine";

import whitelistAddress from './whitelist';

const CounterText = styled.span``;
const MintContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 2rem;
`;
const MintButton = styled(Button)`
border: 5px solid #fff;
border-radius: 0px;
`;

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {

  const [balance, setBalance] = useState<number>();
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);
  const [startDate, setStartDate] = useState(new Date(props.startDate * 1000));
  const isLive = useMemo(() => startDate <= new Date(), [startDate]);


  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  interface IAnchorWallet extends AnchorWallet {
    connected?: boolean;
  }
  const wallet: IAnchorWallet | undefined = useAnchorWallet();

  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      // Si on est dans la whitelist ou si la whitelist est passé
      if (wallet && candyMachine?.program 
            && ( (whitelistAddress.includes(wallet.publicKey?.toBase58()) && (itemsRedeemed < 1000)) || (itemsRedeemed >= 1000) ) ) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
          if (wallet) {
            whitelistAddress.splice( whitelistAddress.indexOf(wallet.publicKey?.toBase58()), 1);
          }
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
      // Si on est pas dans la white list et qu'on l'a pas ecore passé
      else if (wallet && candyMachine?.program 
            && ( (!whitelistAddress.includes(wallet.publicKey?.toBase58()) && (itemsRedeemed < 1000)) ) )
      {
        setAlertState({
          open: true,
          message: "You are not in the whitelist, or you already mint an Okto!",
          severity: "error",
        }); 
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <GenContainer>
      <BlockContainer >

        <Row justify="center" align="middle">
    
          <Col lg={13} md={13} sm={13} xs={22} offset={1}>

            <Slide direction="left">

              <h2> Say "Hello" to Okto.</h2>
              
              <Content >
                 4,389 Unique, Punchy, Cuty, Algorithmically generated Oktos. Stored with proof of ownership on the Solana blockchain. 
              </Content>

              <Row align="middle" justify="center" >
                <MintContainer>
                  { isSoldOut ? ( <ButtonContainer><ButtonPers>View on Secondary Market</ButtonPers></ButtonContainer> ) : (
                    <MintButton onClick={onMint} disabled={isSoldOut || isMinting || !isLive} variant="text">
                      { (isLive && wallet) ? 
                        ( 
                          isMinting ? 
                          ( <CircularProgress /> ) :
                          ( <ButtonContainer><ButtonPers>Mint for 2 SOL</ButtonPers></ButtonContainer> )
                        ) : (  
                          ((startDate.getTime() / 1000) > 86400) ? 
                          (<ContentInfoMint><b>Live at : {startDate.toUTCString()}</b></ContentInfoMint> ) : 
                          (<ButtonContainer><ButtonPers><Countdown date={startDate} onComplete={() => refreshCandyMachineState()} renderer={renderCounter} /></ButtonPers></ButtonContainer>)
                        )
                      }
                    </MintButton>
                    )
                  }
                </MintContainer>  
              </Row>
              
              <Content>
                {wallet && !isSoldOut && isLive &&
                  <ContentInfoMint>
                    Available: {itemsRemaining} / {itemsAvailable} &nbsp;&nbsp;-&nbsp;&nbsp; Balance: {(balance || 0).toLocaleString()} SOL
                  </ContentInfoMint>
                }
              </Content>
      
            </Slide> 
          </Col>

          <Col lg={9} md={9} sm={9} xs={22} offset={1}> 
              <ContentWrapperSvg>
                <ImgPers src="Okto_gif.gif" width="100%" height="100%" />
              </ContentWrapperSvg>
          </Col>

        </Row>

        <Snackbar open={alertState.open} autoHideDuration={6000} onClose={() => setAlertState({ ...alertState, open: false })} >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>

      </BlockContainer>
    </GenContainer>
  );
};


interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};

export default withTranslation()(Home);
