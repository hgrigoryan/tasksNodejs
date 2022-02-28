const express = require('express')
const router = express.Router()
const {contacts, getRandomId} = require("./initialData");


// middleware that is specific to this router/'
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// Define the home page route
router.get('/', (req, res) => {
    res.render("index", {contacts});
})

// Add contact page rout
router.get('/new', (req, res) => {
    res.render("addContact", {});
})

// Save new contact button handler
router.post('/new', (req, res) => {
    const contact = req.body;
    contact.id = getRandomId();
    contacts.push(contact);
    res.redirect("/contacts");
    res.render("index", {contacts});
})

// Edit button handler
router.get('/edit/:id', (req, res) => {
    const {id} = req.params;
    const index = contacts.findIndex(contact => contact.id === id);
    const contact = contacts[index];
    res.render("editContact", {contact});
})

// Save after editting button handler
router.post('/edit/:id', (req, res) => {
    const {id} = req.params;
    const index = contacts.findIndex(contact => contact.id === id);
    contacts[index].name = req.body.name;
    contacts[index].phoneNumber = req.body.phoneNumber;
    res.redirect("/contacts");
    res.render("index", {contacts});
})

// Delete button handler
router.get('/:id', (req, res) => {
    const {id} = req.params;
    const index = contacts.findIndex((contact) => contact.id === id);
    contacts.splice(index, 1);
    res.redirect("/contacts");
    res.render("index", {contacts});
})

module.exports = router