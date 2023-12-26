export const userLogin = (userData) =>{
    console.log(userData,"userData from action");
    return {
        type: "Login",
        payload: userData
    }
    
}

export const userLogout = () =>{
    return {
        type: "Logout",
       
    }
    
}


