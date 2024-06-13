const validator = require("validator");

const isEmail = validator.isEmail("test@test.com"); //true
const isEmail2 = validator.isEmail("abcDE123"); //false
console.log(isEmail);
console.log(isEmail2);
