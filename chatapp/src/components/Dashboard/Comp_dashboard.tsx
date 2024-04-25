import {account} from "../../Appwrite/AppwriteConfig"
import { Link } from "react-router-dom";
import { AnimatedTooltip } from "./animated-tooltip";
import { Button } from "@/components/ui/Button/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Oauth_avatarurl } from "@/Signals/OauthSignals";
import { getSession, getUserDetails } from "@/lib/0auth/Github";
import { effect } from "@preact/signals-react";
import "../ui/Button/button2.css";
import {
  Search
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GetMsg } from "@/lib/DashBoard/Messages/SendMessages";
import { SearchUser } from "@/pages/Dashboard/SearchBar/SearchUser";
import { SearchedUser } from "@/Signals/SearchedUserSignal";
import { HandleUser } from "@/Signals/HandleUser";

interface User {
  $id: string;
  name: string;
  email: string;
}

export function DashboardComp() {
  const [avatarurl, setAvatarUrl] = useState("");
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  
  
  function handleSearch() {
    setTimeout(() => {
      SearchUser(search);
    }, 500);
  }

  const getUserOnLoad=async ()=>{

    const user=await account.get();
    HandleUser.value=user;
    console.log(HandleUser.value)

  }

 effect(()=>{
  getUserOnLoad();
 })

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(()=>{
    const unsub =effect(()=>{
      if (Array.isArray(SearchedUser.value)) {
        // Directly set the state to the value of SearchedUser.value
        setUsers(SearchedUser.value);
      }
    });
    return()=>{
      unsub();
    }
  },[])

  if(!HandleUser.value){
    useEffect(() => {
      getSession();
      setTimeout(() => {
        getUserDetails();
      }, 1000);
      const updateAvatarUrl = () => {
        setAvatarUrl(Oauth_avatarurl.value);
      };
      const unsub = effect(updateAvatarUrl);
      return () => {
        unsub();
      };
    }, [])
  }



  

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
  ];

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b backdrop-blur-md px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-md font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              {/* Your SVG code */}
            </svg>
          </Link>
        </nav>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="User Id"
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                    onChange={(event) => setSearch(event.target.value)}
                  />
                </div>
              </form>
              {users.length > 0 && (
                <DropdownMenu key="search-menu">
                  <DropdownMenuTrigger asChild>
                  <Button key="show-button" variant="outline">show</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent key="menu-items" align="end">
                    {users.map((user) => (
                      <div>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>{user.name?user.name:user.email}</DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem>Add friend</DropdownMenuItem>
                              <DropdownMenuItem>Message</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>create group</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      </div>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar className="h-9 w-9 sm:flex">
                <AvatarImage src={avatarurl} alt="Avatar" />
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
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4"></div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
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
          <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Friends</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <Link to="/chatroom">
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
                    <AvatarFallback></AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p>Friend</p>
                  </div>
                  <div className="flex p-10 flex-row justify-around w-full ">
                    <div className="pr-12 mt-2"><button className="button2">Accept</button></div>
                    <div className="flex"><AnimatedTooltip items={people} /></div>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
          <Card className="xl:col-span-2 " x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center ">
              <div className="flex ">
                <div className="grid gap-2">
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>Recent Messages.</CardDescription>
                </div>
                <div>vishal</div>
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
                          <div className="font-medium">{""}</div>
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
        </div>
      </main>
    </div>
  );
}
