import { userLogout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';


const Navbar = () => {
    const currentUser = useSelector((state) => state.userReducer.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () => {
        toast.success("Logged out!")
        dispatch(userLogout())
        navigate("/")
    }

    return (
        <div className="w-full bg-slate-800 ">
            <div className="w-full flex items-center px-7 py-3 space-x-7 ">
                <div className="w-30 h-11">
                    <img src="https://www.drupal.org/files/project-images/quiz-5.png" alt="logo" className="w-full h-full" />
                </div>
                <div className='flex space-x-7 text-white'>
                    <div onClick={()=> navigate('/')} className="cursor-pointer">Home</div>
                    <div  onClick={()=> navigate('/quizCategorySelection')} className="cursor-pointer">Quiz</div>
                    {currentUser?.userName ? (
                        <>
                            <div onClick={()=> navigate('/profile')} className="cursor-pointer">{currentUser?.userName}</div>
                        </>
                    ) : (
                        <div onClick={()=> navigate('/profile')} className="cursor-pointer">Profile</div>
                    )}
                </div>

                {currentUser?.userName ? (
                    <>
                        <button onClick={() => handleLogout()} className='space-x-72 text-white'>Logout</button>
                    </>
                ) : (
                    <div  onClick={()=> navigate('/register')} className="cursor-pointer space-x-72 text-white" >Sign in</div>
                )}
            </div>

        </div>
    );
}

export default Navbar;