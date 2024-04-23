
import {account} from '../../Appwrite/AppWriteConfig'


export const Github = async() => {
    console.log('Github')
   account.createOAuth2Session(
    'github',
    'https://chatapp-zeta-lyart.vercel.app/dashboard',
    'https://chatapp-zeta-lyart.vercel.app/signup'
   )

    // const OauthSession=Signal({});

    
   
}