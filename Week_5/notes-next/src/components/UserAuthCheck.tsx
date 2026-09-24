"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";

export default function AuthGuard({
    children,
}: {
    children: React.ReactNode
}) {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if(!user){
            router.replace("/login");
        }
    }, [user, router]);

    if(!user){
        return null;
    }

    return children
}
    