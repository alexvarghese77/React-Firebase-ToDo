import React,{Component} from 'react';
import './note.css'

export default class Note extends Component{
    render()
    {
        return(
            <div className="center">
                <div className="note">
                  {this.props.noteContent}
                </div>
            
            </div>
        )
    }
}