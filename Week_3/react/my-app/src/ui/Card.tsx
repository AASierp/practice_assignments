import {type ReactNode} from "react";


type CardProps = {
    children: ReactNode
    variant?: "default" | "featured"
}

export function Card( { children, variant = "default" }: CardProps){

    const variantStyle = variant === "featured" ? "border-2 border-blue-500" : ""

    return(
        <div className={`flex flex-col justify-center bg-white text-black p-4 rounded-lg shadow-md m-3 ${variantStyle}`}>
             {children}
        </div>
       
    )
}