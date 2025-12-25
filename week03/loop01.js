const names = ['Justin','Sarah','Chritopher']; //for 4

for (let i =0; i< names.length; i++){
    console.log(names[i]);
}

names.forEach(name =>{
    console.log(name);
});
///
names.forEach(myFunction);

function myFunction(name){
    console.log(name);
}

for (let name of names){
    console.log(name); 
}