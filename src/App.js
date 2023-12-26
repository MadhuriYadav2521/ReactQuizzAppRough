import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import { Toaster } from 'react-hot-toast';
import Register from './Components/Register';
import Login from './Components/Login';
import QuizCategorySelection from './Components/QuizCategorySelection ';
import Profile from './Components/Profile';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 4000,
            style: {
              background: 'white',
              color: 'black',
            },

            // Default options for specific types
            success: {
              duration: 5000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/quizCategorySelection' element={<QuizCategorySelection />} />
          <Route path='/quiz/:category' element={<Quiz />} />
          <Route path='/profile' element={<Profile />} />


          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
