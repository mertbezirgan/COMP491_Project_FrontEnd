import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Card } from "@material-ui/core";
import { ProductRepo } from "../modal/Product.repository";
import { Product } from "../modal/Product";

const CollectionsPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //   background-color: #2ff;

  margin: 10px;
`;

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fffff0;
  align-items: center;

  width: 20%;
  height: 100%;

  border: 3px solid;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  //   background-color: #0f6cfc;

  width: 80%;

  border: 3px solid;
  border-radius: 10px;
`;

const Table = styled.div`
  display: flex;
`;

const CustomCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 15px;
  padding: 15px;
  width: 300px;
  height: 400px;
  background: #2e2e2e !important;

  img {
    width: 100%;
    height: 100%;
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
`;

const productRepostory = new ProductRepo();

const products: Product[] = productRepostory.getProducts();

function productCards() {
  return products.map((product) => (
    <Link to="/product">
      <CustomCard key={product.id}>
        <img src={product.image} alt={product.name} />
        <div>
          <h5>{product.name}</h5>
          <h6>{product.price}</h6>
        </div>
      </CustomCard>
    </Link>
  ));
}

const Collections: React.FC = () => {
  return (
    <CollectionsPageDiv>
      <SidebarDiv>
        {/* GEÇİCİ */}
        <Button
          style={{
            border: "1px solid",
            marginTop: "5px",
          }}
          component={Link}
          to="/product"
        >
          Producta gider
        </Button>
        {/* GEÇİCİ */}

        <div>
          <h3>Filter 1</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>

        <div>
          <h3>Filter 2</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>

        <div>
          <h3>Filter 3</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
          </ul>
        </div>
      </SidebarDiv>

      <Content>
        <h2>Products</h2>
        <Table>{productCards()}</Table>
      </Content>
    </CollectionsPageDiv>
  );
};

export default Collections;
