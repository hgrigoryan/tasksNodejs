const contacts = [
    {name: "Anna", phoneNumber: "+374 91000000"}, 
    {name: "Ani", phoneNumber: "+374 91111111"},
    {name: "Mane", phoneNumber: "+374 91222222"},
    {name: "Karine", phoneNumber: "+374 98888888"},
    {name: "Syune", phoneNumber: "+374 10222222"},
    {name: "Serine", phoneNumber: "+374 96777777"},
    {name: "Marine", phoneNumber: "+374 94555555"},
    {name: "Nare", phoneNumber: "+374 93666666"},
    {name: "Narine", phoneNumber: "+374 10333333"},
]

const providerCodes = ["10", "33", "55", "77", "91", "93", "94", "96", "98", "99"];

function getRandomId() {
    // Getting random number from 10000 to 99999
    return (Math.floor(Math.random() * (99999 - 10000) ) + 10000).toString();
  }

contacts.forEach(contact => {
    contact.id = getRandomId();
})

module.exports = {contacts, providerCodes, getRandomId}