
/*
const readline = require('readline');
const fs = require('fs').promises;
const { program } = require('commander');
require('colors');
program.option(
  '-f, --file [type]',
  'file for saving game results',
  'results.txt',
);

//program.parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


let count = 0;
const logFile = program.opts().file;
const mind = Math.floor(Math.random() * 10) + 1;

const isValid = value => {
  if (isNaN(value)) {
    console.log('Introduceți numărul!'.red);
    return false;
  }
  if (value < 1 || value > 10) {
    console.log('Numărul trebuie să fie în intervalul 1 - 10'.red);
    return false;
  }
  return true;
};

const log = async data => {
  try {
    await fs.appendFile(logFile, `${data}\n`);
    console.log(`S-a reușit salvarea rezultatului într-un fișier ${logFile}`.green);
  } catch (err) {
    console.log(`Nu s-a putut salva fișierul ${logFile}`.red);
  }
};

const game = () => {
  rl.question(
    'Introdu un număr de la 1 la 10 pentru a ghici răspunsul: '.yellow,
    value => {
      let a = +value;
      if (!isValid(a)) {
        game();
        return;
      }
      count += 1;
      if (a === mind) {
        console.log('Felicitări, ai ghicit numărul în %d pași)'.green, count);
        log(
          `${new Date().toLocaleDateString()}: Felicitări, ai ghicit numărul în ${count} pași`,
        ).finally(() => rl.close());
        return;
      }
      console.log('Nu ai ghicit, încearcă din nou'.red);
      game();
    },
  );
};

game();
*/
//⬆️ Number game


const fs = require("fs").promises;
const {program} = require("commander")
require("colors")


const addTask = async (task, logFile) => {console.log("Task:".blue, task);
                                          console.log("LogFile:".blue, logFile); 
                                        
                                          try {
                                            await fs.appendFile(logFile, `${task}\n`);
                                            console.log("Your task was added to the list as per function".yellow);
                                        } catch (error) {
                                            console.error("Error writing to the file".red, error);
                                        }}



program.option("-f, --file [type]","Task CLI app", "tasks.txt");

program .command("add <task>")
        .description("A new task should be added")
        .action(async task => {
                               const logFile = program.opts().file;
                               await addTask(task, logFile);
                               console.log("Your task was added in the list okkkkkk".yellow)
                              })
program.parse(process.argv);