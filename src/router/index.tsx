import { lazy, Suspense } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home/Home";
import { Styles } from "../styles/styles";

// Import for candy
import { useMemo } from "react";
import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import bubble from "../common/Img/bubbles.png";

// Constant for candy
const treasury = new anchor.web3.PublicKey( process.env.REACT_APP_TREASURY_ADDRESS! );
const config = new anchor.web3.PublicKey( process.env.REACT_APP_CANDY_MACHINE_CONFIG! );
const candyMachineId = new anchor.web3.PublicKey( process.env.REACT_APP_CANDY_MACHINE_ID! );
const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);
const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)

// Constante site
const Block1 = lazy(() => import("../components/Block1"));
const Card = lazy(() => import("../components/Card"));
const Roadmap = lazy(() => import("../components/Roadmap"));
const Team = lazy(() => import("../components/Team"));
const Join = lazy(() => import("../components/Join"));
const Faq = lazy(() => import("../components/Faq"));

const Router = () => {

  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      secondary: {
        main: '#fff'
      }
    }
  });

  return (
    <Suspense fallback={null}>
      <Styles />
        <div style = {{ backgroundImage: "linear-gradient(45deg, #151520, #304580)"}} >   
        <div style ={ { backgroundImage: 'url('+ bubble + ')' } }>
          <ThemeProvider theme={theme}>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect={true}>
                <WalletDialogProvider>
                    <Header />
                    <Home
                      candyMachineId={candyMachineId}
                      config={config}
                      connection={connection}
                      startDate={startDateSeed}
                      treasury={treasury}
                      txTimeout={txTimeout}
                    />
                </WalletDialogProvider>
              </WalletProvider>
            </ConnectionProvider>
          </ThemeProvider>
          
        <Block1 />
        <Card />
        <Roadmap />
        <Join />
        <Faq />
        <Footer />
      </div>
      </div>
    </Suspense>
  );
};

export default Router;
