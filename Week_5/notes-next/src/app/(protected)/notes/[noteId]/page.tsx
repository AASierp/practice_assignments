import { getNoteById } from "@/app/lib/notes";
import { notFound } from "next/navigation";
import Link from "next/link";


    type NotePageProps = {
        params: Promise<{ noteId: string }>
    };

export default async function NotePage( {params}: NotePageProps ){
    const { noteId } = await params;

    const note = await getNoteById(noteId);

    if(!note){
        return notFound();
    }

    return(
        <>
            <p>{note.title}</p>
            <p>{note.content}</p>
            <p>{note.tags}</p>
            <p>{note.creationDate}</p>
            <Link className="Link" href={`/notes/${note.id}/edit`}>Edit</Link>
        </>
    )
}
