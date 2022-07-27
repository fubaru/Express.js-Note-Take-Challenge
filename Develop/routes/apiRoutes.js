const router = require("express").Router()
const fs = require("fs")
const db=require("../db/db.json")

router.get("/api/notes", (req,res)=>{
    res.json("db")
})

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

module.exports=router