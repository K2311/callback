const fs = require('fs');

fs.readFile('file1.txt','utf8',(err,data1)=>{
    if(err) return console.log(err);
    fs.readFile('file2.txt','utf8',(err,data2)=>{
        if(err) return console.log(err);
        fs.readFile('file3.txt','utf8',(err,data3)=>{
            if(err) return console.log(err);
            console.log(data1,data2,data3);
        });

    });

});