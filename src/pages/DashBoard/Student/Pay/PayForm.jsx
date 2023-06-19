import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import './PayForm.css';
import Swal from 'sweetalert2';
const PayForm = ({ Price, selectedClasses, id }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useAuth();
    const [processing, setProcessing] = useState(false);
    useEffect(() => {
        if (Price > 0) {
            const createPaymentIntent = async () => {
                try {
                    const response = await fetch('https://summer-camp-server-silk.vercel.app/create-payment-intent', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ Price }),
                    });

                    if (response.ok) {
                        const data = await response.json();
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
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError('');
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous',
                },
            },
        });
        console.log(paymentIntent);
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                Price,
                date: new Date(),
                selectedItems: selectedClasses.map((item) => item._id),
                selectedClass: selectedClasses.map((item) => item.selectedClassId),
                selectedNames: selectedClasses.map((item) => item.name),
                image: selectedClasses.map((item) => item.image)
            };

            fetch('https://summer-camp-server-silk.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payment),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        fetch(`https://summer-camp-server-silk.vercel.app/selectedClass/${selectedClasses.map((item) => item._id)}`, {
                            method: 'DELETE',
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });

                        fetch(`https://summer-camp-server-silk.vercel.app/classes/${selectedClasses.map((item) => item.selectedClassId)}`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ selectedClasses }),
                        })
                            .then((res) => {
                                console.log(res);
                                return res.json();
                            })
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((error) => console.log(error));

                        Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful',
                            text: 'Your payment has been processed successfully.',
                            showConfirmButton: false,
                            timer: 2000,
                        }).then(() => {
                            const cardElement = elements.getElement(CardElement);
                            cardElement.clear();
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
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
                            disabled={!stripe || !clientSecret || processing}
                        >
                            Pay Now
                        </button>
                    </form>
                    {cardError && <p className="text-red-400 mt-4">{cardError}</p>}
                </div>
            </div>
        </>
    );
};

export default PayForm;
