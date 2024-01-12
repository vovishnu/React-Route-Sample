import { matchPath } from "react-router-dom";
import roleConfig from "../Roles/user-roles.json";

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


const  getRoleForThePath = (pathname)=>{

    for(const [path, obj]  of Object.entries(roleConfig)){
        
        if(matchPath(path,pathname)){
            
            return obj.roles;
        }else{

        }
    
    }
    return null;
}


const getUserRoles = ()=>{
    try {
        const localValue = JSON.parse(localStorage.getItem("cred")) || {};
        const role  = localValue.role || [];
        return role;
    } catch  {
        
        return [];
    }
}

const isRoleMatches = (roles)=>{

       
    if(!roles){
        return true;
    }

    const userRole = getUserRoles();
   
    const filter = roles.filter((item)=> userRole.includes(item));
    return !!filter.length ;
}


const isPathAllowed  = (pathname)=>{
    const roles = getRoleForThePath(pathname);
    return isRoleMatches(roles);
}

export {
    saveUserDetails,
    clearUserInfo,
    isLoggedIn,
    isPathAllowed
}