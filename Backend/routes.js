const express=require('express')

const {adduser,getdata,updateData, delData,getuserData} = require('./controller')

// const logincontroller=require('./controller')

const route=express.Router()

route.post('/register',adduser)

route.get('/findall',getdata)

route.put('/update/:email',updateData)

route.delete('/delete/:email',delData)

route.get('/findOne/:email',getuserData)


module.exports=route