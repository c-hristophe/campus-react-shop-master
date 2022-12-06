import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51MA6XkAKuS6Qd6Smi50hvutgrQliOKo8z0YLc28noY3Ac9RB8yYslAhsRK0NGI8DGQgHqL1EHCnAjw85CaCd2ykt00LsJGt9ab";
const stripeTestPromise = loadStripe(PUBLIC_KEY);
const stripe= ()=>{
    
return(
<Elements stripe={stripeTestPromise}>
    <CheckoutForm/>
</Elements>
    );
};

export default stripe