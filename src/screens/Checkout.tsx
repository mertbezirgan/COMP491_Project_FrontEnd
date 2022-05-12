import React, { useState } from "react";
import { Form, Field } from 'react-final-form'
import { Link, RouteComponentProps } from "react-router-dom";
import "../css/login.css";
import { Button } from "react-bootstrap";
import { useLocalStorage } from "usehooks-ts";
import { storageKeys } from "../services/storage.service";
import styled, { css } from 'styled-components'
import Card from "../components/Card";


const Styles = styled.div`
  min-height: calc(100vh - 70px);
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: #222;
  }

  h2 {
    text-align: center;
    color: #222;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #222;
    margin-bottom: 10px;
  }

  p {
    max-width: 500px;
    margin: 10px auto;
    & > a {
      display: inline;
    }
  }

  .loading {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin: 50px;
  }

  form,
  div.form {
    text-align: left;
    max-width: 500px;
    margin: 40px auto;
    border: none;
    padding: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 30px;
    position: relative;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      position: relative;
      padding: 8px 5px;
      border: 1px solid transparent;
      &.active {
        background-color: paleturquoise;
        border-color: turquoise;
      }
      & > label {
        color: #333;
        width: 110px;
        min-width: 60px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > .downshift > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 6px 9px;
        font-size: 1em;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
        &[disabled] {
          background: #eee;
        }
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          margin-left: 0;
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
        &.downshift {
          margin-left: 0;
          padding-left: 15px;
          flex: 1;
          & > input {
            width: 100%;
            padding: 6px 5px;
            font-size: 1em;
            margin-left: 0;
            border: 1px solid #ccc;
            border-radius: 3px;
          }
        }
      }
      & > span {
        line-height: 32px;
        margin-left: 10px;
        color: #800;
        font-weight: bold;
      }
      & > button.remove {
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      margin-top: 15px;
    }

    .error {
      display: flex;
      font-weight: bold;
      color: #800;
      flex-flow: row nowrap;
      justify-content: center;
    }
    pre {
      position: relative;
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
    .submitting {
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      padding: 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      z-index: 10;
      font-weight: bold;
      font-size: 0.8em;
    }
    .saving {
      font-size: 0.8em;
      font-weight: bold;
      color: darkblue;
      margin: 8px 0 0 7px;
    }
  }
  button {
    margin: 0 10px;
   
  }
  .downshift-options {
    border: 1px solid #ddd;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    & > div {
      padding: 3px 5px;
    }
  }
`


interface RouterProps {
  history: string;
}

type Props = RouteComponentProps<RouterProps>;

const Checkout: React.FC<Props> = ({ history }) => {

function clearNumber(value = '') {
  return value.replace(/\D+/g, '')
}

function formatCreditCardNumber(value: string | undefined) {
  if (!value) {
    return value
  }

  const issuer = value.length > 3 ? "amex" : "dinersclub";
  const clearValue = clearNumber(value)
  let nextValue

  switch (issuer) {
    case 'amex':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 15)}`
      break
    case 'dinersclub':
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        10
      )} ${clearValue.slice(10, 14)}`
      break
    default:
      nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
        4,
        8
      )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`
      break
  }

  return nextValue.trim()
}

function formatCVC(value: string | undefined, prevValue: any, allValues = { number: 0 }) {
  const clearValue = clearNumber(value)
  let maxLength = 4

  if (allValues.number) {
    const issuer = 'amex';
    maxLength = issuer === 'amex' ? 4 : 3
  }

  return clearValue.slice(0, maxLength)
}

function formatExpirationDate(value: string | undefined) {
  const clearValue = clearNumber(value)

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
  }

  return clearValue
}

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values: any) => {
    await sleep(300);
    window.alert(JSON.stringify(values, null, 2));
  };

  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        render={(renderBody: any) => {
          return (
            <form onSubmit={renderBody.handleSubmit}>
              <Card
                number={renderBody.values.number || ""}
                name={renderBody.values.name || ""}
                expiry={renderBody.values.expiry || ""}
                cvc={renderBody.values.cvc || ""}
                focused={renderBody.active}
              />
              <div>
                <Field
                  name="number"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="Card Number"
                  format={formatCreditCardNumber}
                />
              </div>
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <Field
                  name="expiry"
                  component="input"
                  type="text"
                  pattern="\d\d/\d\d"
                  placeholder="Valid Thru"
                  format={formatExpirationDate}
                />
                <Field
                  name="cvc"
                  component="input"
                  type="text"
                  pattern="\d{3,4}"
                  placeholder="CVC"
                  format={formatCVC}
                />
              </div>
              <div className="buttons">
                <Button type="submit" disabled={renderBody.submitting}>
                  Submit
                </Button>
                <Button
                  onClick={renderBody.form.reset}
                  disabled={renderBody.submitting || renderBody.pristine}
                  variant="secondary"
                >
                  Reset
                </Button>
              </div>
            </form>
          );
        }}
      />
    </Styles>
  );
};

export default Checkout;
