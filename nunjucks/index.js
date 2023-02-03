const nunjucks = require("nunjucks");
const userData = require("./user.json");
const fs = require("fs");

nunjucks.configure({
  autoescape: true,
});
nunjucks.configure("views", {
  autoescape: true,
});

let outPut = nunjucks.render("index.njk", userData);
fs.writeFileSync("./index.html", outPut);
console.log("success");
// console.log(userData.user[0].address.geo.lat);
