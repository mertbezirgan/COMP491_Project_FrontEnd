import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { Product } from "../modal/Product/Product";
import { Card } from "@material-ui/core";
import { BackIcon, ForwardIcon } from "../asset/Icons";
import IProduct from "../types/product.type";
import Carousel from "react-bootstrap/Carousel";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  padding: 15px;
  width: 300px;
  height: 580px;

  img {
    margin-bottom: 10px;
    width: 270;
    height: 400px;
    border-radius: 4px;
  }

  h5 {
    color: #878787;
  }

  h6 {
    font-weight: 300;
    color: #878787;

    overflow: hidden;
    line-height: 1.5em;
    max-height: 3em;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ItemCard: React.FC<{ data: IProduct }> = ({ data }) => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const images = [
    data.token.image_url,
    ...data.productImages.map((image) => image.image_url),
  ];

  const createImages = () => {
    return images.map((image) => (
      <Carousel.Item>
        <img className="d-block w-100" src={image} alt="ahdbasşhjsdşs" />
      </Carousel.Item>
    ));
  };

  return (
    <StyledCard>
      {/* <Carousel activeIndex={index} onSelect={handleSelect}> */}
      <div>
        <Carousel>{createImages()}</Carousel>
        <h5>{data.name}</h5>
      </div>
      <div>
        <h6
          style={{
            bottom: "20",
          }}
        >
          Price: {data.price}$
        </h6>
        <h6
          style={{
            bottom: "0",
          }}
        >
          Bundle price: {data.price}$
        </h6>
      </div>
    </StyledCard>
  );
};

export default ItemCard;
