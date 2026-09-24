import { getNoteById } from "@/app/lib/notes";
import NoteEditForm from "@/components/NoteEditForm";

type NoteEditPageProps = {
    params: Promise<{ noteId: string }>
};

export default async function NoteEditPage({ params }: NoteEditPageProps) {
    const { noteId } = await params;

    const note = await getNoteById(noteId);

    if (!note) {
        return <p>Note Not Found</p>
    }

    return <NoteEditForm note={note} />
}