"use client";
import React from "react";
import { Label } from "../components/SignUp/label";
import { Input } from "../components/SignUp/input";
import {account}  from "../Appwrite/AppwriteConfig"
import { Github } from "@/lib/0auth/Github";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";
import {
  IconBrandGithub,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/SignUp/stars";
import { HandleUser } from "@/Signals/HandleUser";
import { useNavigate } from "react-router-dom";

export function Signin() {

  const [email, setEmail] =useState("");
  const [password, setPassword] =useState("");
  const navigate = useNavigate();





  const handleSubmit = async () => {
    const login=await account.createEmailSession(
      email,
      password,
    );
    const userdetails=await account.get();
    HandleUser.value=userdetails;
    console.log(HandleUser.value);
    navigate("/dashboard");
    
  };

 
  
  return (
    <div className="bg-neutral-950 h-screen pt-20">
        <div>
          <BackgroundBeams/>
        </div>
        <div className="relative">
        <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link to="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button onClick={handleSubmit}
            type="submit"
                 className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Login
            </span>
            <BottomGradient />
          </button>
          <button
          onClick={Github}
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Login with gitHub
            </span>
            <BottomGradient />
          </button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
        </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

