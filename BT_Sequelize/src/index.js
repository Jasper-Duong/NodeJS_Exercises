const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
const rootRouter = require("./routes/index.route");
app.use(cors());
app.use(express.json());
app.use(express.static("."));

app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log("Working!");
});
