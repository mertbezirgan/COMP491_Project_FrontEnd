import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import { Product } from "../modal/Product/Product";
import { Card } from "@material-ui/core";
import { BackIcon, ForwardIcon } from "../asset/Icons";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding: 15px;
  width: 300px;
  height: 450px;
  // background: #2e2e2e !important;

  img {
    margin-bottom: 10px;
    width: 270;
    height: 270px;
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

const ItemCard: React.FC<{ data: Product }> = ({ data }) => {
  const [pickedImage, setPickedImage] = React.useState(data.images[0]);

  const backClickHandler = () => {
    const index = data.images.indexOf(pickedImage);
    if (index > 0) {
      setPickedImage(data.images[index - 1]);
    }
  };

  const forwardClickHandler = () => {
    const index = data.images.indexOf(pickedImage);
    if (index < data.images.length - 1 && data.images.length > 1) {
      setPickedImage(data.images[index + 1]);
    }
  };

  return (
    <StyledCard>
      <img src={pickedImage} alt={data.name} />
      <ButtonGroup>
        <IconButton onClick={backClickHandler}>
          <BackIcon />
        </IconButton>
        <IconButton onClick={forwardClickHandler}>
          <ForwardIcon />
        </IconButton>
      </ButtonGroup>
      <h5>{data.name}</h5>
      <h6>Price: {data.price}₺</h6>
      <h6>Bundle price: {data.price}₺</h6>
    </StyledCard>
  );
};

export default ItemCard;
