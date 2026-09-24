"use client"

import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";

export default function LogOutBtn(){

    const {setUser} = useUser();
    const router = useRouter();

    function handleLogout(){
        setUser(null);
        router.push("/login")
    }
    return(
        <button onClick={handleLogout}>Log Out</button>
    )
}