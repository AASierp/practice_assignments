import type { User, NewUser } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getUsers(): Promise<User[]>{

    const response = await fetch(`${API_URL}/users`)

    if(!response.ok){
        throw new Error("Could not fetch users.");
    }

    return response.json()

}

export async function createUser(user: NewUser): Promise<NewUser>{

    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    if(!response.ok){
        throw new Error("Could not create user")
    }

    return response.json();
}

export async function updateUser(user: User): Promise<User>{
    const response = await fetch(`${API_URL}/users/${user.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })

    if(!response.ok){
        throw new Error("Could not update user")
    }

    return response.json()
}

export async function deleteUser(userId: number): Promise<void>{

    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: "DELETE"
    })

    if(!response.ok){
        throw new Error("Could not delete user")
    }
}