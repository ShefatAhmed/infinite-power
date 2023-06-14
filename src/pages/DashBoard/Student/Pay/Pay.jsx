import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PayForm from "./PayForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Pay = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [selectedClasses, setSelectedClasses] = useState([]);

    useEffect(() => {
        fetch(`https://summer-camp-server-silk.vercel.app/selectedClass/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                const filteredData = data.filter((item) => item._id === id);
                setSelectedClasses(filteredData);
            });
    }, [user]);
    const Price = selectedClasses.reduce((sum, item) => sum + item.Price, 0);
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PayForm selectedClasses={selectedClasses} Price={Price}></PayForm>
            </Elements>
        </div>
    );
};

export default Pay;