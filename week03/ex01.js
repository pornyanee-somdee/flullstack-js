const furniture = ['Table','Chairs','Couch'];

for (let i = 0; i < furniture.length; i++){
    console.log(furniture[i]);
}

for (let names of furniture){
    for(char of names){
        console.log(char)
    }
}


for (let item of furniture){
    for (let char of item){
        console.log(char);
    }
}