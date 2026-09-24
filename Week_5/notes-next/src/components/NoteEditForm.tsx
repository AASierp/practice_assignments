"use client"

import { useState } from "react";
import { Note } from "@/types/types";
import { updateNote } from "@/app/lib/notes";
import { useRouter } from "next/navigation";

type EditNoteProps = {
    note: Note
}

export default function EditNoteForm( { note }: EditNoteProps ){
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const [tags, setTags] = useState(note.tags);

    const router = useRouter();


    async function handleSubmit(e: React.SubmitEvent){
        e.preventDefault();

        const updatedNote: Note = {
            id: note.id,
            userId: note.userId,
            title: title,
            content: content,
            creationDate: note.creationDate,
            tags: tags
        }

        await updateNote(updatedNote);

        router.push(`/notes/${note.id}`)
    }
    


    return(
        <>
         <form onSubmit = {handleSubmit}> 
                <fieldset className="flex items-center py-1 justify-evenly border-2">       
                    <legend>Edit Note</legend>
                    <label htmlFor="titleInput">Title</label>
                    <input className="bg-amber-50 m-1" id="titleInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="contentInput">Content</label>
                    <input className="bg-amber-50 m-1" id="contentInput" type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
                    <label htmlFor="tagsInput">Tags</label>
                    <input className="bg-amber-50 m-1" id="tagsInput" type="text" value={tags} onChange={(e)=> setTags(e.target.value)} />
                    <button className="m-2 px-3 bg-blue-900 rounded-lg border-2 border-amber-50 hover:bg-blue-400 text-white" type="submit">Submit</button>
                </fieldset>
            </form>
        </>
    )
}

