"use client"

import { getUsers } from "@/app/lib/users"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useUser } from "@/context/userContext"

function LoginForm(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const { setUser } = useUser();

    const router = useRouter();
    
    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
    
        const users = await getUsers()

        const userMatch = users.find((u) => u.email === email && u.password === password);
  
        if(!userMatch){
            setMessage("User Not Found - Create an Account")
            return
        }else{
            setUser(userMatch);
            router.push("/dashboard");
        }
    }


    return(
         <div className='flex justify-center items-center bg-slate-500 text-white min-h-screen'>
            <form onSubmit = {handleSubmit}>
                <fieldset className='flex flex-col p-4 border-2 border-slate-50 text-center'>                  
                    <legend >Login</legend>
                    {message && <p>{message}</p>}
                    <label htmlFor="emailInput">Email</label>
                    <input className="text-black bg-amber-50 m-1" id="emailInput" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="passwordInput">Password</label>
                    <input className='text-black bg-amber-50 m-1' id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button type="submit" >Login</button>
                        <Link className="Link" href="/signup">Sign-up</Link>
                </fieldset>
            </form>
        </div>
    )
}

export default LoginForm