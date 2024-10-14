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
        <div className="flex flex-col items-center my-16 overflow-hidden mx-5">
            <h1 className="text-center font-bold text-xl my-4 uppercase">Payment History</h1>
            <div className="overflow-x-auto w-full">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 text-left">Paid Classes</th>
                            <th className="px-4 py-2 text-right">Price</th>
                            <th className="px-4 py-2">Transaction ID</th>
                            <th className="px-4 py-2">Date & Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentsHistory.map((paymentHistory) => (
                            <tr key={paymentHistory._id} className="border-t">
                                <td className="px-4 py-2">{paymentHistory.selectedNames}</td>
                                <td className="px-4 py-2 text-right">${paymentHistory.Price}</td>
                                <td className="px-4 py-2">{paymentHistory.transactionId}</td>
                                <td className="px-4 py-2">{paymentHistory.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;