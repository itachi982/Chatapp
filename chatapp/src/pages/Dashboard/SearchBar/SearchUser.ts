import axios from "axios"
import {SearchedUser} from "../../../Signals/SearchedUserSignal"


export const SearchUser=async (input:string)=>{
       if(input!=""){
        const userList=await axios.get("https://cloud.appwrite.io/v1/users",{
            params:{
                search:input
            },
            headers:{
                'X-Appwrite-Response-Format': '1.4.0',
                'X-Appwrite-Project': import.meta.env.VITE_PROJECT_ID,
                'X-Appwrite-Key': import.meta.env.VITE_APPWRITE_KEY
              }
        })

        SearchedUser.value=userList.data.users;
        // console.log(userList.data.users)
        // console.log(typeof(userList.data.users[0]));
       }
}