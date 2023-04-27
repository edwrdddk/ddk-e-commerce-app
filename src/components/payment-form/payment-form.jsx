import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;  //exit
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay now </Button>
      </FormContainer>
    </PaymentFormContainer>
  )
}