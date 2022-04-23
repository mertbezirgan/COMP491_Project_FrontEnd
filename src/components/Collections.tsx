import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductRepo } from "../modal/Product/Product.repository";
import { Product } from "../modal/Product/Product";
import ItemCard from "./ItemCard";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";

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
  padding: 20px;

  width: 300px;
  height: 100%;

  // border: 3px solid;
  // border-radius: 10px;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: #0f6cfc;

  width: calc(100% - 300px);

  // border: 3px solid;
  // border-radius: 10px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-flow: row wrap;
`;

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 300,
    label: "300",
  },
];

const productRepostory = new ProductRepo();

const products: Product[] = productRepostory.getProducts();

function productCards() {
  return products.map((product) => (
    // <Link to="/product" key={product.id}>
    <ItemCard data={product} />
    // </Link>
  ));
}

const Collections: React.FC = () => {
  const [checked, setChecked] = React.useState({
    owned: true,
    notOwned: true,
  });

  const [price, setPrice] = React.useState<number[]>([0, 100]);

  function handleChangeCheckbox(event: {
    target: { name: any; checked: any };
  }) {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  }

  const handleChangeSlider = (event: any, newValue: number | number[]) => {
    setPrice(newValue as number[]);
  };

  return (
    <CollectionsPageDiv>
      <SidebarDiv>
        <Filter>
          <h6>Is Owned</h6>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.owned}
                onChange={handleChangeCheckbox}
                name="owned"
              />
            }
            label="Owned"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.notOwned}
                onChange={handleChangeCheckbox}
                name="notOwned"
              />
            }
            label="Not Owned"
          />
        </Filter>

        <Filter>
          <h6>Price</h6>
          <Slider
            value={price}
            onChange={handleChangeSlider}
            valueLabelDisplay="auto"
          />
        </Filter>
      </SidebarDiv>

      <Content>
        <Table>{productCards()}</Table>
      </Content>
    </CollectionsPageDiv>
  );
};

export default Collections;
