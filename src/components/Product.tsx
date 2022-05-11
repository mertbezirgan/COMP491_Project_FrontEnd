import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
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

console.log(myProduct);
const ProductPage: React.FC = () => {
  return (
    <Styles>
    <div className="container">
        <div className="pt-5 pageMainDiv">
          <div className="col-md-5 leftDiv">
            <div className="imageDiv">
              <img
                src={myProduct.image}
                className="col-md-12"
              ></img>
            </div>
            <div className="descriptionDiv">
              <h5>Created by {myProduct.created_by}</h5>
              <h6>{myProduct.description}</h6>
            </div>
          </div>
          <div className="col-md-7 rightDiv">
            <div>
              <h1>{myProduct.artist}</h1>
            </div>
            <div>
              <h2
                style={{
                  fontWeight: "bold",
                }}
              >
                {myProduct.name}
              </h2>
            </div>
            <div>
              <h3>{myProduct.description}</h3>
            </div>
            <div
              style={{
                textAlign: "center",
                margin: "10px",
              }}
            >
              <h5>{myProduct.price}₺</h5>
            </div>
            {/*<div
                style={{
                  textAlign: "center",
                  margin: "10px",
                }}
              >
                <Select
                  defaultValue={colourOptions[0]}
                  isClearable
                  components={{ Control: ControlComponent }}
                  isSearchable
                  name="color"
                  options={colourOptions}
                />
              </div>*/}
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
