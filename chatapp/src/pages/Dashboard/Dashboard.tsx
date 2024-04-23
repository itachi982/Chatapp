// import '../Dashboard/css/Container.css'
import { DashboardComp } from '@/components/Dashboard/Comp_dashboard'
import { BackgroundBeams } from '@/components/SignUp/stars'
import { useEffect } from 'react'
import { account } from '../../Appwrite/AppWriteConfig'


export const Dashboard=()=>{

    useEffect(()=>{
        getSession()
    },[])

    async function getSession(){
        const session =await account.getSession('current')
        console.log(session)
    }

    return(
        <div className="bg-neutral-950 h-auto max-w-full">
            <BackgroundBeams/>
            <DashboardComp/>
        </div>
    )

}