const guest= ['Alice','Bob','Charlie','David'];
let index = 1;
while (index < guest.length){
    if(guest[index] === 'Charlie'){
        console.log("Found Charlie")
        break;
    }
    index ++;
}