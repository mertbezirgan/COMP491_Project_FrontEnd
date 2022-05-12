import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";
import React from "react";
import { Button } from "react-bootstrap";

const Working: React.FC = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction, sendTransaction } = useWallet();

  const handleClick = async () => {
    if (publicKey) {
    }
  };

  const checkOwnerShip = async () => {
    if (publicKey) {
      //TODO replace mint with value from db
      const balance = await connection.getBalance(publicKey);
      const tokenAccaounts = await connection.getTokenAccountsByOwner(
        publicKey,
        {
          // programId: new solanaWeb3.PublicKey(
          //   "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
          // ),
          mint: new PublicKey("5bDJE7VECkrfQBNTg11Ef9HFY84vHAcsJcMD4gMpwmTF"),
        }
      );

      const resultArray = tokenAccaounts.value;

      const pubKeyArray = resultArray.map(({ pubkey }) => pubkey);
      pubKeyArray.forEach(async (pubkey) => {
        const res = await connection.getTokenAccountBalance(pubkey);
        console.log(res.value.amount);
      });
    }
  };

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Still working on... Haven't finished yet!</h3>
        <Button onClick={checkOwnerShip}>checkOwnerShip</Button>
      </header>
    </div>
  );
};

export default Working;
