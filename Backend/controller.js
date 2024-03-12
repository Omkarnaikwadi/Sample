const loginmodal=require('./modal')

const adduser=async(req,res)=>{    //req & res are parameters to async function req=client requests fordata and res=response from serverr 
    const {name,email,password}=req.body   //name email and all the fields are imported in request body and provided to server
    //console.log(name,email,password)
    try{
        const userdata=new loginmodal({name,email,password});       //new modal data is stored in userdata
        const data=await userdata.save();                           //imported data is saved into data

        res.status(200).send({data})            //server sends response as all fields of info. to store in mongoDB
    }
    catch(err){
        console.log(err);
        res.status(400).send({err})
    }
}

const getdata = async(req,res) =>{
    try{
        const userData=await loginmodal.find();
        
        res.status(200).send({userData});
    }
    catch(err){
        console.log(err);
        res.status(400).send({err});
    }
}

const updateData= async(req,res) =>{
    try{
        const {email}=req.params;
        const {name,password}=req.body;
        const data=await loginmodal.updateOne({email},{
                $set: {name,password}
            }
        );
        if (data.modifiedCount>0){
            res.status(200).send({msg:"Data updated"});
        }
        else {
            res.status(200).send({msg:"Data not updated"});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).send({err});
    }
}



const delData= async(req,res) =>{
    try{
        const {email}=req.params;
    
        const data=await loginmodal.deleteOne({email});

        if (data.deleteCount>0){
            res.status(200).send({msg:"Data deleted"});
        }
        else {
            res.status(200).send({msg:"Data not deleted"});
        }
    }
    catch(err){
        console.log(err);
        res.status(400).send({err});
    }
}

const getuserData=async (req,res) =>{
    try{
        const {email} = req.params;
        const userD= await loginmodal.findOne({email});
        res.status(200).send(userD);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}

module.exports={adduser,getdata,updateData,delData,getuserData}

