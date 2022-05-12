import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Button, Accordion, Form } from "react-bootstrap";
import IProduct from "../types/product.type";
import { getProduct } from "../services/Product/product.service";
import { useParams } from "react-router-dom";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey } from "@solana/web3.js";

const Styles = styled.div`
  .pageMainDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    align-items: flex-start;
    align-self: center;
    gap: 10px;
  }
  .leftDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
    align-items: center;
    gap: 10px;
  }
  .rightDiv {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: space-around;
    align-items: flex-start;
  }
  .imageDiv {
    display: flex;
  }
  .descriptionDiv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: center;

    border: 3px solid;
    border-radius: 10px;
  }
  .customCard {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    gap: 55px;
    padding: 55px;
    width: 250px;
    height: 250px;
    background: #2e2e2e !important;

    img {
      width: 170px;
      height: 170px;
      border-radius: 4px;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    h5 {
      color: #ffffff;
    }

    h6 {
      font-weight: 300;
      color: #878787;

      overflow: hidden;
      // text-overflow: ellipsis; gerek yok?
      line-height: 1.5em;
      max-height: 3em;
    }
  }
`;

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [owned, setowned] = useState(false);

  const checkOwnerShip = async (key: string) => {
    console.log(publicKey);
    if (publicKey) {
      console.log(publicKey);
      const balance = await connection.getBalance(publicKey);
      const tokenAccaounts = await connection.getTokenAccountsByOwner(
        publicKey,
        {
          mint: new PublicKey(key),
        }
      );

      const resultArray = tokenAccaounts.value;
      console.log("resultArray", resultArray);
      const pubKeyArray = resultArray.map(({ pubkey }) => pubkey);
      pubKeyArray.forEach(async (pubkey) => {
        const res = await connection.getTokenAccountBalance(pubkey);
        const amount = Number(res.value.amount);
        if (amount > 0) {
          setowned(true);
        }
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (publicKey) {
      getProduct(Number(id)).then((res) => {
        console.log(res);
        if (res) {
          setProduct(res);
          checkOwnerShip(res.token.token_address);
        }
      });
    }
  }, [publicKey]);

  return (
    <Styles>
      <div className="container">
        {loading ? (
          <>Loading</>
        ) : (
          <div className="pt-5 pb-5 pageMainDiv">
            <div className="col-md-5 leftDiv">
              <div className="imageDiv">
                <img src={product?.token.image_url} className="col-md-12"></img>
              </div>
              <div className="col-md-12">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      Created by <span className="text-primary">Eko</span>
                      <br />
                      {product?.description}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Details</Accordion.Header>
                    <Accordion.Body>????</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col-md-7 rightDiv">
              <div>
                <h1 className="fs-5 text-primary">{product?.name}</h1>
              </div>
              <div>
                <h2
                  className="fs-1"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  {product?.name}
                </h2>
              </div>
              <div
                style={{
                  textAlign: "center",
                  margin: "10px",
                }}
              >
                <h5>{product?.bundle_price}$</h5>
              </div>
              <div className="col-md-5">
                <Form.Select>
                  <option value="xs">XS</option>
                  <option value="s">S</option>
                  <option value="m">M</option>
                  <option value="l">L</option>
                  <option value="xl">XL</option>
                </Form.Select>
              </div>
              <Button
                style={{
                  minWidth: "auto",
                  border: "1px solid",
                  borderRadius: "15px",
                  marginTop: "50px",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
                disabled={!owned || loading}
              >
                <i className="fa fa-money"></i>{" "}
                {loading
                  ? "loading"
                  : owned
                  ? "Buy NOW"
                  : "You need to own the related nft!"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Styles>
  );
};

export default ProductPage;
