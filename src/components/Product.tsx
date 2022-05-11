import React from "react";
import styled from "styled-components";
import { Button, Card } from "@material-ui/core";
import Select, { components, ControlProps } from "react-select";
import { ProductRepo } from "../modal/Product.repository";
import { Product } from "../modal/Product";

const productRepostory = new ProductRepo();

const products: Product[] = productRepostory.getProducts();

const myProduct: Product = products[0];

interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const colourOptions: readonly ColourOption[] = [
  { value: "xs", label: "XS" },
  { value: "s", label: "S", isDisabled: true },
  { value: "m", label: "M" },
  { value: "l", label: "L", isFixed: true },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
];

const controlStyles = {
  border: "1px solid black",
  borderRadius: "5px",
  padding: "5px",
  background: "#287094",
  color: "white",
};

const ControlComponent = (props: ControlProps<ColourOption, false>) => (
  <div style={controlStyles}>
    <p>Select Size</p>
    <components.Control {...props} />
  </div>
);

const PageMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  aligncontent: center;
  alignitems: center;
  gap: 10px;
`;

const TopPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  aligncontent: space-around;
  alignitems: center;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligncontent: space-around;
  alignitems: center;
  gap: 10px;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aligncontent: space-around;
  alignitems: center;
`;

const ImageDiv = styled.div`
  display: flex;
`;
const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // background-color: #0f6cfc;

  align-items: center;

  width: 100%;
  height: 100%;

  border: 3px solid;
  border-radius: 10px;
`;

const PropertiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // background-color: #0f6cfc;

  align-items: center;

  width: 100%;
  height: 100%;

  border: 3px solid;
  border-radius: 10px;
`;

const PropertiesPortion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;

  // background-color: #0f6cfc;

  align-items: center;

  width: 100%;
  height: 100%;
`;

const MiniPropertiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #039be5;

  align-items: center;

  width: 100%;
  height: 100%;

  border: 3px solid;
  border-radius: 10px;
`;

const ItemsActivityDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // background-color: #0f6cfc;

  align-items: center;

  width: 100%;
  height: 100%;

  border: 3px solid;
  border-radius: 10px;
`;

const ItemActivityMiniDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  // background-color: #0f6cfc;

  align-items: center;

  gap: 10px;
  padding: 10px;

  width: 100%;
  height: 100%;
`;

const CustomCard = styled(Card)`
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
`;

const Styles = styled.div`
  .myClass {
    color: red;
  }
`;

const ProductPage: React.FC = () => {
  return (
    <Styles>
      <div>
        <h1 className="myClass">Product</h1>
        {/* <PageMainDiv>
          <TopPageDiv>
            <LeftDiv>
              <ImageDiv>
                <img
                  src={myProduct.image}
                  style={{
                    width: "300px",
                  }}
                ></img>
              </ImageDiv>
              <DescriptionDiv>
                <h5>Created by {myProduct.created_by}</h5>
                <h6>{myProduct.description}</h6>
              </DescriptionDiv>
              <PropertiesDiv>
                <h5>Properties</h5>
                <PropertiesPortion>
                  <MiniPropertiesDiv>
                    <h6>Artist</h6>
                    <h6>{myProduct.artist}</h6>
                  </MiniPropertiesDiv>
                  <MiniPropertiesDiv>
                    <h6>Name</h6>
                    <h6>{myProduct.name}</h6>
                  </MiniPropertiesDiv>
                  <MiniPropertiesDiv>
                    <h6>Project</h6>
                    <h6>{myProduct.project}</h6>
                  </MiniPropertiesDiv>
                </PropertiesPortion>
                <PropertiesPortion>
                  <MiniPropertiesDiv>
                    <h6>Release Year</h6>
                    <h6>{myProduct.year}</h6>
                  </MiniPropertiesDiv>
                  <MiniPropertiesDiv>
                    <h6>Released by</h6>
                    <h6>{myProduct.created_by}</h6>
                  </MiniPropertiesDiv>
                  <MiniPropertiesDiv>
                    <h6>Type</h6>
                    <h6>{myProduct.type}</h6>
                  </MiniPropertiesDiv>
                </PropertiesPortion>
              </PropertiesDiv>
            </LeftDiv>
            <RightDiv>
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
              <div
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
              </div>
              <Button
                style={{
                  minHeight: "auto",
                  minWidth: "auto",
                  border: "1px solid",
                  borderRadius: "15px",
                  marginTop: "50px",
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
                Buy NOW
              </Button>
            </RightDiv>
          </TopPageDiv>
          <ItemsActivityDiv>
            <h2>Item Activity</h2>
            <ItemActivityMiniDiv>
              <h5>Event</h5>
              <h5>Price</h5>
              <h5>From</h5>
              <h5>To</h5>
              <h5>Date</h5>
            </ItemActivityMiniDiv>
            <ItemActivityMiniDiv>
              <h5>{}</h5>
              <h5>Price</h5>
              <h5>From</h5>
              <h5>To</h5>
              <h5>Date</h5>
            </ItemActivityMiniDiv>
          </ItemsActivityDiv>
        </PageMainDiv> */}
      </div>
    </Styles>
  );
};

export default ProductPage;
