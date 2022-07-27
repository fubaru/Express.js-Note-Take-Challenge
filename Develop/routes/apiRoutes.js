// import dependencies
const router = require("express").Router()
const fs = require("fs")

const db=require("../db/db.json")
const uniqid = require("uniqid")

// route for reading db.json file, then return saved notes as json
router.get("/api/notes", (req,res)=>{
    res.json(db)
})

// new note received and save to the req.body, add it to db.json file, then return new notes to client
router.post("/api/notes", (req,res)=>{
    console.log(req.body)

    let newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }
    // let newNote = req.body
    db.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    res.json(db);

    // fs.readFile("./db/db.json", (err,data) => {
    //     if (err) throw err
    //     let newData = JSON.parse(data)

    //     newData.push(newNote);

    //     fs.writeFile("./db/db.json", JSON.stringify(newData), (err) => {
    //         if (err) throw err;
    //         res.send('Success')
    //     })
    // });

});
// export htmlRoutes file
module.exports=router