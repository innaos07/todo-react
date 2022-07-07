
import './css/TodoForm.css';
import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';

function TodoForm(props) {

    const [userInput, setUserInput] = useState('');
    const [activeInput, setActiveInput] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const statusFilter = searchParams.get('filter');
      console.log('statusFilter', statusFilter)
    
    const addedActiveInput =()=> {
        setActiveInput(true)
        setTimeout(deletedActiveInput, 1000)
    }

    const deletedActiveInput =()=> {
        setActiveInput(false)
    }
   
    const handlerChange =(e)=> {
        let textInput = e.target.value;
        setUserInput(textInput);
    }

    const setStatusDefault =()=> statusFilter ? setSearchParams("/") : null;

    const handlerSubmit =(e)=> {
        e.preventDefault();
        
        setStatusDefault();
        let text = userInput.trim();
    
        if(text) {
            props.addTask(userInput);
            addedActiveInput();
        } 
        setUserInput('');
    }

    return(

        <form className='todo__form' onSubmit={handlerSubmit}>
            <textarea className={activeInput ? 'todo__text todo__text--active' : 'todo__text'}  placeholder={activeInput? 'task added' : 'waiting for your text...'} value={userInput} onChange={handlerChange}></textarea>
            <button className='todo__btn-add'>add</button>
        </form>
    )
}

export default TodoForm;