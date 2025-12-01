const registrationDate = new Date('2023-06-01T08:30:00');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZon: 'Asia/Bangkok'
};

const formattedDate = registrationDate.toDateString('th-TH',options);

console.log(`Date : ${formattedDate}`);