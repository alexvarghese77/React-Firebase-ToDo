import React,{Component} from 'react';
import './noteForm.css'

export default class NoteForm extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            notetyped:'',
        }
    }
    
       notechanged(e){
        var noteinput=e.target.value
      
         this.setState(
          {
                 notetyped:noteinput,
          }
         )
         console.log(this.state)
     }

     addNote()
     {
         
         this.props.addnote(this.state.notetyped);
         this.setState(
            {
                   notetyped:"",
            })
     }

    render()
    {
       
     
        return(
            <div className="formWrapper">
            <input className="noteInput"
            placeholder="Write a new note..."
            onChange={this.notechanged.bind(this)} value={this.state.notetyped} />
            <button className="noteButton"
            onClick={this.addNote.bind(this)}>Add Note</button>
        </div>
        )
    }
}