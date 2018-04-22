import React, { Component } from 'react';
import './App.css';
import Note from './Note/note.jsx'
import NoteForm from './NoteForm/noteForm.jsx'

class App extends Component {

constructor(props){
  super(props);
  this.state={
    notes:[
      {
        noteContent:"FIrst Note",
        noteId:"1"
      },
      {
        noteContent:"Second Note",
        noteId:"2"
      },
    
    ]
  }
}

  addnote(values){
    debugger;
    var previousNotes=this.state.notes;
    var newNote=[...previousNotes,{noteContent: values, noteId: previousNotes.length+1}]
    this.setState({
      notes:newNote
    })
  }

  render() {

   

   
    return (
      <div className="App">
        <div className="head">
        TO Do
        </div>
        {
          this.state.notes.map((item,i)=>{
            return(
              <Note noteContent={item.noteContent} noteId={item.noteId} key={i}/>
            )
          })
        }  
        <div className="footer">
        <NoteForm addnote={this.addnote.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;
