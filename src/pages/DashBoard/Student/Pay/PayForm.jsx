import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './PayForm.css';
const PayForm = ({ Price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();

    useEffect(() => {
        if (Price > 0) {
            const createPaymentIntent = async () => {
                try {
                    const response = await fetch('http://localhost:5000/create-payment-intent', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ Price }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        // console.log(data.clientSecret);
                        setClientSecret(data.clientSecret);
                    } else {
                        console.error('Failed to create payment intent');
                    }
                } catch (error) {
                    console.error('Error creating payment intent:', error);
                }
            };
            createPaymentIntent();
        }
    }, [Price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous',
                },
            },
        });
    };
    return (
        <>
            <div className="container my-16">
                <div className="page-content  my-16">
                    <p className="text-4xl mb-8 text-red-500 font-bold">Payment Details</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Card Information</label>
                            <div className="border border-gray-300 rounded-md p-3">
                                <CardElement
                                    options={{
                                        style: {
                                            base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                    color: '#aab7c4',
                                                },
                                            },
                                            invalid: {
                                                color: '#9e2146',
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <button
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white font-bold py-2 px-8 rounded disabled:pointer-events-none"
                            type="submit"
                            disabled={!stripe || !clientSecret}
                        >
                            Pay Now
                        </button>
                    </form>
                    {cardError && <p className="text-red-600 mt-4">{cardError}</p>}
                </div>
            </div>
        </>
    );
};

export default PayForm;
