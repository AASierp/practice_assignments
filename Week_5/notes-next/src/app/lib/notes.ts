import type { Note } from "@/types/types";
import type { NewNote } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getNoteById(noteId: string): Promise<Note | null> {

    const response = await fetch(`${API_URL}/notes/${noteId}`, {
        cache: "no-store",
    });

    if (!response.ok) {
        return null
    }

    return response.json();
}

export async function getNotes(): Promise<Note[] | null> {
    const response = await fetch(`${API_URL}/notes`, { cache: "no-store" });

    if (!response.ok) {
        throw new Error("Failed to fetch notes.");
    }

    return response.json();
}

export async function deleteNoteById(noteId: number): Promise<void> {
    const response = await fetch(`${API_URL}/notes/${noteId}`, {
        method: "DELETE",
    })

    if (!response.ok) {
        throw new Error("Could not delete note.");
    }
}

export async function createNote(note: NewNote): Promise<void> {

    const response = await fetch(`${API_URL}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    })

    if (!response.ok) {
        throw new Error("Note could not be created.");
    }
}

export async function updateNote(note: Note): Promise<Note> {

    const response = await fetch(`${API_URL}/notes/${note.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note)
    })

    if (!response.ok) {
        throw new Error("Could not update note.");
    }

    return response.json()
}