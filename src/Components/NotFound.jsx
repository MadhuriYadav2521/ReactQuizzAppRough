import Navbar from "./Navbar";

const NotFound = () => {
    return (
        <>
            <Navbar />

            <div className="w-full flex items-center justify-center">

                <div className="w-full bg-white p-8 rounded flex flex-col md:flex-row items-center">

                    <div className="w-full md:w-2/3">
                        <div className=" bg-white p-8 text-center">
                            <h1 className="text-3xl font-bold mb-4">Oops!</h1>
                            <p className="text-gray-600 mb-6">We cant find the page that you are looking for!</p>
                            <div className="mb-4 flex items-center  justify-center">
                                <a href="/" className="btn-grad btn-grad">Back to Home</a>
                            </div>
                        </div>

                    </div>

                    <div className="w-full  md:w-2/3 ml-8 ">
                        <img src="https://img.freepik.com/premium-vector/404-great-design-any-purposes-flat-style-people-internet-network_123447-4137.jpg" alt="Your Image" className="w-full h-auto rounded" />
                    </div>

                </div>

            </div>
        </>
    );
}

export default NotFound;