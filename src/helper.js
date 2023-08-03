const NodeCache = require( "node-cache" );

const cache = new NodeCache();
const multer=require('multer');
const path = require('path');
const imagePath = path.join(__dirname, './uploads');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/uploads/'); 
    },
    filename: function (req, file, cb) {

      const originalExtension = path.extname(file.originalname);
      cb(null, file.originalname+ originalExtension);
    },
  });
  const upload = multer({ storage });
class helper{
async addtocache(ip,value){

  cache.set(ip, value);

}
async check_ip(ip){
    console.log(ip)

return new Promise((resolve,reject)=>{
   var re;
   if(ip){
    if (cache.has(ip)) {
        re=1;
        console.log(`ip exist`);
      } else {
        re=0;
        console.log(`ip not exist`);
      }
      resolve(re)
    }
    else{
        reject(new Error("ip undefined"))
    }
})

}

async makequeryUpdate(body){

   var obj=Object.keys(body)
   var values=Object.values(body);
    var path;
    return new Promise((resolve)=>{
    obj.map((col,index)=>{
         console.log(obj.length)
         if(((index==(obj.length-1))||(obj.length==1))==0){
             console.log(col,index)
             if(!path){
              path=`${col}='${values[index]}',`;
             }else{
              path=path+`${col}='${values[index]}',`
             }

         }
         else{
              if(!path){
                   path=`${col}='${values[index]}'`;
              }else{
                    path=path+`${col}='${values[index]}'`
             }
        }

    })
    var query=`update blog set ${path} where id= $1`;
     resolve (query);
})
   // return query;
   


}

async imageViewer(req,res){

    console.log(req.data)
        const image = req.params.image;

        if (!image) {
          res.status(400).send('Image name is missing');
          return;
        }
      
        const imgpathfile = path.join(imagePath, image);
      
        res.sendFile(imgpathfile, (err) => {
          if (err) {
            res.status(404).send('Image not found');
          }
        });
        



}
async imageupoad(req,res){
    return new Promise((resolve,reject)=>{
setTimeout(() => {
    upload.single('files')(req,res,(err)=>{

     
        if(err){
            console.log("file failed upload");
            reject(err);
          }

          console.log("-----",req.file.originalname)
         
          console.log("-----",req.body.data)
      res.send('Files uploaded successfully.'+req.file+'');
      var k=[req.file.originalname,req.body.data]
      var values=req.body.data.split(",");
      values.push(req.file.originalname)
      console.log("[[[[[in an arrray]]]]",values)
     resolve(values)
    



     })  
    }, 2000);    
    

    })
  


}





}
module.exports={helper};