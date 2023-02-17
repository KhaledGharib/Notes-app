const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes')


yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    handler: () => {
        console.log(chalk.yellow.inverse('Adding a new Note'));
    }
}).command({
    command: 'remove',
    describe: 'Remove a new Note',
    handler: () => {
        console.log('Removing a new Note');
    }
}).command({
    command: 'read',
    describe: 'read all note',
    handler: ()=>{
        console.log("read note")
    }
}).command({
    command: 'list',
    describe: 'List notes',
    handler: ()=>{
        console.log('list notes')
    }
})


console.log(yargs.argv)