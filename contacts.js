const fs = require("fs").promises;
const colors = require("colors");
const { program } = require("commander");
const path = require("path");

const contactsPath = path.join(__dirname, "db",'contacts.json')

const listContacts = async () =>
{ 
  try{const data = await fs.readFile(contactsPath, "utf-8");
      const dataParse = JSON.parse(data); 
      if(dataParse.length === 0){console.log("No contacts found!".red);return}
      else{console.table(dataParse)}}
  catch(err){console.log("Error when handeling LIST function due to:".red,err)}
}

const getContactById = async (contactId) =>
{
 try{
    const data = await fs.readFile(contactsPath, "utf-8");
     const dataParsed = JSON.parse(data);
     const filteredData = dataParsed.filter(contact => contact.id === contactId);
     if(filteredData.length === 0){console.log("ID contact not found".red); return}
     else{console.log("Searched ID: ".bgGreen,filteredData); }
     }
 catch(err){console.log("Error when handeling GetID function due to:".red,err)}
}

const removeContact= async(contactId) =>
{
 try{
     const data = await fs.readFile(contactsPath,"utf-8");
     const dataParsed = JSON.parse(data);
     const filteredData = dataParsed.filter(contact => contact.id !== contactId);
     if(dataParsed.length === filteredData.length){console.log("ID contact not found".red); return}
     else{await fs.writeFile(contactsPath, JSON.stringify(filteredData, null, 2))
          console.log("Contact was removed from list".green)}
    }
 catch(err){console.log("Error when handeling REMOVE function due to:".red,err)}
}


const addContact = async (newContact) =>
{
  try{
       const data = await fs.readFile(contactsPath,"utf-8");
       const dataParsed = JSON.parse(data);
       dataParsed.push(newContact)
       const newListString = JSON.stringify(dataParsed, null, 2);
       await fs.writeFile(contactsPath, newListString)
       console.log("New contact: ".bgGreen, newContact)
      }
 catch(err){console.log("Error when handeling ADD function due to:".red, err)}
}

  module.exports = {listContacts, getContactById, removeContact, addContact}