import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button, Card } from "@material-ui/core";
import Select, { components, ControlProps } from 'react-select';



interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

const colourOptions: readonly ColourOption[] = [
    { value: 'xs', label: 'XS' },
    { value: 's', label: 'S', isDisabled: true },
    { value: 'm', label: 'M' },
    { value: 'l', label: 'L', isFixed: true },
    { value: 'xl', label: 'XL' },
    { value: 'xxl', label: 'XXL' },
];

const controlStyles = {
    border: '1px solid black',
    borderRadius: "5px",
    padding: '5px',
    background: '#287094',
    color: 'white',
};

const ControlComponent = (props: ControlProps<ColourOption, false>) => (
    <div style={controlStyles}>
        <p>Select Size</p>
        <components.Control {...props} />
    </div>
);

const CollectionsPageDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  alignContent: space-around;
  alignItems: center;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  alignContent: space-around;
  alignItems: center;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  alignContent: space-around;
  alignItems: center;
`;

const Table = styled.div`
  display: flex;
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

const Product: React.FC = () => {
    return (
        <div>
            <h1>Product</h1>

            <CollectionsPageDiv>
                <RightDiv>
                    <div style={{
                        width: 100,
                        height: 50
                    }}
                    >
                        <Table>
                            <CustomCard></CustomCard>
                        </Table>
                    </div>
                </RightDiv>
                <LeftDiv>
                    <div>
                        <h2 style={{
                            fontWeight: "bold",
                        }}>
                            Title of NFT
                        </h2>
                    </div>
                    <div>
                        <h3>
                            Information about NFT
                        </h3>
                    </div>
                    <div>
                        <h4>
                            Story
                        </h4>
                    </div>
                    <div>
                        <h5>
                            Price
                        </h5>
                    </div>
                    <div>
                        <Select
                            defaultValue={colourOptions[0]}
                            isClearable
                            components={{ Control: ControlComponent }}
                            isSearchable
                            name="color"
                            options={colourOptions}
                        />
                    </div>
                    <Button style={{
                        minHeight: "auto",
                        minWidth: "auto",
                        border: "1px solid",
                        borderRadius: "15px",
                        marginTop: "50px",
                        fontSize: "50px",
                        fontWeight: "bold"
                    }}>
                        Buy NOW
                    </Button>
                </LeftDiv>
            </CollectionsPageDiv >
        </div >
    );
};

export default Product;


