import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Table, Icon, Button, Form } from "semantic-ui-react";


export const CheckoutForm=()=>{
    const stripe= useStripe();
    const elements= useElements()
    
    const price= localStorage.getItem("payment")*100
    console.log(price)

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
                axios.post ("http://localhost:8080/stripe/charge",
                {
                    amount: price,
                    id: id,
                });
                
                console.log('paiement réussi');
                alert ("paiement réussi, nous traitons votre commande et vous tenons informé par mail de son envoi")
                
            }
            catch(error) {
                console.log("erreur" , error)
                alert ("paiement en échec, votre carte ne sera pas débitée")
            }
        }
        localStorage.removeItem("payment")
        localStorage.removeItem ("react-shop")
        window.location.reload()
    }

    
    return (
        <Form className= "pay" onSubmit={handleSubmit} style ={{maxWidth: 400,}}>
            <CardElement 
            options={{
                hidePostalCode: true
            }}
            />
            <Button>Payer</Button>
        </Form>
    )
}