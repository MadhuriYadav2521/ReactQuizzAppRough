import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Profile = () => {
    const currentUser = useSelector((state) => state.userReducer.currentUser);
    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            {currentUser ? (<>
                <div className="  mt-8 p-6">

                    {currentUser.userResults && currentUser.userResults.length > 0 ? (<>
                        <h2 className="text-2xl font-bold mb-4 text-center">Quiz Results</h2>
                        {currentUser?.userResults?.map((result, index) => (
                            <div key={index} className="mb-4 border border-gray-300 p-4 rounded-md">
                               
                                <h3 className="text-lg font-semibold mb-2"><span className="font-bold">Title:</span> {result.category}</h3>
                                <p><span className="font-bold">Score:</span>  {result.score}</p>
                            </div>
                        ))}

                    </>) : (<>
                        <div className="w-full flex items-center justify-center">

                            <div className="w-full bg-white p-8 pt-0 rounded flex flex-col md:flex-row-reverse items-center">

                                <div className="w-full md:w-2/3">
                                    <div className=" bg-white p-8 pt-0 text-center">
                                        <h1 className="text-3xl font-bold mb-4">No results found!</h1>
                                        <p className="text-gray-600 mb-6">Explore your proficiency by taking a quiz. Receive results here, offering insights into your strengths and areas for improvment.</p>
                                        <div className="mb-4 flex items-center  justify-center">
                                            <div onClick={() => navigate('/quizCategorySelection')} className="btn-grad btn-grad">Start quiz</div>
                                        </div>
                                    </div>

                                </div>

                                <div className="w-full  md:w-2/5 ml-8 ">
                                    <img src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=2000" alt="notResult" className="w-full h-auto rounded" />
                                </div>

                            </div>

                        </div>
                    </>)}


                </div>
            </>) : (<>
                <div className="w-full flex items-center justify-center">

                    <div className="w-full bg-white p-8 rounded flex flex-col md:flex-row items-center">

                        <div className="w-full md:w-2/3">
                            <div className=" bg-white p-8 text-center">
                                <h1 className="text-3xl font-bold mb-4">Login to see the results of your quiz.</h1>
                                <div className="mb-4 flex items-center  justify-center">
                                    <div onClick={() => navigate('/login')} className="btn-grad btn-grad">Login</div>
                                </div>
                            </div>

                        </div>

                        <div className="w-full  md:w-2/4 ml-8 ">
                            <img src="https://img.freepik.com/premium-vector/register-access-login-password-internet-online-website-concept-flat-illustration_385073-108.jpg" alt="notFound" className="w-full h-auto rounded" />
                        </div>

                    </div>

                </div>
            </>)}

        </>
    );
}

export default Profile;