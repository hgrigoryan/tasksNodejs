const {body} = require('express-validator');
const {providerCodes} = require("./initialData");

const nameValidation = 
    body('name').trim().isLength({ min: 1 }).withMessage('Name empty.')
    .isLength({ min: 3 }).withMessage('Name must contain min 3 letters.')
    .isAlpha().withMessage('Name must be alphabet letters.');

function poneNumberValidation(req, res, next){
    const {phoneNumber} = req.body;
    if(phoneNumber.length !== 13){
        return res.status(400).send("Invalid phone number.");
    }
    const countryCode = phoneNumber.substring(0, 5);
    const providerCode = phoneNumber.substring(5, 7);
    const restOfNumber = phoneNumber.substring(7);
    if(countryCode !== "+374 " || !providerCodes.includes(providerCode) || !(/^[0-9]+$/.test(restOfNumber)))
        return res.status(400).send("Invalid phone number.");

    next()
}

module.exports = {nameValidation, poneNumberValidation}