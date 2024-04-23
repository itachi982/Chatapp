"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/HomePage/lamp";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export function HomePage() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div>
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Vishal's Chat app
          </h1>
        <p></p>
      <h2 className="text-neutral-500 max-w-xl mx-auto my-2 text-lg text-center relative z-10">
        Welcome to my chat app , we provide best in class communication services.
        Realtime Chats , Groups ,Emoji support and more.
      
      </h2>
        <Link to="/signup">
            <Button
        variant={"ghost"}
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-350 placeholder:text-white text-white"
        >Sign up</Button>
        </Link>
    </div>
      </motion.h1>
    </LampContainer>
  );
}
