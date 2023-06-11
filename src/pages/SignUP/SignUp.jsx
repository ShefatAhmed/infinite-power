import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const SignUp = () => {
    const [error, setError] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Img = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long.");
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must contain at least one uppercase letter.");
            return;
        }
        if (!/[!@#$%^&*()]/.test(password)) {
            setErrorMessage("Password must contain at least one special character.");
            return;
        }

        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                form.reset();
                setError("");
                updateUserData(result.user, name, Img);

                const saveUser = {
                    name: name,
                    email: email,
                    image: Img
                };

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            form.reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Signup completed successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        setError("An error occurred while saving user data.");
                    });
            })
            .catch((error) => {
                setError(error.message);
                switch (error.code) {
                    default:
                        setErrorMessage("Please provide valid data.");
                        break;
                    case "auth/email-already-in-use":
                        setErrorMessage("The email address you entered is already in use.");
                        break;
                }
            });
        setErrorMessage("");
    };

    const updateUserData = (user, name, Img) => {
        updateProfile(user, {
            displayName: name,
            photoURL: Img,
        })
            .then(() => { })
            .catch((error) => {
                console.log(error);
                setError(error.message);
            });
    };
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-12 md:w-4/12 shadow-2xl rounded-md">
                <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Photo URL</label>
                        <input
                            type="text"
                            name="image"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-bold">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-800 text-white font-semibold py-2 rounded-full">
                            Sign Up
                        </button>
                    </div>
                    <p>
                        <small>
                            Already have an account?{" "}
                            <Link to="/login" className="link">
                                Please Login
                            </Link>
                        </small>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;