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
import { Col, Form, Row, Accordion, Spinner } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import { Prev } from "react-bootstrap/esm/PageItem";

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

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 25px;
`;

const Collections: React.FC = () => {
  const [productsList, setProductList] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [extendOwned, setExtendOwned] = React.useState(false);

  const [checked, setChecked] = React.useState({
    owned: false,
    notOwned: false,
  });
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(5000);
  const [offset, setOffset] = React.useState<number>(0);

  function handleChangeCheckbox(event: {
    target: { name: any; checked: any };
  }) {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
    // console.log(checked.notOwned);
  }

  //Change page
  useEffect(() => {
    const input = {
      minPrice: minPrice,
      maxPrice: maxPrice,
      limit: 10,
      offset: offset,
    };

    const fetch = async () => {
      const data = await listProduct(input);

      if (data.data.data.length > 0) {
        setProductList(data.data.data);
      } else {
        setOffset(offset - 10);
      }

      console.log(data.data.data);
      return data.data;
    };
    const res = fetch();
    setLoading(false);
  }, [minPrice, maxPrice, offset]);

  //Creating product list after fetching data
  const productsCards = productsList.map((product) => {
    return (
      <Link style={{
        textDecoration: 'none',
      }} to={`product/${product.id}`} key={product.id}>
        <ItemCard data={product} />
      </Link>
    );
  });

  const prevPage = () => {
    if (offset - 10 < 0) {
      // ALERT
    } else {
      setOffset(offset - 10);
    }
  };

  const nextPage = () => {
    setOffset(offset + 10);
  };

  // console.log(minPrice, maxPrice);
  console.log(offset);

  return (
    <div>
      {loading ? (
        <div className="pt-15 pb-15">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <CollectionsPageDiv>
          <SidebarDiv>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                  <FilterTitle>
                    <label className="mt-2 form-label">Min Price</label>
                  </FilterTitle>
                  <div>
                    <input
                      type="range"
                      style={{
                        width: "75%",
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
                        marginLeft: "20px",
                      }}
                    >
                      {minPrice}
                    </span>
                  </div>

                  <div>
                    <FilterTitle>
                      <label className="mt-2 form-label">Max Price</label>
                    </FilterTitle>
                    <input
                      type="range"
                      style={{
                        width: "75%",
                      }}
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                      className="form-range"
                      min={minPrice}
                      max="1500"
                      step="10"
                    />
                    <span
                      style={{
                        marginLeft: "20px",
                      }}
                    >
                      {maxPrice}
                    </span>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
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

            <Pagination>
              {/* <nav aria-label="..."> */}
              {/* <ul className="pagination"> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={prevPage}
              >
                Previous
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={nextPage}
              >
                Next
              </button>
              {/* </ul> */}
              {/* </nav> */}
            </Pagination>
          </Content>
        </CollectionsPageDiv>
      )}
      ;
    </div>
  );
};

export default Collections;
