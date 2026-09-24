import type { Note } from "@/types/types";
import type { NewNote } from "@/types/types";

export async function getNoteById(noteId: string): Promise<Note | null> {

    const response = await fetch(`http://localhost:3001/notes/${noteId}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        return null
    }

    return response.json();
}

export async function getNotes(): Promise<Note[] | null> {
    const response = await fetch("http://localhost:3001/notes", { cache: "no-store" });

    if (!response.ok) {
        throw new Error("Failed to fetch notes.");
    }

    return response.json();
}

export async function deleteNoteById(noteId: number): Promise<void> {
    const response = await fetch(`http://localhost:3001/notes/${noteId}`, {
        method: "DELETE",
    })

    if (!response.ok) {
        throw new Error("Could not delete note.");
    }
}

export async function createNote(note: NewNote): Promise<void> {

    const response = await fetch("http://localhost:3001/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    })

    if (!response.ok) {
        throw new Error("Note could not be created.");
    }
}

export async function updateNote(note: Note): Promise<Note> {

    const response = await fetch(`http://localhost:3001/notes/${note.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    })

    if (!response.ok) {
        throw new Error("Could not update note.");
    }

    return response.json()
}