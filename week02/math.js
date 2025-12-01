const startTime = Date.now();
function someHeavyTask(){
    for (let i =0; i < 4e7; i++){
        Math.sqrt(i);
    }
    //let result = 0;
}
someHeavyTask();
const endTime = Date.now();
console.log(`FuntionTime: ${endTime - startTime} ms`);