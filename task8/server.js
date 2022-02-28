const express = require("express");
const bodyParser = require("body-parser");
const {contacts} = require("./initialData");
const routes = require("./routes");

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");

app.get('/', (req, res) => {
    res.render("index", {contacts});
})

app.use("/contacts", routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Starting server on ${PORT} port`));