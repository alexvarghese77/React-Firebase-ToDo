import React,{Component} from 'react';
import './note.css'

export default class Note extends Component{
    render()
    {
        return(
            <div className="center">
                <div className="note">
                <div className="noteContent">
                     {this.props.noteContent}
                </div>  
                  <span className="closeBtn" onClick={()=>this.props.delNote(this.props.noteId)}>X</span>
                </div>
            
            </div>
        )
    }
}