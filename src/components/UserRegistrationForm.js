"use client";
import { userRegistrationAction } from "@/action/userRegistrationAction";
import { redirect } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import {FaRegEye, FaRegEyeSlash } from "react-icons/fa";
 

import Button from "./Button";
 

export default function UserRegistrationPage() {
    const [formState, formAction, isPending] = useActionState(userRegistrationAction, null);
    const [password, setPassword] = useState("password");



    function showPassword(){
      setPassword("text");
      setTimeout(function(){
        setPassword("password")
      }, 2000)
    }


     useEffect(
        function () {
          if (!formState) return;
    
          if (formState.success) {
            redirect("/activitier");
          }
        },
        [formState]
      );

    

  return (
    <form
      action={formAction}
      method="POST"
      className="w-full flex flex-col justify-center items-center"
    >
      <input
        type="text"
        placeholder="brugernavn"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 
            sm:text-sm mt-[3em]"
        name="username"
      />
          <span className="text-red-600 text-[.8em] mt-[.3em]">
        {formState?.username?._errors.map((error) => error)}
      </span>
      <input
        type={password}
        name="password"
        placeholder="adgangskode"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[2em] mb-[2em]"
      />
      <button disabled={ password === "text" ? true : false } type="button" onClick={showPassword}>
        { password=== "password" ? <FaRegEye/>: <FaRegEyeSlash />}
      </button>
          <span className="text-red-600 text-[.8em] mt-[.3em]">
        {formState?.Password?._errors.map((error) => error)}
      </span>
      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em] mb-[2em]"
      />
       <span className="text-red-600 text-[.8em] mt-[.3em]">
        {formState?.firstname?._errors.map((error) => error)}
      </span>
      <input
        type="text"
        name="lastname"
        placeholder="lastname"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em] mb-[2em]"
      />
       <span className="text-red-600 text-[.8em] mt-[.3em]">
        {formState?.lastname?._errors.map((error) => error)}
      </span>
      <input
        type="number"
        name="age"
        placeholder="age"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em] mb-[2em]"
      />
      <select
        id="role"
        name="role"
        className="placeholder:text-slate-400 block bg-white w-[80%] border border-slate-300 rounded-[.2em] 
            py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm mt-[.5em] mb-[2em]"
        // required
      >
        <option value="">Choose role</option>
        <option value="default">defaulf</option>
        <option value="instractor">instractor</option>
      </select>
      <Button type={"submit"} text={isPending ?"Registering ny brugere" : "Register"}/>
    </form>
  );
}
