import { signal } from "@preact/signals-core";
import {account} from '../../Appwrite/AppWriteConfig'
import axios from "axios";

export const OauthToken=signal({
    "provider": "",
    "providerAccessToken":""

})

export const OauthUser=signal({
    "login":"",
    "url":"",
    "avatar_url":"",
    "name":"",
    "email":""
})

export const Github = async() => {
    console.log('Github')
   account.createOAuth2Session(
    'github',
    'https://chatapp-zeta-lyart.vercel.app/dashboard',
    'https://chatapp-zeta-lyart.vercel.app/signup'
   )

}

export async function getSession(){
    const session =await account.getSession('current')
    OauthToken.value.provider=session.provider
    OauthToken.value.providerAccessToken=session.providerAccessToken
}

export async function getUserDetails(){


   if(OauthToken.value.providerAccessToken){ 
    try{
        const response=await axios.get("https://api.github.com/user",{
        headers:{
            "Accept": "application/vnd.github+json",
            "Authorization":"Bearer "+ OauthToken.value.providerAccessToken,
            "X-GitHub-Api-Version":"2022-11-28"
        }})
        OauthUser.value.login=response.data.login
        OauthUser.value.url=response.data.url
        OauthUser.value.avatar_url=response.data.avatar_url
        OauthUser.value.name=response.data.name
        OauthUser.value.email=response.data.email
    }
    catch(error){
        console.log(error)
        }
    }
    else{
        console.log(OauthToken.value.providerAccessToken)
    }
}