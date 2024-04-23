"use client";
import React from "react";
import { Label } from "../components/SignUp/label";
import { Input } from "../components/SignUp/input";
import { cn } from "../lib/utils";
import { signal } from "@preact/signals-core";
import {account}  from "../Appwrite/AppWriteConfig"
import { v4 as uuidv4 } from 'uuid';
import { Github } from "@/lib/0auth/Github";
import {
  IconBrandGithub,
} from "@tabler/icons-react";
import { BackgroundBeams } from "@/components/SignUp/stars";

export function Signup() {

  const formDataSignal = signal({
    id:"",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id:string=uuidv4()
    formDataSignal.value.id=id
    
    if(formDataSignal.value.firstName&&formDataSignal.value.lastName&&formDataSignal.value.email&&formDataSignal.value.password)
      try {
        console.log("Form submitted",formDataSignal.value);
        const response=await account.create(formDataSignal.value.id,formDataSignal.value.email,formDataSignal.value.password,formDataSignal.value.firstName,formDataSignal.value.lastName)
        console.log(response)
    } catch (error) {
      console.log(error)
    }
  };

 
  
  return (
    <div className="bg-neutral-950 h-screen pt-20">
         <div>
         <BackgroundBeams/>
         </div>
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-neutral-950 dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-200 dark:text-neutral-200">
        Welcome to Vishal's Chat App
      </h2>
    
      <form className="my-8" onSubmit={handleSubmit}>
        <div className=" relative flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" onChange={e=>{formDataSignal.value.firstName=e.target.value}}/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text"  onChange={e=>{formDataSignal.value.lastName=e.target.value}}/>
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4 relative">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email"  onChange={e=>{formDataSignal.value.email=e.target.value}}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4 relative" >
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password"  onChange={e=>{formDataSignal.value.password=e.target.value}}/>
        </LabelInputContainer>
        

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex justify-center space-x-4">
          <button
          onClick={Github}
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Sign up with gitHub
            </span>
            <BottomGradient />
          </button>
         
          
        </div>
      </form>
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

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
