// import dependencies
const router = require("express").Router()
const path=require("path")
// route to notes page
router.get("/notes",(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/notes.html'))
})
// wild card, route to homepage index.html
router.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})
// export htmlRoutes file
module.exports=router;