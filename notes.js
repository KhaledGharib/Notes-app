const fs = require('fs')
const chalk = require('chalk');
const { title } = require('process');

const error = chalk.red.inverse("Error !")
const success = chalk.green.inverse("Success !"
)
const getNotes = function(){
    return "your notes..."
}


const addNote =  (title, body)=>{
    const notes = loadNotes()
    const dublicateNotes=notes.filter((note)=>{return note.title === title })

if (dublicateNotes.length === 0){
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(success)
    console.log("Note Added")

}else{
    console.log(error)
    console.log("Note Title Taken")
}

}

const saveNotes = function (notes) {

const dataJson = JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJson)
}

const removeNote = (title)=>{
 

    const notes = loadNotes()
    const toKeep = notes.filter((note)=>{return note.title !== title })
    if(notes.length>toKeep.length){
        console.log(chalk.green.inverse("Note removed Successfully !"))
        saveNotes(toKeep)   
    }else{

        console.log(chalk.red.inverse("Can't find the note !"))
    }


}


const loadNotes = function () {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
        
    }catch(e){
        return []
    }
}






module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}