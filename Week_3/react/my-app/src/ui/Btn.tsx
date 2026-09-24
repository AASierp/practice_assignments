import { type ReactNode } from "react"

type BtnProps = {
    children: ReactNode
    onClick: () => void
    disabled?: boolean
}

export function Btn({children, onClick, disabled}: BtnProps){
    return(
        <button onClick={onClick} disabled={disabled} className="px-4  rounded-lg  shadow-md bg-amber-700 text-shadow-white font-bold border-black hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed " >
            {children}
        </button>
    )
}