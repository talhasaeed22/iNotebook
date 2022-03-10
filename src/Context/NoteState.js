import { useState } from 'react'
import NoteContext from './NoteContext'
const NoteState = (props) => {
    const url = 'https://inotebook-project.herokuapp.com';
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    //Fetching all the notes

    const fetchAllNotes = async ()=>{
        const response = await fetch(`${url}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const responce = await response.json();
        setNotes(responce);
    }

    //ADD A NOTE 
    const addNote = async (title, description, category) => {
        const response = await fetch(`${url}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, category})
        });
        const json = await response.json();
        console.log(json.newnote)
        setNotes(notes.concat(json.newnote));

    }

    //EDIT A NOTE
    const editNote = async (id, title, description, category) => {
        //API CALL

        const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
            method: 'PUT',

            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({title, description, category})
        });
        const responce = await response.json();
        console.log(responce)
        //
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].category = category;
                break;
            }
        }
        setNotes(newNotes);
    }

    //DELETE A NOTE
    const deleteNote = async (id) => {
        const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            
        });
        const responce = await response.json();
        console.log(responce)

        console.log("deleting note with id " + id)
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        })
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState