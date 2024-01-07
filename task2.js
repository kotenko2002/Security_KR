const moment = require("moment");

const name = "Dmytro Kotenko";
const email = "kotenko2002@gmail.com";
const birthdayDayAndMonth = "12-31";
const examTime = moment("2024-01-11 09:00");
const birthdayTime = moment(`2024-${birthdayDayAndMonth}`);

const now = moment();
const daysToBirthday = birthdayTime.dayOfYear() - now.dayOfYear();

const payload = {
    name: name,
    sub: email,
    iat: now.unix(),
    nbf: examTime.unix(),
    exp: examTime.add(daysToBirthday, "days").unix(),
};

console.log("payload:", payload);
