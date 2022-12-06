import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";


export const CheckoutForm=()=>{
    const stripe= useStripe();
    const elements= useElements()

    const handleSubmit= async(event)=>{
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card: elements.getElement(CardElement),
        });
        if(!error) {
            console.log ('token généré', paymentMethod)
            try {
                const {id} = paymentMethod;
                const response = await axios.post ("http://localhost:8000/stripe",
                {
                    amount: 100,
                    id: id,
                });
                if (response.data.success)
                console.log('paiement réussi');

            }
            catch(error) {
                console.log("erreur" , error)
            }
        }

    }
    return (
        <form onSubmit={handleSubmit} style ={{maxWidth: 400}}>
            <CardElement 
            options={{
                hidePostalCode: true
            }}
            />
            <button>Payer</button>
        </form>
    )
}