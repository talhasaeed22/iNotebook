import React, {useRef, useState} from 'react'
import Spinner from '../images/Spinner.gif';
import NoteContext from '../Context/NoteContext'
import { useContext, useEffect } from 'react'
import NotesItem from './NotesItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
const Notes = () => {
    let navigate = useNavigate();
    const [note, setNote] = useState({eid:"", etitle: "", edescription: "", ecategory: "" });
    const context = useContext(NoteContext);
    const { notes, fetchAllNotes, editNote, loading } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            fetchAllNotes()
        }else{
            navigate('/Login');
        }
        // eslint-disable-next-line
    }, [])

    const closeRef = useRef(null);
    const updateClick = (e) => {
        console.log(note)
        closeRef.current.click();
        editNote(note.eid, note.etitle, note.edescription, note.ecategory)
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const ref = useRef(null);
    const updatenote = (title, description, category, id)=>{
        ref.current.click();
        setNote({eid: id, etitle:title, edescription:description, ecategory: category});
    }

    return (
        <>
            {/* CODE FOR VIEWING THE NOTES */}
            <div className="container">
                <hr />
                <AddNote />
                         {/* //CODE for Model for updating the note */}
            <button type="button" ref={ref}  className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">

            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update A Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form className="form d-flex flex-column" id="form1">
                            <input value={note.etitle} className='my-2' type="text" id="etitle" name='etitle' onChange={onChange} />
                            <input value={note.ecategory} className='my-2' type="email" id="ecategory" name='ecategory'  onChange={onChange} />
                            <textarea value={note.edescription} className='my-2' onChange={onChange} style={{ padding: "24px" }} name="edescription" id="" cols="30" rows="5"
                                ></textarea>
                        </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={closeRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button style={{backgroundColor:'orangered', color:'white'}} type="button" className="btn  " onClick={updateClick}>Update</button>
                        </div>
                    </div>
                </div>
            </div>

                <hr style={{ color: 'black' }} />
                <div className="notes">
                    <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Your Notes</h1>
                    <div className="row ">
                        {loading === 'true'? <div > <img className='thumbnail' style={{display:'block', margin:'23px auto'}} src={Spinner} alt="Loading" /> </div>: (notes.length === 0 ? <div className='container'> <h6 className='text-muted'><i>Add Your Notes to See Here</i></h6> </div>: notes.map((note) => {
                            return <div key={note._id} className="col-lg-4 col-md-6 col-sm-12 my-4"><NotesItem key={note._id} updatenote={updatenote} id={note._id} title={note.title} description={note.description} category={note.category} /></div>
                        })) }
                     
                    </div>
                </div>
                <hr />
            </div>

        </>
    )
}

export default Notes