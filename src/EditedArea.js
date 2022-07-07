import './css/EditedArea.css';
import {useState} from 'react';

function EditedArea(props){

    const {todo, saveTask} = props;
    const [editInput, setEditInput] = useState(todo.text);

    const handlerChange =(e)=> {
        let text = e.target.value;
        setEditInput(text);
    }

    const handlerSubmit =(e)=> {
        e.preventDefault();
        saveTask(todo.id, editInput)
    }

    return(

        <form  className='todo__form-edited' onSubmit={handlerSubmit}>
           <textarea  onChange={handlerChange} className='todo__task--edited' value={editInput}></textarea>
           <button className='todo__btn-save'></button>
        </form>

    )
}


export default EditedArea;