import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Button, Accordion, Form, Spinner, Carousel } from 'react-bootstrap';
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
  const sizeSizes = ["XS", "S", "M", "L", "XL"];
  const [sizeStock, setSizeStock] = useState<number[]>([]);
  const [sizeAvailable, setsizeAvailable] = useState<boolean[]>([]);
  const [stock, setStock] = useState<number>();


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


  const setStockNumber = (event: React.ChangeEvent<HTMLSelectElement>) => {
    for (let i = 0; i < sizeSizes.length; i++) {
      if (sizeSizes[i] === event.target.value) {
        setStock(sizeStock[i]);
      }
    }
  }


  const loadStock = async (product: IProduct) => {
    let sizeStock = [0, 0, 0, 0, 0];
          let sizeAvailable = [true, true, true, true, true];
          for (let i = 0; i < sizeStock.length; i++) {
            for (let j = 0; j < product.stockKeepingUnits.length; j++) {
              if (product.stockKeepingUnits[j].size === sizeSizes[i]) {
                sizeStock[i] = product.stockKeepingUnits[j].stock;
                if (sizeStock[i] > 0) {
                  sizeAvailable[i] = false;
                }
              }
            }
          }
          setSizeStock(sizeStock);
          setsizeAvailable(sizeAvailable);
  }

  console.log(product);

  useEffect(() => {
    if (publicKey) {
      getProduct(Number(id)).then((res) => {
        console.log(res);
        if (res) {
          setProduct(res);
          loadStock(res);
          checkOwnerShip(res.token.token_address);
        }
      });
    }
  }, [publicKey]);


  return (
    <Styles>
      <div className="container">
        {loading ? (
          <div className="pt-15 pb-15 pageMainDiv">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <div className="pt-5 pb-5 pageMainDiv">
            <div className="col-md-5 leftDiv">
              <div className="imageDiv">

                <Carousel variant='dark' style={{ height: "800px" }}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={product?.token.image_url}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={product?.productImages[0].image_url}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="col-md-12">
                <Accordion defaultActiveKey={['0']} alwaysOpen>

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

                    <Accordion.Body>
                      {product?.token.createdAt}
                    </Accordion.Body>

                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col-md-7 rightDiv">
              <div>

                <h1 className="fs-5">by <span className="text-primary">Eko</span></h1>
              </div>
              <div>
                <h2 className="fs-1"

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
                <h5>{product?.price}$</h5>
              </div>
              {stock 
              ? (<div>
                <h5>{stock} units left</h5>
              </div>)
              : (<div>
                </div>)}
              <div className="col-md-5">
                <Form.Select onChange={setStockNumber}>
                  <option value="XS" disabled={sizeAvailable[0]}>XS</option>
                  <option value="S" disabled={sizeAvailable[1]}>S</option>
                  <option value="M" disabled={sizeAvailable[2]}>M</option>
                  <option value="L" disabled={sizeAvailable[3]}>L</option>
                  <option value="XL" disabled={sizeAvailable[4]}>XL</option>
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
