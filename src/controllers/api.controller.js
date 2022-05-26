const express=require("express")
const router=express.Router()
const data=[{"id":1,"first_name":"Creigh","last_name":"Boother","email":"cboother0@pinterest.com","gender":"Male"},
{"id":2,"first_name":"Griz","last_name":"Gurys","email":"ggurys1@4shared.com","gender":"Male"},
{"id":3,"first_name":"Maren","last_name":"Friel","email":"mfriel2@noaa.gov","gender":"Female"},
{"id":4,"first_name":"Menard","last_name":"Turfes","email":"mturfes3@forbes.com","gender":"Male"},
{"id":5,"first_name":"Bethany","last_name":"Rickett","email":"brickett4@lycos.com","gender":"Non-binary"},
{"id":6,"first_name":"Ruttger","last_name":"Gillford","email":"rgillford5@simplemachines.org","gender":"Male"},
{"id":7,"first_name":"Aloysia","last_name":"Noonan","email":"anoonan6@pbs.org","gender":"Female"},
{"id":8,"first_name":"Brandise","last_name":"Hartwright","email":"bhartwright7@psu.edu","gender":"Female"},
{"id":9,"first_name":"Rachele","last_name":"Bye","email":"rbye8@amazon.com","gender":"Female"},
{"id":10,"first_name":"Puff","last_name":"Colisbe","email":"pcolisbe9@ox.ac.uk","gender":"Male"},
{"id":11,"first_name":"Noni","last_name":"Coan","email":"ncoana@zimbio.com","gender":"Female"},
{"id":12,"first_name":"Lorilyn","last_name":"McFadin","email":"lmcfadinb@wikimedia.org","gender":"Female"},
{"id":13,"first_name":"Anthea","last_name":"Mantz","email":"amantzc@vinaora.com","gender":"Female"},
{"id":14,"first_name":"Cody","last_name":"Brooksbie","email":"cbrooksbied@jalbum.net","gender":"Female"},
{"id":15,"first_name":"Lock","last_name":"Ioannou","email":"lioannoue@army.mil","gender":"Male"},
{"id":16,"first_name":"Grove","last_name":"Broe","email":"gbroef@youtu.be","gender":"Male"},
{"id":17,"first_name":"Audra","last_name":"Reding","email":"aredingg@typepad.com","gender":"Non-binary"},
{"id":18,"first_name":"Cedric","last_name":"Goodisson","email":"cgoodissonh@domainmarket.com","gender":"Male"},
{"id":19,"first_name":"Ailis","last_name":"Charkham","email":"acharkhami@hc360.com","gender":"Female"},
{"id":20,"first_name":"Gabbey","last_name":"Barbey","email":"gbarbeyj@china.com.cn","gender":"Female"},
]

router.get("/data",(req,res)=>{
 
 
     return res.status(200).send(data)
 
})

module.exports=router;