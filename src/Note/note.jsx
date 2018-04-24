import React,{Component} from 'react';
import './note.css'

export default class Note extends Component{
    render()
    {
        return(
<div className="note fade-in">
<span className="closebtn" 
      onClick={()=>this.props.delNote(this.props.noteId)}>
      &times;
</span>
<p className="noteContent">{this.props.noteContent}</p>
</div>
        )
    }
}