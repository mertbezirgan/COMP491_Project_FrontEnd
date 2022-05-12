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

const Collections: React.FC = () => {
  const [productsList, setproductsList] = useState<IProduct[]>([]);

  const [extendOwned, setExtendOwned] = React.useState(false);

  const [checked, setChecked] = React.useState({
    owned: false,
    notOwned: false,
  });
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(100);

  function handleChangeCheckbox(event: {
    target: { name: any; checked: any };
  }) {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
    console.log(checked.notOwned);
  }

  const handleChangeMinPrice =
    (prop: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setMinPrice(prop);

      const input = {
        minPrice: prop,
        maxPrice: maxPrice,
        limit: 10,
        offset: 0,
      };

      const fetch = async () => {
        const data = await listProduct(input);

        setproductsList(data.data.data);
        console.log(data.data.data);
        return data.data;
      };
      const res = fetch();

      console.log(prop);
    };

  const handleChangeMaxPrice =
    (prop: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setMaxPrice(prop);
      console.log(maxPrice);
    };

  const handleExtendOwned = () => {
    setExtendOwned(!extendOwned);
  };

  useEffect(() => {
    const input = {
      limit: 10,
      offset: 0,
    };
    const fetch = async () => {
      const data = await listProduct(input);

      setproductsList(data.data.data);
      console.log(data.data.data);
      return data.data;
    };
    const res = fetch();
  }, []);

  // useEffect(() => {

  // }, [productsList]);

  const productsCards = productsList.map((product) => {
    return (
      <Link to={`product/${product.id}`} key={product.id}>
        <ItemCard data={product} />
      </Link>
    );
  });

  return (
    <CollectionsPageDiv>
      <SidebarDiv>
        <Filter>
          <FilterTitle>Price</FilterTitle>
          {/* <FormControl fullWidth>
            <InputLabel
              htmlFor="standard-adornment-amount"
              style={{
                fontSize: "10px",
              }}
            >
              Min
            </InputLabel>
            <Input
              id="standard-adornment-min"
              style={{
                width: "50px",
              }}
              value={minPrice}
              // onKeyPress={
              //   (e) => {console.log(e.target)}
              // }
              // onChange={(e) => handleChangeMinPrice(e.target.value)}
              startAdornment={
                <InputAdornment position="start">₺</InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel
              htmlFor="standard-adornment-amount"
              style={{
                fontSize: "10px",
              }}
            >
              Max
            </InputLabel>
            <Input
              id="standard-adornment-max"
              style={{
                width: "50px",
              }}
              value={maxPrice}
              onChange={handleChangeMaxPrice(maxPrice)}
              startAdornment={
                <InputAdornment position="start">₺</InputAdornment>
              }
            />
          </FormControl> */}

          <label htmlFor="customRange2" className="form-label">
            Max Price
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            id="customRange2"
          ></input>
        </Filter>

        <Seperator />

        <Filter>
          <FilterTitle>
            <span>Is Owned?</span>
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
        <FilterInfoBar>
          <div
            style={{
              padding: "5px",
            }}
          >
            Price: 0 - 100
          </div>
        </FilterInfoBar>

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
