import Navbar from "./Navbar";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaAws, FaDatabase, FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";


const categoryList = [
    { categoryName: "AWS", icon: <FaAws /> },
    { categoryName: "React", icon: <FaReact /> },
    { categoryName: "Java", icon: <FaJava /> },
    { categoryName: "JavaScript", icon: <FaJs /> },
    { categoryName: "Node Js", icon: <FaNodeJs /> },
    { categoryName: "SQL", icon: <FaDatabase /> },

]

const QuizCategorySelection = () => {
    const navigate = useNavigate();
    const currentUser = useSelector((state) => state.userReducer.currentUser);
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleCategorySelection = (category) => {
        setSelectedCategory(category);
    };

    const startQuiz = () => {
        console.log("Selected category", selectedCategory);

        if (currentUser) {
            navigate(`/quiz/${selectedCategory}`)
        } else {
            toast.error("Login to start the quiz!")
        }
    }

    return (
        <>
            <Navbar />

            <h2 className="text-2xl font-bold m-10  text-center  ">Select Quiz Category</h2>
            <div className="w-[90%] mx-auto flex flex-wrap mb-5">
                {categoryList.map((item, i) => (
                    <div key={i} onClick={() => handleCategorySelection(item.categoryName)} className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-1/4 px-4 mb-4 cursor-pointer">
                        <div className={`bg-white p-6 rounded-md shadow-md category ${selectedCategory === item.categoryName ? 'border-4 border-blue-950' : ''}`}>
                            <div className="mb-4 text-3xl flex justify-center items-center text-blue-500">
                                <i>{item.icon}</i>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 text-center">{item.categoryName}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="btn-grad btn-grad" onClick={startQuiz} disabled={!selectedCategory}>
                    Start Quiz
                </button>
            </div>


        </>
    );
};

export default QuizCategorySelection;