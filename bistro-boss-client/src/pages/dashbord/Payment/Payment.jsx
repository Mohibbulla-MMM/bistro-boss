import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
 
// import ChackOut from "./ChackOut";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API_PK);

const Payment = () => {
  console.log(stripePromise);
  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please Pay to eat" />

      <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
    </div>
  );
};

export default Payment;
