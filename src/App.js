import React, { Component } from 'react';
import './App.css';
import Note from './Note/note.jsx'
import NoteForm from './NoteForm/noteForm.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="head">
        TO Do
        </div>
        <Note noteContent="FIrst Note" noteId="1"/>
        <Note noteContent="Second Note" noteId="1"/>
        
        <div className="notesFooter">
        <NoteForm/>
        </div>
      </div>
    );
  }
}

export default App;
