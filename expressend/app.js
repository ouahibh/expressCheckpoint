const express = require("express");


const cors = require("cors");

const api = require("./routes/api");
const app = express();
app.use(cors());
app.options("*", cors());

app.use(express.json());

app.use("", api);
const port = 3002;
app.listen(port, () => console.log(`app listening on port ${port}!`));
