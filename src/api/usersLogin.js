import userData from './user_data.json';
import {saveUserDetails} from '../Utils/common';


const dummyApi = (user)=>{
    
    if(userData[user]){
        
        return Promise.resolve(userData[user].role)
    }else{
        return Promise.reject("Invalid User");
    }


}



const login = (username, password)=>{
   
   return dummyApi(username, password)
          .then((role)=>{

                
                saveUserDetails({
                    username,role
                })
          })
}



export {
    login
}