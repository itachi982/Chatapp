// import '../Dashboard/css/Container.css'
import { DashboardComp } from '@/components/Dashboard/Comp_dashboard'
import { BackgroundBeams } from '@/components/SignUp/stars'






export const Dashboard=()=>{

    return(
        <div className="bg-neutral-950 h-auto max-w-full">
            <BackgroundBeams/>
            <DashboardComp/>
        </div>
    )

}