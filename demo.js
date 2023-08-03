var y={"k":"adi","t":"1"}
var key=Object.keys(y);
var values=Object.values(y);
var path;
key.map((col,index)=>{
    console.log(key.length)
    if(((index==(key.length-1))||(key.length==1))==0){
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
console.log(path)
