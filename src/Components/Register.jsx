import { useState } from "react";
import toast from "react-hot-toast"
import { useSelector, useDispatch } from "react-redux"
import { userRegister } from "../actions/userActions";
import userReducer from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Register = () => {
    const usersState = useSelector((state) => state.userReducer.users)
    const userData = JSON.parse(localStorage.getItem("Users")) || [];
    const userDataArray = Array.isArray(userData) ? userData : [];
    const [users, setUsers] = useState(userDataArray)
    const [user, setUser] = useState({ userName: "", userEmail: "", userPassword: '', userResults: [] })
    const navigate = useNavigate()
    const handleChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!user.userName || !user.userEmail || !user.userPassword) {
            return toast.error("All fields are mandatory!")
        }
        if (user.userPassword.length < 5) {
            return toast.error("Password must be minimum 5 characters long!")
        }

        if (userDataArray.find(existingUser => existingUser.userEmail === user.userEmail)) {
            return toast.error("User already exists!");
        }
        let addUser = [...users, user]
        setUsers(addUser)
        localStorage.setItem("Users", JSON.stringify(addUser))
        setUser({ userName: " ", userEmail: " ", userPassword: " " })
        toast.success("Registration successful!")
        navigate('/login')

    }
    console.log(users, "users");
    console.log(usersState, "usersState from setusers");

    

    return (
        <>
            <Navbar />
            <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded  shadow-none sm:shadow-md">
                <h2 className="text-2xl font-bold mb-4" >Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input type="text" name="userName" className="w-full px-3 py-2 border rounded shadow" autoComplete="off" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" name="userEmail" className="w-full px-3 py-2 border rounded shadow" autoComplete="off" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" name="userPassword" className="w-full px-3 py-2 border rounded shadow" autoComplete="off" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <input type="submit" value='Register' className="btn-grad btn-grad" />
                        <p onClick={()=> navigate('/login')} className="mt-4 text-sm text-gray-500">Already have an account? <a href="/login" className="text-blue-500">Log in here</a></p>
                    </div>
                </form>
            </div>

        </>
    );
}

export default Register;