import React,{Component} from 'react';
import './noteForm.css'

export default class NoteForm extends Component{
    render()
    {
        return(
            <div className="noteInput">
                 <input type="text"/>
            </div>
        )
    }
}