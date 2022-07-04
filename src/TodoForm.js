
import './css/todo-form.css';
import {useState} from 'react';

function TodoForm(props) {

    const [userInput, setUserInput] = useState('');
   
    const handlerChange =(e)=> {
        let textInput = e.target.value;
        setUserInput(textInput);
    }

    const handlerSubmit =(e)=> {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput('');
    }

    return(

        <form className='todo__form' onSubmit={handlerSubmit}>
            <textarea className='todo__text' placeholder='waiting for your text...' value={userInput} onChange={handlerChange}></textarea>
            <button className='todo__btn-add'>add</button>
        </form>
    )
}

export default TodoForm;