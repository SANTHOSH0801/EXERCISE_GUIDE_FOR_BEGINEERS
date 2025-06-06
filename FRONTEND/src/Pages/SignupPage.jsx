import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const navigate = useNavigate();

    const [Data, setData] = useState({
        username: "",
        email: "",
        number: 0,
        gender: "",
        weight: 0,
        height: 0,
        age: 0,
        notify: false
    });

    const [errors, setErrors] = useState({});



    const handleData = (e) => {
        const { name, value } = e.target;
        setData({ ...Data, [name]: value });
    }


    // let Entered_data = False;
    // if ()

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm(Data)
        setErrors(newErrors);
        console.log("Errors:",newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log("Data is valid");
            console.log("data is stored in local storage");
            localStorage.setItem("Data", JSON.stringify(Data));
            navigate('/HomePage')
        }
        else {
            console.log("Data is invalid");
        }
    }

    const validateForm = (Data) => {
        const errors = {};
        if (!Data.username || Data.username.trim() === "") {
            errors.username = "username should not be empty";
        }
        else if (!Data.username.trim().length < 4) {
            errors.username = "username should be 4 characters long";
        }
        if ( !Data.email || Data.email.trim() === "") {
            errors.email = "Email should not empty";
        } else if (!/\S+@\s+\.\s+/.test(Data.email)) {
            errors.email = "Email is not valid";
        }
        if ( !Data.number || Data.number.trim() === "") {
            errors.number = "Please enter the number";
        } else if (String(Data.number).length > 10) {
            errors.number = "Enter only 10 numbers";
        }
        if (!Data.height || Data.height.trim() === "") {
            errors.height = "Enter the height";
        }
        else if (String(Data.height).length > 3) {
            errors.height = "Enter the correct height in cm";
        }
        if ( !Data.weight || Data.weight.trim() === "") {
            errors.weight = "Enter the weight";
        }
        else if (String(Data.weight).length > 3) {
            errors.weight = "Enter the weight below 999";
        }
        if (!Data.gender || Data.gender.trim() === "") {
            errors.gender = "username should not be empty";
        }
        else if (!Data.gender.trim().length < 4) {
            errors.gender = "username should be 4 characters long";
        }
        if (!Data.age || Data.age.trim() === "") {
            errors.age = "Enter the age";
        }
        else if (isNaN(Data.age) || Data.age <= 0) {
            errors.weight = "Enter the valid age";
        }
        return errors;
    }


    return (
        <>
            {/* Header */}
            <header className="flex justify-between items-center px-10 py-6">
                <img
                    src="src/assets/gif1.gif"
                    alt="Gold's Gym Logo"
                    className="w-14 h-14"
                />

                <nav className="space-x-8 font-medium text-lg">
                    <a className="border-b-2 border-black pb-1" onClick={() => navigate('/HomePage')}>
                        Home
                    </a>
                    <a>About</a>
                    <button onClick={(e) => navigate('/LoginPage')}>Login</button>
                    <a className="font-semibold" onClick={(e) => navigate('/SignupPage')}>
                        Sign up
                    </a>
                </nav>
            </header>

            {/* Main */}
            <main className="flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-10 gap-10">
                {/* Left Side: Form */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-5xl font-bold mb-2">Register here</h1>
                    <p className="text-gray-600 mb-10">Start your fitness journey today</p>

                    <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your name"
                                value={Data.username}
                                onChange={handleData}
                                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none text-black"
                            />
                            {errors.username && (
                                <span className='error-message'>
                                    {errors.username}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="xyz@gmail.com"
                                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none text-black"
                                value={Data.email}
                                onChange={handleData}
                            />
                            {errors.email && (
                                <span className='error-message'>
                                    {errors.email}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="number"
                                placeholder="Enter your number"
                                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none text-black"
                                value={Data.number === 0 ? "" : Data.number}
                                onChange={handleData}
                            />
                            {errors.number && (
                                <span className='error-messge'>
                                    {errors.number}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="number"
                                name="weight"
                                placeholder="Enter your weight in KG"
                                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none text-black"
                                value={Data.weight === 0 ? "" : Data.weight}
                                onChange={handleData}
                            />
                            {errors.weight && (
                                <span className='error-message'>
                                    {errors.weight}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="gender"
                                placeholder="Enter your gender"
                                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none text-black"
                                value={Data.gender === "" ? "" : Data.gender}
                                onChange={handleData}
                            />
                            {errors.gender && (
                                <span className='error-message'>
                                    {errors.gender}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="number"
                                name="height"
                                placeholder="Enter your height in CM"
                                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none text-black"
                                value={Data.height === 0 ? "" : Data.height}
                                onChange={handleData}
                            />
                            {errors.height && (
                                <span className='error-message'>
                                    {errors.height}
                                </span>
                            )}
                        </div>
                        <div>
                            <input
                                type="number"
                                name="age"
                                placeholder="Enter your age"
                                className="w-full border border-gray-300 rounded-full px-6 py-3 focus:outline-none text-black"
                                value={Data.age === 0 ? "" : Data.age}
                                onChange={handleData}
                            />
                            {errors.number && (
                                <span className='error-message'>
                                    {errors.number}
                                </span>
                            )}
                        </div>
                        <div className="flex items-start space-x-2">
                            <input type="checkbox" id="notify" className="mt-1" />
                            <label htmlFor="notify" className="text-sm text-gray-600">
                                Send me email notifications for new program launches, website or store updates (optional)
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-full"

                        >
                            Create Account
                        </button>
                    </form>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="src/assets/SIGNUPPAGEIMAGE.jpg"
                        alt="Fitness Image"
                        className="rounded-3xl object-cover w-full h-[500px]"
                    />
                </div>
            </main>
        </>
    )
}

export default SignupPage
