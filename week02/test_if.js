const status_num = 200;
if (status_num == 200) {
    console.log("OK")
} else if(status_num === 400){
    console.log("ERROR!")
} else {
    console.log("Unknown")
}


switch (status_num){
    case 200:
        console.log("OK!");
        //break;
    case 400:
        console.log("ERROR!");
        break;
    default:
        console.log("Unknown")
}

const message = (status_num === 200) ? "OK" : "ERROR"; //
    console.log(message)