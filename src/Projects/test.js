const fs = require("fs");

function getProjects() {
  return fs.readFileSync("Book1.xlsx");
}

export default getProjects;