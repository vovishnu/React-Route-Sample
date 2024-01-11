const saveUserDetails = (data)=>{

   
    localStorage.setItem("cred", JSON.stringify(data));

}


const clearUserInfo = ()=>{
    localStorage.removeItem("cred");
}


const isLoggedIn=()=>{
   
    try {
        const value = JSON.parse(localStorage.getItem("cred"));
        return !!value;
    } catch  {
        return false;
    }
    


}

export {
    saveUserDetails,
    clearUserInfo,
    isLoggedIn
}