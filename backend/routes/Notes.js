const express  = require('express')
const notes = require('../models/Note');
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');

//ADD a note using post request:
router.post('/addnote', fetchuser ,async (req, res)=>{
    try {
        console.log(req.User.id)
        let newnote = await notes.create({
            user: req.User.id,
            title: req.body.title,
            description: req.body.description,
            category: req.body.category
        });
        res.json({newnote})
    } catch (error) {
        res.status(500).send("Internal Server Error Occurred. Please Try Again.")
        console.log(error);
    }
})

//Fetching all the notes of a user 
router.get('/fetchallnotes', fetchuser , async (req, res)=>{
    try {
        const allnotes = await notes.find({user: req.User.id});
        res.json(allnotes)
    } catch (error) {
        res.status(500).send("Internal Server Error Occurred. Please Try Again.")
        console.log(error);
    }
})

//UPDAting a node using put req:
router.put('/updatenote/:id', fetchuser, async (req, res)=>{
    try {
        //Creating a new note object:
        const newnote = {};
        if(req.body.title){
            newnote.title = req.body.title;
        }
        if(req.body.description){
            newnote.description = req.body.description;
        }
        let note = await notes.findById(req.params.id);
        if(!note){
            return res.status(404).send("Not Found");
        }
        if(note.user.toString() != req.User.id){
            return res.status(401).send("Not Allowed");
        }
        note = await notes.findByIdAndUpdate(req.params.id, {$set: newnote}, {new:true})
        res.send(note)
    } catch (error) {
        res.status(500).send("Internal Server Error Occurred. Please Try Again.")
        console.log(error);
    }
})

//Deleting a note using delete req
router.delete('/deletenote/:id', fetchuser, async (req, res)=>{
    try {
        const note = await notes.findById(req.params.id);
        if(note.user.toString() != req.User.id){
            return res.status(401).send("Not Allowed");
        }
        await notes.findByIdAndDelete(req.params.id)
        res.json({note:note});
    } catch (error) {
        res.status(500).send("Internal Server Error Occurred. Please Try Again.")
        console.log(error);
    }
})

module.exports = router
