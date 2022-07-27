// import dependencies
const router = require("express").Router()
const fs = require("fs")
// make it cleaner, code refractor
const db=require("../db/db.json")

// route for reading db.json file, then return saved notes as json
router.get("/api/notes", (req,res)=>{
    res.json("db")
})

// new note received and save to the req.body, add it to db.json file, then return new notes to client
router.post("/api/notes", (req,res)=>{
    console.log(req.body)
    
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync(db, "utf8"));
    let notelength = (noteList.length).toString();

    newNote.id = notelength;
    noteList.push(newNote);

    fs.writeFileSync(db, JSON.stringify(noteList));
    res.json(noteList);
});
// export htmlRoutes file
module.exports=router