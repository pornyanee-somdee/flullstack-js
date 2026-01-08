const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name:',(name) =>{
    rl.question('Enter your weigth (in kg):', (weigth) =>{
        rl.question('Enter your heigth (in m):',(heigth) =>{

            
            let bmi = weigth / (heigth * heigth);

            console.log(`${name}, your BMI is ${bmi.toFixed(2)}`);


            rl.close();
        });
    });
});