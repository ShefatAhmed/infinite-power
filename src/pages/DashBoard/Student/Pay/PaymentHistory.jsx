import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
const PaymentHistory = () => {
    const { user } = useAuth();
    const [paymentsHistory, setPaymentsHistory] = useState([]);
    useEffect(() => {
        fetch(`https://summer-camp-server-silk.vercel.app/paymenthistory/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setPaymentsHistory(data);
            });
    }, [user]);
    return (
        <div className="flex flex-col items-center my-16">
            <h1 className='text-center font-bold text-xl my-4 uppercase'>Payment History</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Paid Classes</th>
                            <th className="text-right">Price</th>
                            <th>transactionId</th>
                            <th>Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentsHistory.map((paymentHistory) => (
                            <tr key={paymentHistory._id}>
                                <td>{paymentHistory.selectedNames}</td>
                                <td className="text-right">${paymentHistory.Price}</td>
                                <td>{paymentHistory.transactionId}</td>
                                <td>{paymentHistory.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;