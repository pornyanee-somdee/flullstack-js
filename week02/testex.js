const fullName = " Pornyanee Somdee ";

const cleaneName = fullName.trim();
console.log(`Cleaned Name: '${cleaneName}'`);

const nameParts = cleaneName.split(" ");
console.log(`name Parts: ${nameParts}`);

const finalParst = nameParts.filter(Boolean);
console.log("final Parst:", finalParst);

const firstName = finalParst[0];
console.log(`First Name: '${firstName}'`)
