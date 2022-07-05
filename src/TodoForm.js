
import './css/todo-form.css';
import {useState} from 'react';

function TodoForm(props) {

    const [userInput, setUserInput] = useState('');
    const [activeInput, setActiveInput] = useState(false);
    
    console.log(activeInput)

    const addedActiveInput =()=> {
        setActiveInput(true)
        setTimeout(deletedActiveInput, 500)
    }

    const deletedActiveInput =()=> {
        setActiveInput(false)
    }
   
    const handlerChange =(e)=> {
        let textInput = e.target.value;
        setUserInput(textInput);
    }

    const handlerSubmit =(e)=> {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput('');
        addedActiveInput();
        console.log(activeInput)
    }

    return(

        <form className='todo__form' onSubmit={handlerSubmit}>
            <textarea className={activeInput ? 'todo__text todo__text--active' : 'todo__text'}  placeholder={activeInput? 'task added' : 'waiting for your text...'} value={userInput} onChange={handlerChange}></textarea>
            <button className='todo__btn-add'>add</button>
        </form>
    )
}

export default TodoForm;