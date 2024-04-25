
import {account} from '../../Appwrite/AppwriteConfig'
import axios from "axios";


import { Oauth_LoginID,Oauth_avatarurl,Oauth_email,Oauth_name,Oauth_provider,Oauth_providerAccessToken } from '@/Signals/OauthSignals';


export const Github = async() => {
    console.log('Github')
   account.createOAuth2Session(
    'github',
    'https://chatapp-zeta-lyart.vercel.app/dashboard',
    'https://chatapp-zeta-lyart.vercel.app/signup'
   )

}

// export async function UpdateSession(){

//     const session=await account.UpdateSession(SessionId.value)
//     console.log("token Updated")
// }

export async function getSession(){
    const session =await account.getSession('current')
    if(session){
        console.log(session);
        Oauth_provider.value=session.provider
        Oauth_providerAccessToken.value=session.providerAccessToken
    }
    
}



export async function getUserDetails(){
    
   if(Oauth_providerAccessToken){ 
    try{
       const response=await axios.get("https://api.github.com/user",{
        headers:{
            "Accept": "application/vnd.github+json",
            "Authorization":"Bearer "+ Oauth_providerAccessToken,
            "X-GitHub-Api-Version":"2022-11-28"
        }})
        Oauth_avatarurl.value=response.data.avatar_url;
        Oauth_name.value=response.data.name;
        Oauth_email.value=response.data.email;
        Oauth_LoginID.value=response.data.login;

        console.log(Oauth_LoginID.value)
    }
    catch(error){
        console.log(error)
        }
    }
    else{
        console.log("no vale set")
    }
}