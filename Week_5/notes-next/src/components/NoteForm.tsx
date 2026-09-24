"use client"

import { useState } from "react";
import type { NewNote } from "@/types/types";
import { createNote } from "@/app/lib/notes";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/userContext";

export default function NoteForm(){

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");

    const router = useRouter();
    const {user} = useUser()

    async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();

        if(!user){
            return
        }

        const newNote: NewNote = {
            userId: user.id,
            title: title,
            content: content,
            creationDate: new Date().toISOString(),
            tags: tags
        }

        await createNote(newNote)

        router.push("/dashboard")
        router.refresh()
    }

    return(
        <div className="text-amber-50">
            <form onSubmit = {handleSubmit}> {/* Create New Note */}
                <fieldset className="flex items-center py-1 justify-evenly border-2">               
                    <legend className="text-center">Create a Note</legend>       
                    <label htmlFor="titleInput">Title</label>
                    <input className="bg-amber-50 m-1" id="titleInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <label htmlFor="contentInput">Content</label>
                    <input className="bg-amber-50 m-1" id="contentInput" type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
                    <label htmlFor="tagsInput">Tags</label>
                    <input className="bg-amber-50 m-1" id="tagsInput" type="text" value={tags} onChange={(e)=> setTags(e.target.value)} />
                    <button className="m-2 px-3 bg-blue-900 rounded-lg border-2 border-amber-50 hover:bg-blue-400 text-white" type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}