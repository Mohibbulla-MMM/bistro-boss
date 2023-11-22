import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useCarts from "../../../hooks/useCarts";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { user } = useAuth();
  const [err, setErr] = useState("");
  const [trasectionId, setTransectionId] = useState();
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();



  const [cart, refetch] = useCarts();
  const totalPrice =
    cart && cart?.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPrice]);
  console.log(clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setErr(error.message);
    } else {
      console.log("Payment Maythods", paymentMethod);
      setErr("");
    }
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymouse@gmail.com",
            name: user?.displayName,
          },
        },
      });
    if (confirmError) {
      console.log("Payment Confirm Error", confirmError);
    } else {
      console.log("Payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransectionId(paymentIntent.id);
      }
    }
    ///////////////////////////////////////////////////////
    const payment = {
      email: user?.email,
      price: totalPrice,
      transactionId: paymentIntent.id,
      data: new Date(), // TODO: utc convert. use monent js
      cardIds: cart.map((item) => item._id),
      menuItemIds: cart?.map((item) => item?.menuId),
      status: "pending",
    };
    const res = await axiosSecure.post("/payments", payment);
    if (res.data.insertedId) {
      toast.success("Payment success");
      refetch();
      navigate('/dashbord/payment_history');
    }
    console.log("payment save", res);
  };
  // console.log(cart);
  return (
    <div className="max-w-md mx-auto p-5 bg-gray-100">
      <h2 className="text-xl font-bold mb-3">Totla price: {totalPrice}</h2>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-block my-4 rounded-none btn-sm"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        {trasectionId && (
          <p className="text-green-600 font-semibold"> {trasectionId} </p>
        )}
        <p className="text-red-600">{err && err}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
