import {Link} from "react-router-dom"
import { AnimatedTooltip } from "./animated-tooltip"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect } from "react";
import { getSession,getUserDetails } from "@/lib/0auth/Github";
import { OauthUser,OauthToken } from "@/lib/0auth/Github";
import {effect} from "@preact/signals-react"


import {
  Search
 
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



export function DashboardComp() {


  // setInterval(()=>{
  //   OauthUser.value.name="chitresh"
  //   console.log("vishal")
  // },5000)

  effect(()=>{
    getUserDetails();
    getSession();
  })
 


    const people = [
        {
          id: 1,
          name: "John Doe",
          image:
            "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image:
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
          {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          },
    ]
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-md font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                <g id="telegram_app_1_"><linearGradient id="SVGID_1__kIwX3xX4Xaym_gr1" x1="41.444" x2="14.716" y1="10.394" y2="37.123" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#60e8fe"></stop><stop offset=".033" stop-color="#6ae9fe"></stop><stop offset=".197" stop-color="#97f0fe"></stop><stop offset=".362" stop-color="#bdf5ff"></stop><stop offset=".525" stop-color="#dafaff"></stop><stop offset=".687" stop-color="#eefdff"></stop><stop offset=".846" stop-color="#fbfeff"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><path fill="url(#SVGID_1__kIwX3xX4Xaym_gr1)" d="M38.087,8.859L38.087,8.859c-1.194,0-2.632,0.385-4.807,1.287l-0.261,0.108 c-9.285,3.855-17.704,7.433-23.705,10.073c-0.938,0.413-6.153,2.44-6.042,5.064c0.047,1.132,3.033,1.904,5.729,2.828L9.2,28.288 c0.753,0.259,2.32,0.8,3.926,1.262c0.978,0.281,1.861,0.417,2.699,0.417c1.453,0,2.578-0.415,3.458-0.898 c-0.004,0.147-0.001,0.294,0.01,0.443c0.159,2.019,1.72,3.126,2.652,3.787l0.13,0.093c1.377,0.985,7.608,5.101,8.313,5.567 c1.328,0.877,2.527,1.302,3.666,1.302c1.792,0,4.106-0.957,4.953-5.516c0.804-4.324,1.733-10.365,2.411-14.776 c0.289-1.882,0.526-3.426,0.677-4.331c0.305-1.828,0.444-3.899-0.828-5.4C40.735,9.609,39.75,8.859,38.087,8.859L38.087,8.859z"></path></g><path fill="#10cfe3" d="M42.82,8.595c-0.612-0.72-1.74-1.579-3.645-1.579c-1.368,0-3.015,0.441-5.506,1.474L33.37,8.614 c-3.805,1.58-7.48,3.118-10.949,4.582c-0.556,0.235-0.91,0.776-0.91,1.38v0c0,1.073,1.098,1.798,2.087,1.381 c5.659-2.388,10.172-4.259,11.22-4.694c1.928-0.801,3.36-1.246,4.357-1.246c1.687,0,2.131,1.276,1.632,4.272 c-0.309,1.852-0.932,6.02-1.646,10.573c-0.143,0.91,0.56,1.735,1.482,1.735h0.001c0.738,0,1.368-0.538,1.482-1.268 c0.31-1.976,0.605-3.888,0.866-5.587c0.331-2.156,0.603-3.924,0.776-4.961C44.117,12.686,44.277,10.314,42.82,8.595z"></path><path fill="#10cfe3" d="M39.546,30.383c-0.732,0-1.358,0.528-1.479,1.25c-0.268,1.596-0.534,3.121-0.788,4.485 c-0.502,2.702-1.407,3.867-2.724,3.867c-0.724,0-1.572-0.352-2.546-0.995c-1.32-0.872-7.984-5.279-9.431-6.314 c-1.32-0.943-3.141-2.078-0.857-4.312c0.813-0.796,6.14-5.883,10.29-9.842c0.443-0.423,0.072-1.068-0.42-1.068 c-0.112,0-0.231,0.034-0.347,0.111c-5.594,3.71-13.351,8.859-14.338,9.53c-0.987,0.67-1.949,1.1-3.231,1.1 c-0.655,0-1.394-0.112-2.263-0.362c-1.943-0.558-3.84-1.223-4.579-1.477c-2.845-0.976-2.17-2.241,0.593-3.457 c2.995-1.317,6.227-2.712,9.389-4.064c0.552-0.236,0.908-0.777,0.908-1.378v-0.001c0-1.076-1.105-1.801-2.095-1.378 c-3.5,1.496-6.676,2.87-9.411,4.073c-1.074,0.473-4.341,1.91-4.214,4.916c0.054,1.297,0.768,3.065,3.856,4.124l0.228,0.078 c0.862,0.297,2.657,0.916,4.497,1.445c1.12,0.322,2.132,0.478,3.091,0.478c1.664,0,2.953-0.475,3.961-1.028 c-0.005,0.168-0.001,0.337,0.012,0.507c0.182,2.312,1.97,3.58,3.038,4.338l0.149,0.106c1.577,1.128,8.714,5.843,9.522,6.376 c1.521,1.004,2.894,1.491,4.199,1.491c2.052,0,4.703-1.096,5.673-6.318c0.257-1.384,0.526-2.921,0.796-4.529 c0.154-0.915-0.551-1.753-1.479-1.753H39.546z"></path>
            </svg>
        </Link>

        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial ">
            <div className="relative ">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search friends"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                 <Avatar className="h-9 w-9 sm:flex">
                    <AvatarImage src={setTimeout(() => {
                      OauthUser.value.avatar_url
                    }, 500)} alt="Avatar" />    
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          
          
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card
            className="xl:col-span-2 " x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center ">
              <div className="grid gap-2">
                <CardTitle>Messages</CardTitle>
                <CardDescription>
                  Recent Messages.
                </CardDescription>
              </div>    
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Friends</TableHead>
                    <TableHead className="text-right">Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="">
                  <TableRow className="">
                    <Link to="/chat">
                        <div className="flex item-center gap">
                            <Avatar className="hidden h-9 w-9 mt-3 sm:flex">
                                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <TableCell>
                            <div className="font-medium">{OauthUser.value.n}</div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                                liam@example.com
                            </div>
                            </TableCell>
                        </div>
                        
                    </Link>
                
                    <TableCell className="text-right">send nude soumya baby</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Rooms</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <Link to="/chatroom">
                <div className="flex items-center gap-4">
                    <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    <AvatarFallback></AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                    <p>Room 1</p>
                    </div>
                    <div className="flex p-10 flex-row justify-around w-full ">
                        <div className="mt-4 bg-green-400 rounded w-20 h-6 hover:bg-gray-500"><div className="ml-3">Active</div></div>
                        <div className="flex"><AnimatedTooltip items={people} /></div>
                    </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
