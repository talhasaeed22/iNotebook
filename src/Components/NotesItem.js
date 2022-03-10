import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../Context/NoteContext'

const NotesItem = (props) => {

    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const manageDelete = (id) => {
        deleteNote(id);
        
    }
    const { title, description, category, id } = props;
    const slicedDesc = description.slice(0, 15);

    const nevigate = useNavigate();
    const routeChange = () => {
        nevigate('/ReadNote', { state: { title: title, description: description, category: category } })
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" style={{ borderRadius: '23px', borderColor: 'orangered' }}>
                            <div className="card-body">
                                <span style={{ backgroundColor: 'black', fontSize: '0.9rem', fontWeight: 'normal' }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                                    {category}
                                </span>
                                <h5 className="card-title"><strong>Title:</strong> {title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted"><strong>Category:</strong> {category}</h6>
                                <p className="card-text"><strong>Description:</strong>{slicedDesc}{slicedDesc.length < description.length ? "......" : ""}</p>
                                <button onClick={routeChange} className="contact-button btn w-50">Read More</button> <br />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="notesicon fa fa-pencil-square-o mx-3" onClick={() => { props.updatenote(title, description, category, id) }} aria-hidden="true"></i>
                                    <i className="notesicon fa fa-trash-o mx-3" aria-hidden="true" onClick={()=>{manageDelete(id)}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesItem