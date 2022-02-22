const express = require("express");

const app = express();

app.set("view engine", "pug");

const tasks= [{name: "John", phoneNumber: "+374 10636363"}, 
              {name: "Doe", phoneNumber: "+374 99636363"}];

app.get("/", (req, res) => {
    res.render("index", {tasks});
})

app.get("/contacts/new", (req, res) => {
    res.render("addContact", {});
})

app.get("/contacts/edit", (req, res) => {
    res.render("editContact", {name: "John", phoneNumber: "+374 10636363" });
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Starting server on ${PORT} port`));