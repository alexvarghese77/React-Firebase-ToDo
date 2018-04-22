import React, { Component } from 'react';
import './App.css';
import Note from './Note/note.jsx'
import NoteForm from './NoteForm/noteForm.jsx'
import {DB_CONFIG} from './config/config.js'
import firebase from 'firebase';
import 'firebase/database';

class App extends Component {

constructor(props){
  super(props);
  if (!firebase.apps.length) {
  this.app=firebase.initializeApp(DB_CONFIG);
  this.database=this.app.database().ref().child('notes');
  }
 
  this.state={
    notes:[]
  }
}
componentWillMount(){
  let previousNotes=this.state.notes;
  this.database.on('child_added', snap => {
    previousNotes.push({
      id: snap.key,
      noteContent: snap.val().noteContent,
    })
     this.setState({
      notes:previousNotes
    })

  })

  this.database.on('child_removed', snap => {
    for(var i=0; i < previousNotes.length; i++){
      if(previousNotes[i].id === snap.key){
        previousNotes.splice(i, 1);
      }
    }
    // previousNotes=previousNotes.filter((item)=>{
    //   item.id !== snap.key
    //})
    this.setState({
      notes: previousNotes
    })
  })
 
}

  addnote(values){
    // var previousNotes=this.state.notes;
    // var newNote=[...previousNotes,{noteContent: values, noteId: previousNotes.length+1}]
    // this.setState({
    //   notes:newNote
    // })
    this.database.push().set({noteContent:values})
  }
  delNote(id){
    this.database.child(id).remove();
    console.log(id)
  }

  render() {   
    return (
      <div className="App">
        <div className="head">
        TO Do
        </div>
        {
          this.state.notes.map((item,i)=>{
            return <Note noteContent={item.noteContent} noteId={item.id} key={i} delNote={this.delNote.bind(this)}/>
            
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
