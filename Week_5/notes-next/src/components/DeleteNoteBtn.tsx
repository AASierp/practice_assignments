"use client"

import { useRouter } from "next/navigation";
import { deleteNoteById } from "@/app/lib/notes"

type DeleteNoteBtnProps = {
    noteId: number
}

export default function DeleteNoteBtn( {noteId}: DeleteNoteBtnProps){

    const router = useRouter()

    async function handleDelete(){
        await deleteNoteById(noteId);
        router.refresh()
    }

    return <button onClick={handleDelete}>Delete Note</button>
}