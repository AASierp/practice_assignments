export type Note = {
    id: number,
    userId: number
    title: string,
    content: string,
    creationDate: string
    tags: string
}

export type NewNote = Omit<Note, "id">

export type User = {
    id: number,
    email: string
    password: string
}

export type NewUser = Omit<User, "id">

export type NoteCardProps = {
    note: Note
    deleteNote: (note: Note) => void
    selectNote: (note: Note | null) => void
}

export interface NoteFormProps {
    createNote: (note: Note) => void
    notesLength: number
    editedNote: Note | null
    updateNote: (note: Note) => void
    selectNote: (note: Note | null) => void
    user: User
}

export type NoteListProps = {
    notes: Note[]
    deleteNote: (note: Note) => void
    selectNote: (note: Note | null) => void
    user: User
}

export interface NavBarProps {
    user: User | null
    logOut: () => void
    editFlag: (user: User | null) => void
}

export interface LandingProps {
    assignUser: (user: User | null) => void
    editUser: User | null
    editFlag: (user: User | null) => void
}