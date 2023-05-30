import styled from "styled-components";
import Button from "../button/button";

export const PaymentFormContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;

  @media screen and (max-width: 800px) {
    min-width: unset;
    width: 80vw
  }
`

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`