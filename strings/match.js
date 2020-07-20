/* match a string with a specified regular expression and get an array of results */
let expr = "1 + 2 = 3";
let matches = expr.match(/\d+/);
console.log(matches[0]); /* "1" */
