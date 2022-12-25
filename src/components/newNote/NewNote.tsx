import { NoteData } from '../../App'
import './NewNote.css'
import { NoteForm } from './NoteForm'

type NewNoteProps = {
    onSubmit: (data: NoteData) => void;
}
export function NewNote({ onSubmit }: NewNoteProps) {
    return (
        <>
            <h1 className='new-note-heading'>New Note</h1>
            <NoteForm onSubmit={onSubmit} />
        </>
    )
}