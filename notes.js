const fs = require('fs')
const chalk = require('chalk');

const error = chalk.red.inverse("Error !")
const success = chalk.green.inverse("Success !"
)

const getNotes = ()=>{
        console.log(chalk.blue.inverse("your notes..."))
        const list = loadNotes()
        list.forEach(note => console.log("● ",note.title)
    );
}


const addNote =  (title, body)=>{
    const notes = loadNotes()
    const dublicateNotes= notes.find((note)=> note.title === title )

if (!dublicateNotes){
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

const saveNotes = (notes) =>{

const dataJson = JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJson)
}

const removeNote = (title)=>{
 

    const notes = loadNotes()
    const toKeep = notes.filter((note)=> note.title !== title)
    if(notes.length>toKeep.length){
        console.log(chalk.green.inverse("Note removed Successfully !"))
        saveNotes(toKeep)   
    }else{

        console.log(chalk.red.inverse("Can't find the note !"))
    }


}

const readNote = (title)=>{
    const notes = loadNotes()
    const test = notes.find((test)=>test.title === title)
    // const note= notes.find((note)=> note.title === title )


        if(test){
            console.log(test.title)
            console.log(test.body   )
        }else{
            console.log("can't find the note")
        }


}


const loadNotes = ()=> {
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
    removeNote:removeNote,
    readNote:readNote
}