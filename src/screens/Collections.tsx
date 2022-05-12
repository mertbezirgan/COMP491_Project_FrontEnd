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

const productsss = [
  {
    name: "Gray summer hoodie",
    price: "200",
    description: "Good for hot summer days",
    images: [
      "https://cdn.dsmcdn.com/ty47/product/media/images/20210107/11/48098883/109495684/1/1_org_zoom.jpg"
    ]
  },
  {
    name: "Black t-shirt",
    price: "123",
    description: "asdgdsf",
    images: [
      "https://productimages.hepsiburada.net/l/20/600-800/9868106498098.jpg"
    ]
  },
  {
    name: "Cactus",
    price: "40",
    description: "asdgdsf",
    images: [
"https://productimages.hepsiburada.net/l/37/600-800/10544243933234.jpg"
    ]

  },
  {
    name: "Skull T",
    price: "120",
    description: "asdgdsf",
    images: [
      "https://cdn-merchant.ganipara.com/assets/5603/product/329597/venti_bodrum-skull-tasarim-baskili-tisort-erkek-tisort-baski-1586024832.jpg"
    ]

  },
  {
    name: "White t-shirt",
    price: "50",
    description: "asd",
    images: [
      "https://cdn.shopify.com/s/files/1/0269/9243/products/Coronakolonyaerkektisort_1182x.jpg?v=1584172258"
    ]

  },
  {
    name: "Zaft",
    price: "150",
    description: "asdgdsf",
    images: [
"https://www.kaft.com/static/images/tee2/1000_1.jpg?cacheID=1634184805000"
    ]
  },
]

const Collections: React.FC = () => {
  
  const [productsList, setproductsList] = useState<Product[]>([]);
  
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
      
      return data.data;
    };
    const res = fetch();
  }, []);

  useEffect(() => {
    console.log(productsList);
    // console.log(productsList[0]);

  }, [productsList]);

  const productsCards = productsList.map(product => {
    console.log(product);
    return <ItemCard data={product} key={product.id} />;
  });
  
  // function getProductCards() {
  //   if (productsList.length > 0) {
  //     console.log(productsList[0]);
  //       return <ItemCard data={productsList[0]}/>;
  //   }
  // };

  return (
    <CollectionsPageDiv>
      <SidebarDiv>
        <Filter>
          <FilterTitle>Price</FilterTitle>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount"
            style={{
              fontSize: "10px",
            }}>
              Min
            </InputLabel>
            <Input
              id="standard-adornment-min"
              style={{
                width: "50px",
              }}
              value={minPrice}
              onChange={(val) => {
                handleChangeMinPrice(maxPrice);
              }}
              startAdornment={
                <InputAdornment position="start">₺</InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="standard-adornment-amount"
            style={{
              fontSize: "10px",
            }}>
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
          </FormControl>
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
          <div style={{
            padding : "5px",
          }}>Price: 0 - 100</div>
        </FilterInfoBar>

        <Table>
          <ItemCard data={productsss[0]}/>
          <ItemCard data={productsss[1]}/>
          <ItemCard data={productsss[2]}/>
          <ItemCard data={productsss[3]}/>
          <ItemCard data={productsss[4]}/>
          <ItemCard data={productsss[5]}/>
          {productsCards}
        </Table>
      </Content>
    </CollectionsPageDiv>
  );
};

export default Collections;
