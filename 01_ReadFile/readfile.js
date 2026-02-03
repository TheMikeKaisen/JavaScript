const fs = require('fs')


fs.readFile("./hello.txt", "utf-8", function(err, data){
    if(err){
        console.log("Error occured")
        return;
    }
    console.log(data);
})