const express = require("express");
const bodyParser = require("body-parser");
const contacts = require("./initialData");

const app = express();

app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index", {contacts});
})

app.get("/contacts/new", (req, res) => {
    res.render("addContact", {});
})

app.post("/contacts/new", (req, res) => {
    console.log(req.body);
    contacts.push(req.body);
    res.status(200).redirect("http://localhost:3000/").render("index", {contacts});
})

app.get("/contacts/edit", (req, res) => {
    console.log(req.body);
    res.render("editContact", {name: "John", phoneNumber: "+374 10636363" });
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Starting server on ${PORT} port`));