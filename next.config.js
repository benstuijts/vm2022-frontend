const path = require('path');
//require('dotenv').config();

module.exports = {

    strictmode: true,

    // env: {
    //     API_URL: process.env.API_URL,
    //     TEST: "",
    //     ADRES: process.env.ADRES,
    //     POSTCODE: process.env.POSTCODE,
    //     WOONPLAATS: process.env.WOONPLAATS,
    //     TELEPHONE_NUMBER: "0181 899 313",
    //     PHONE_NUMBER: process.env.PHONE_NUMBER,
    //     EMAIL: "info@voornemakelaars.nl",
    //     CALL_ME_URL: "tel:018189931",
    //     EMAIL_ME_URL: "mailto:info@voornemakelaars.nl",
    //     FB_URL: "https://www.facebook.com/voornemakelaars",
    //     INSTRAGRAM_URL: "",
    //     LINKEDIN_URL: "",
    //     KVK: "63508109",
    //     IBAN: "NL48KNAB0732269113",
    //     BTW: "NL196390400B01"
    // },

    // publicRuntimeConfig: {
    //     API_URL: process.env.API_URL
    // },


    webpack: config => {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')
        config.resolve.alias['img'] = path.join(__dirname, 'public/img')

        return config
    }
}