const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err);
    return;
  }
  console.log("file contains: ", data);
});

const content = "Hello worllddd";
fs.writeFile("example.txt", content, (err) => {
  if (err) {
    console.log("File written unsuccessfully", err)
    return;
  }
  console.log("File written successfully");
});

fs.rename("example.txt", "new_example.txt", (err) => {
 if (err) {
  console.log("Error renaming the file", err);
  return;
 }
 console.log("File renamed successfully!!");
});