const chalk = require('chalk');
const { describe } = require('yargs');
const yargs = require('yargs')
const notes = require('./notes')


yargs.command({
    command: 'add',
    describe: 'Add a new Note',   
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
        

    },
    handler: (argv) => {
     notes.addNote(argv.title,argv.body)
    }
}).command({
    command: 'remove',
    describe: 'Remove a new Note',
    builder:{
        title:{
            describe:'Enter Note Title To Remove',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
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



yargs.parse()

// console.log(yargs.argv)