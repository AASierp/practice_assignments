"use client"

import { updateUser } from "@/app/lib/users";
import { useUser } from "@/context/userContext";
import { useState } from "react";
import { User } from "@/types/types";

export default function ProfileForm(){
    const {user, setUser} = useUser();
    const [email, setEmail] = useState(user?.email ?? "");
    const [password, setPassword] = useState(user?.password ?? "");

    async function handleUserUpdate(e: React.SubmitEvent){
        e.preventDefault();

        if(!user){
            return
        }

        const updatedUser: User = {
            id: user.id,
            email: email,
            password: password
        }

        const savedUser = await updateUser(updatedUser);
        setUser(savedUser)
    }

    return(
        <form onSubmit={handleUserUpdate}>
            <fieldset>
                <legend>Edit Profile</legend>
                <label htmlFor="email">Email: </label>
                <input type="email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" value = {password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Save Edits</button>
            </fieldset>
        </form>
    )
}