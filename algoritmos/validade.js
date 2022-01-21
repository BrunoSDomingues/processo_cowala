function checkExpired(date, exp){
    let today = new Date();

    myDate = new Date(date);
    myDate.setDate(myDate.getDate() + parseInt(exp.slice(0, -1)))

    return myDate > today;
}

console.log(checkExpired("2021-11-17T20:40:09.503Z", "10d"));
console.log(checkExpired("2021-12-10T00:00:00.000Z", "180d"));