"use client"

import { useState } from "react"
import Link from "next/link"
import { NewUser } from "@/types/types";
import { createUser } from "@/app/lib/users";
import { useRouter } from "next/navigation";

export default function SignupForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    const newUser: NewUser = {
      email: email,
      password: password
    }

   await createUser(newUser);
    
    router.push("/login")
  }

  return (
    <div className="flex justify-center items-center bg-slate-500 text-white min-h-screen">
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col p-4 border-2 border-slate-50 text-center">
          <legend>Sign Up</legend>
          <label htmlFor="emailInput">Email</label>
          <input
            className="text-black bg-amber-50 m-1"
            id="emailInput"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="passwordInput">Password</label>
          <input
            className="text-black bg-amber-50 m-1"
            id="passwordInput"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="m-2 px-3 bg-blue-900 rounded-lg border-2 border-amber-50 hover:bg-blue-400">
            Sign Up
          </button>
          <Link className="Link" href="/login"> Log in</Link>
        </fieldset>
      </form>
    </div>
  )
}