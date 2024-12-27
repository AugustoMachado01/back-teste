const express = require("express");
const users = require("./users/routes");

const app = express();

app.use(express.json());
app
  .use("/users", users)

  .listen(3000, () => {
    console.log("Server started in port 3000");
  })
  .once("error", (error) => {
    console.error(error);
    process.exit(1);
  });
