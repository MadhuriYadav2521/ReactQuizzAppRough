import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { userLogin } from "../actions/userActions";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import toast from "react-hot-toast";

const Home = () => {
    const navigate = useNavigate()
    const currentUser = useSelector((state) => state.userReducer.currentUser);
    const dispatch = useDispatch();
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));
        if (storedUser) {
            dispatch(userLogin(storedUser));
        }
    }, [dispatch])

const handleStartQuiz = () =>{
    if(currentUser){
        navigate("/quizCategorySelection")
    }else{
        toast.error("Login to start the quiz!")
    }
}  

    return (
        <>
            <Navbar />

            <div className="w-full flex items-center justify-center">

                <div className="w-full bg-white p-8 rounded flex flex-col md:flex-row items-center">

                    <div className="w-full md:w-2/3">
                        <div className=" bg-white p-8 text-center">
                            <h1 className="text-3xl font-bold mb-4">Welcome to the Quiz App!</h1>
                            <p className="text-gray-600 mb-6">Test your knowledge with challenging quizzes. Choose from a variety of categories and see how well you can score.</p>
                            <div className="mb-4 flex items-center  justify-center">
                                <div onClick={handleStartQuiz}  className="btn-grad btn-grad">Start Quiz </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full  md:w-2/3 ml-8 ">
                        <img src="https://img.freepik.com/premium-vector/online-testing-concepteducation-line-art-conceptelearning_183665-396.jpg" alt="home" className="w-full h-auto rounded" />
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;