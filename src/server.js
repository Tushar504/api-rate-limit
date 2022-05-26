const app=require("./index")


app.listen(5000,async()=>{
    try {
        console.log("Listening on port 5000")
    } catch (error) {
        console.log(error)
    }
})