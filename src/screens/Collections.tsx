import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductRepo } from "../modal/Product/Product.repository";
import { Product } from "../modal/Product/Product";
import ItemCard from "../components/ItemCard";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { listProduct } from "../services/Product/product.service";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import IProduct from "../types/product.type";
import { Link } from "react-router-dom";
import { Col, Form, Row } from "react-bootstrap";
import { IconButton } from "@material-ui/core";

// import RangeSlider from 'react-bootstrap-range-slider';

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
  padding-left: 10px;
  padding-right: 10px;

  width: 300px;
  height: 100%;

  // border: 3px solid;
  // border-radius: 10px;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;
  font-weight: bold;
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

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ExtendButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FilterInfoBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  padding: 10px;

  font-size: 12px;
  border-radius: 10px;
  background-color: #87c3e1;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    border: 1px solid;
    border-radius: 5px;
    background-color: #fff;
  }
`;

// const Slider = styled.div`
//   width:
// `;

const Collections: React.FC = () => {
  const [productsList, setProductList] = useState<IProduct[]>([]);

  const [extendOwned, setExtendOwned] = React.useState(false);

  const [checked, setChecked] = React.useState({
    owned: false,
    notOwned: false,
  });
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(500);

  function handleChangeCheckbox(event: {
    target: { name: any; checked: any };
  }) {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
    console.log(checked.notOwned);
  }

  const handleExtendOwned = () => {
    setExtendOwned(!extendOwned);
  };

  //Initial product list
  useEffect(() => {
    const input = {
      limit: 10,
      offset: 0,
    };
    const fetch = async () => {
      const data = await listProduct(input);

      setProductList(data.data.data);
      console.log(data.data.data);
      return data.data;
    };
    const res = fetch();
  }, []);

  //Min-price-filtered product list
  useEffect(() => {
    const input = {
      minPrice: minPrice,
      limit: 10,
      offset: 0,
    };

    const fetch = async () => {
      const data = await listProduct(input);

      setProductList(data.data.data);
      console.log(data.data.data);
      return data.data;
    };
    const res = fetch();
  }, [minPrice]);

  //Max-price-filtered product list
  useEffect(() => {
    const input = {
      maxPrice: maxPrice,
      limit: 10,
      offset: 0,
    };

    const fetch = async () => {
      const data = await listProduct(input);

      setProductList(data.data.data);
      console.log(data.data.data);
      return data.data;
    };
    const res = fetch();
  }, [maxPrice]);


  //               ????? @@@@@@@@@@@@@ ?????

  // //Once-sold-filtered product list
  // useEffect(() => {
  //   if (checked.notOwned !== checked.owned) {
  //     var bool = false;

  //     if (checked.notOwned) {
  //       bool = true;
  //     }
  //   }

  //   const input = {
  //     limit: 10,
  //     offset: 0,
  //     notOwned: bool,
  //   };

  //   const fetch = async () => {
  //     const data = await listProduct(input);

  //     setProductList(data.data.data);
  //     console.log(data.data.data);
  //     return data.data;
  //   };
  //   const res = fetch();
  // }, [checked]);

  //Creating product list after fetching data
  const productsCards = productsList.map((product) => {
    return (
      <Link to={`product/${product.id}`} key={product.id}>
        <ItemCard data={product} />
      </Link>
    );
  });

  // console.log(minPrice, maxPrice);

  return (
    <CollectionsPageDiv>
      <SidebarDiv>
        <Filter>
          <FilterTitle>Price</FilterTitle>

          <label className="mt-2 form-label">Min Price</label>
          <span>
            <input
              type="range"
              style={{
                width: "70%",
                verticalAlign: "middle",
              }}
              value={minPrice}
              onChange={(e) => setMinPrice(parseInt(e.target.value))}
              className="form-range"
              min="0"
              max={maxPrice}
              step="10"
            />
            <span
              style={{
                marginLeft: "10px",
              }}
            >
              {minPrice}
            </span>
          </span>

          <label className="mt-2 form-label">Max Price</label>
          <span>
            <input
              type="range"
              style={{
                width: "70%",
              }}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="form-range"
              min={minPrice}
              max="500"
              step="10"
            />
            <span
              style={{
                marginLeft: "10px",
              }}
            >
              {maxPrice}
            </span>
          </span>
        </Filter>

        <Seperator />

        <Filter>
          <FilterTitle>
            <span>Is Owned?</span>

            {/* TODO */}

            <ExtendButton onClick={handleExtendOwned}>v</ExtendButton>
          </FilterTitle>
          {extendOwned ? (
            <div>
              <FormControlLabel
                className="title"
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
            </div>
          ) : null}
        </Filter>

        <Seperator />
      </SidebarDiv>

      <Content>
        {/* <FilterInfoBar>
          <div
            style={{
              padding: "5px",
            }}
          >
            Price: 0 - 100
          </div>
        </FilterInfoBar> */}

        <Table>{productsCards}</Table>

        {/* <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <span className="page-link">Previous</span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <span className="page-link">
                2<span className="sr-only"></span>
              </span>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav> */}
      </Content>
    </CollectionsPageDiv>
  );
};

export default Collections;
