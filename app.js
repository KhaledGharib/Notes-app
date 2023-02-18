
const chalk = require('chalk');
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
    handler(argv) {
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
    handler (argv){
        notes.removeNote(argv.title)
    }
}).command({
    command: 'read',
    describe: 'read all note',
    builder:{
      title:{
            describe:'Enter note tilte',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
}).command({
    command: 'list',
    describe: 'List notes',

    handler (){
        notes.getNotes()
    }
})



yargs.parse()

// console.log(yargs.argv)