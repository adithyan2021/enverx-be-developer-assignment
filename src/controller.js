const connection = require('./db');
const {helper}=require('./helper')
class controller extends helper{

async getall(res,check,value){
   try {
    if(check=='post'){
    const text='select * from blog'
    try {
        const {rows}=await connection.query(text);

        return res.send(rows);
    } catch (error) {
        return res.status(400).send(error);
    }
   }
   if(check=='date'){
    const text='select * from blog where date= $1 '
    try {
        const {rows}=await connection.query(text,[value]);

        return res.send(rows);
    } catch (error) {
        return res.status(400).send(error);
    }
  
   } 
   if(check=='author'){
    const text='select * from blog where author= $1 '
    try {
        const {rows}=await connection.query(text,[value]);

        return res.send(rows);
    } catch (error) {
        return res.status(400).send(error);
    }


   }
   if(check=='category'){
    const text='select * from blog where category= $1 '
    try {
        const {rows}=await connection.query(text,[value]);

        return res.send(rows);
    } catch (error) {
        return res.status(400).send(error);
    }


} 




   } catch (error) {
    return res.status(400).send(error);
    
   }
 




}

async getsingle(res,id){
    
    console.log("in getsingle",id)
    const text='select * from blog where id= $1 '
    try {
        const {rows}=await connection.query(text,[id]);
       console.log(rows)
        return res.send(rows);
    } catch (error) {
        console.log(error)
        return res.status(400).send(error);
    }

}


async update(res,text,id){
    try {
        console.log(text)
        const {rows}=await connection.query(text,[id]);
        return res.send(rows);
    } catch (error) {
        return res.status(400).send(error);
    }    

    



}


async delete(res,id){
    const text=`delete from blog where id= $1`

    try {
        const {rows}=await connection.query(text,[id]);
        return res.send("row is deleted");
    } catch (error) {
        return res.status(400).send(error);
    }


}

async valueinsert(path,res){
    console.log("-------=-----",path)
    var text=`insert into blog (title,author,category,date,image) values($1, $2, $3,$4,$5)`
          path[4]="http://localhost:2000/"+path[4];
          console.log(path[4])
    
          try {
            const {rows}=await connection.query(text,path);
            //return res.send("row is deleted");
        } catch (error) {
            return res.status(400).send(error);
        }  
    
 
   


}




}
module.exports={controller}