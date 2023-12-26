import { useState } from "react";
import toast from "react-hot-toast"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../actions/userActions";
import Navbar from "./Navbar";

const Login = () => {
    const [user, setUser] = useState({ userEmail: "", userPassword: '' })
    const userData = JSON.parse(localStorage.getItem("Users")) || []
    const userDataArray = Array.isArray(userData) ? userData : [];
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!user.userEmail || !user.userPassword) {
            return toast.error("All fields are mandatory!")
        }
        console.log(userDataArray,"userDataArray");
        let isUserAvailable = userDataArray.find(isUser => isUser.userEmail == user.userEmail)
        if(!isUserAvailable) {return toast.error("Credentials not matched!!!")}
        
        if(isUserAvailable.userPassword !== user.userPassword){
            return toast.error("Credentials not matched6!")
        }
        dispatch(userLogin(isUserAvailable));
        localStorage.setItem('currentUser', JSON.stringify(isUserAvailable));
        toast.success("Login successful!")
        setUser({ userEmail: " ", userPassword: " " })
        navigate('/')
        
    }
    return (
        <>
        <Navbar />
        <div className="max-w-md mx-auto mt-14 p-6 bg-white rounded  shadow-none sm:shadow-md">
                <h2 className="text-2xl font-bold mb-4" >Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" name="userEmail" className="w-full px-3 py-2 border rounded shadow" autoComplete="off" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" name="userPassword" className="w-full px-3 py-2 border rounded shadow" autoComplete="off" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <input type="submit" value='Login' className="btn-grad btn-grad" />
                        <p onClick={()=> navigate('/login')} className="mt-4 text-sm text-gray-500">Don't have an account? <a href="/register" className="text-blue-500">Register here</a></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;