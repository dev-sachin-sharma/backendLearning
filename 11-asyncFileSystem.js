const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("sachin", err);
    return;
  }
  const first = result;
  console.log("first arrow function", first);

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("sachin", err);
    }
    const second = result;
    console.log("second arrow function", second);

    writeFile(
      "./content/third-async.txt",
      `this is result of async functions ${first},${second}`,{
        flag:"a"
    },
      (err, result) => {
        if (err) {
          console.log("sacjin3", err);
        }
        console.log(result, "hey");
      },
      
    );
  });
});
