const express=require("express")
const app=express()
const dataController=require("./controllers/api.controller")
const rateLimit = require("express-rate-limit");
app.use(
    rateLimit({
      windowMs: 60*1000, 
      max: 10,
      message: "You exceeded 10 requests in 1min limit!",
      headers: true,
    })
  );
app.use("/get",dataController)


module.exports=app