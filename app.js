const express = require("express");
const router = require("./routes/index");

require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/api", router);

const start = async () => {
  try {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server started on PORT ${process.env.PORT}`)
    );
  } catch (e) {
    console.log(e);
  }
};

start();
