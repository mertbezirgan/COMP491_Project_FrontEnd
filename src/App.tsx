import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import * as AuthService from "./services/auth.service";
import IUser from "./types/user.type";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import EventBus from "./common/EventBus";
import Working from "./components/Working";
import Collections from "./components/Collections";
import ProductPage from "./screens/Product";

import {
  ConnectionProvider,
  useConnection,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  GlowWalletAdapter,
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import { getStorageItem, storageKeys } from "./services/storage.service";
import Footer from "./components/Footer";
import Profile from "./screens/Profile";
import { useLocalStorage } from 'usehooks-ts'

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");


const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useLocalStorage(storageKeys.user, null);

  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );


  const logout = () => {
    localStorage.clear();
    setCurrentUser(null);
    window.location.pathname = "/";
  };

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {/* <WalletMultiButton />
          <WalletDisconnectButton /> */}
          <Header logout={logout} />
          <div>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Register} />
                <Route exact path="/working" component={Working} />
                <Route exact path="/collections" component={Collections} />
                <Route exact path="/product/:id" component={ProductPage} />
                <Route exact path="/profile" component={Profile} />
                {/* <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} /> */}
              </Switch>
            </div>
          </div>
          <Footer />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
