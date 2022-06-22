const express = require("express")
const router = require("./routes/router")
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
app.use(express.json());
app.use(cookieParser());

module.exports = router.apply(app);
