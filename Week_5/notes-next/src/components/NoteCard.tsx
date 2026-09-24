import { Note } from "@/types/types"
import Link from "next/link"
import DeleteNoteBtn from "./DeleteNoteBtn"

type NoteCardProps = {
    note: Note
}

export function NoteCard( { note }: NoteCardProps ){

    return(
        <div className="min-w-1/2 min-h-50 bg-gray-400 border-2 p-3 rounded-lg shadow-xl hover:border-blue-100">
            <div>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <p>{note.creationDate}</p>
                <p>{note.tags}</p>
            </div>
            <Link className="Link" href={`/notes/${note.id}`}>View</Link>
            <Link className="Link" href={`/notes/${note.id}/edit`}>Edit</Link>
            <DeleteNoteBtn noteId={note.id}/>
        </div>
    )
}