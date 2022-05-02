require('dotenv').config();
const CryptoJS = require('crypto-js');

//Encriptar
encriptar = async (text) => {
    try{
        return CryptoJS.AES.encrypt(text, process.env.TOKEN_SECRET).toString();
    }
    catch(error){
        console.log(error);
    }
};

//Encriptar
desencriptar = async (text) => {
    try{
        text = CryptoJS.AES.decrypt(text,process.env.TOKEN_SECRET);
        return text.toString(CryptoJS.enc.Utf8);
    }
    catch(error){
        console.log(erorr);
    }
};

module.exports = { encriptar, desencriptar };