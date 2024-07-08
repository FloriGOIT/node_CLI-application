
const functionalities = require("./contacts.js")
const {program} = require("commander")

program.command("list")
       .description("list the list")
       .action(async () =>{await functionalities.listContacts();})

program.command("get <contactId>")
       .description("selected contact description")
       .action(async (contactId) =>{await functionalities.getContactById(contactId)})

program.command("del <contactId>")
       .description("delete contact from list")
       .action(async (contactId) => {await functionalities.removeContact(contactId);})     
       
program.command("add")
       .description("Add new contact")
       .option("-n, --name <type>","user name")
       .option("-e, --email <type>","user email")
       .option("-p, --phone <type>","user phone" )
       .action(async (options) => {const { id, name, email, phone } = options;
                                   const newContact = { id: Date.now().toString(), name, email, phone };
                                   await functionalities.addContact(newContact)
                                   console.log("New contact was added".green)})

program.parse(process.argv)