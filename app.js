const fs = require("fs");

fs.writeFile("myFile.txt", "hello", (e) => {
  if (e) throw e;
  console.log(e, "123");
});

fs.readFile("myFile.txt", "utf8", (e, aba) => {
  if (e) {
    console.log(e);
  }
  console.log(aba);
});
