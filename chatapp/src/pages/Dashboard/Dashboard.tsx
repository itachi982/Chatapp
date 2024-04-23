// import '../Dashboard/css/Container.css'
import { DashboardComp } from '@/components/Dashboard/Comp_dashboard'
import { BackgroundBeams } from '@/components/SignUp/stars'
import { useEffect } from 'react'
import { account } from '../../Appwrite/AppWriteConfig'
import { signal } from "@preact/signals-core";


export const OauthToken=signal({
    "provider": "",
    "providerAccessToken":""

})

export const Dashboard=()=>{

    useEffect(()=>{
        getSession()
        console.log(OauthToken)
    },[])

    async function getSession(){
        const session =await account.getSession('current')
        OauthToken.value.provider=session.provider
        OauthToken.value.providerAccessToken=session.providerAccessToken
    }

    return(
        <div className="bg-neutral-950 h-auto max-w-full">
            <BackgroundBeams/>
            <DashboardComp/>
        </div>
    )

}