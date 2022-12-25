import './NoteForm.css'
import { useRef, FormEvent, useState } from 'react';
import CreatableReactSelect from 'react-select/creatable';
import { Link } from 'react-router-dom';
import { NoteData, Tag } from '../../App';


type NoteformProps = {
    onSubmit: (data: NoteData) => void
}

export function NoteForm({ onSubmit }: NoteformProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const markdowmRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([])

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        onSubmit({
            title: titleRef.current!.value,
            markdown: markdowmRef.current!.value,
            tags: [],
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <div className='input-field-first'>
                    <div className='input-item'>
                        <label htmlFor="title">Title</label>
                        <input ref={titleRef} id="title" type="text" required />
                    </div>
                    <div className='input-item'>
                        <label htmlFor="tag">Tags</label>
                        <CreatableReactSelect
                            value={selectedTags.map(tag => {
                                return { label: tag.label, value: tag.id }
                            })}
                            onChange={tags => {
                                setSelectedTags(tags.map(tag => {
                                    return { label: tag.label, id: tag.value }
                                }))
                            }}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'lightSeagreen' : 'lightGrey',
                                    borderRadius: '6px',
                                    borderWidth: '3px',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        boxShadow: 'none',
                                    },
                                    color: 'orangeRed'
                                })
                            }}
                            className='tag-input' isMulti />
                    </div>
                </div>
                <div className='input-field-second'>
                    <label htmlFor="title">Body</label>
                    <textarea ref={markdowmRef} id="title" rows={15} required></textarea>
                </div>
                <div className='input-field-third'>
                    <button className='save-btn' type="submit">Save</button>
                    <Link to='..'>
                        <button className='cancel-btn'>Cancel</button>
                    </Link>
                </div>
            </form>
        </>
    )
}