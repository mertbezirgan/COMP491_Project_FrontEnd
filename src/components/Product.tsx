import React from "react";
import styled from "styled-components";
import { Button, Accordion, Form } from 'react-bootstrap';
import { ProductRepo } from "../modal/Product.repository";
import { Product } from "../modal/Product";

const productRepostory = new ProductRepo();

const products: Product[] = productRepostory.getProducts();

const myProduct: Product = products[0];


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
`;

console.log(myProduct);
const ProductPage: React.FC = () => {
  return (
    <Styles>
      <div className="container">
        <div className="pt-5 pb-5 pageMainDiv">
          <div className="col-md-5 leftDiv">
            <div className="imageDiv">
              <img
                src={myProduct.image}
                className="col-md-12"
              ></img>
            </div>
            <div className="col-md-12">
              <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Description</Accordion.Header>
                  <Accordion.Body>
                    Created by <span className="text-primary">{myProduct.created_by}</span>
                    <br />
                    {myProduct.description}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Details</Accordion.Header>
                  <Accordion.Body>
                    ????
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-md-7 rightDiv">
            <div>
              <h1 className="fs-5 text-primary">{myProduct.artist}</h1>
            </div>
            <div>
              <h2 className="fs-1"
                style={{
                  fontWeight: "bold",
                }}
              >
                {myProduct.name}
              </h2>
            </div>
            <div
              style={{
                textAlign: "center",
                margin: "10px",
              }}
            >
              <h5>{myProduct.price}₺</h5>
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
            >
              <i className="fa fa-money"></i>
              {" "}Buy NOW
            </Button>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default ProductPage;
