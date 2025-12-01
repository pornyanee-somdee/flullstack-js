function generateTempLD(){
    const randomPart = Math.random().toString(36).substring(2,8);

    return randomPart.toUpperCase();
}
const orderID = generateTempLD();
console.log (`ID order: ${orderID}`);
