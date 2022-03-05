import React from 'react'
import { useContext, useState } from 'react';
import NoteContext from '../Context/NoteContext'

const AddNote = () => {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", category: "" });

    const addClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.category);
        setNote({ title: "", description: "", category: "" });
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (

        <>

            {/* CODE FOR ADDING A NOTE */}

            <div className="container">
                <div className="form my-5">
                    <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Add New Note</h1>
                    <div id="footer2">
                        <form className="form" id="form1">
                            <input value={note.title} type="text" id="title" name='title' placeholder="Enter Title Here" onChange={onChange} />
                            <input value={note.category} type="email" id="category" name='category' placeholder="Enter Category Here" onChange={onChange} />
                            <textarea value={note.description} onChange={onChange} style={{ padding: "24px" }} name="description" id="" cols="30" rows="5"
                                placeholder="Enter Your Note Here"></textarea>
                            <button className="contact-button my-4" onClick={addClick}>Add Note!</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddNote