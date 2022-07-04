
import './css/App.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import {useState, useEffect} from 'react';

function App() {

    const [todoList, setTodoList] = useState(()=>{
          
        const initialValue = JSON.parse(localStorage.getItem('todo'));
        return initialValue || [];
    });

    useEffect(()=> {

        localStorage.setItem('todo', JSON.stringify(todoList))
    }, [todoList])
  
    const addTask =(userInput)=> { 

        let textInput = userInput.trim();
        if(textInput){
            const newTask = {
                id: Math.random().toString(36).substr(3),
                text: textInput,
                complete: false,
                edit: false,
           }

        setTodoList([...todoList, newTask]);
        }
    }

    const toggleTask =(id)=> {

        setTodoList([
            ...todoList.map((todo)=> todo.id == id ? {...todo, complete: !todo.complete} : {...todo})
        ])
    }

    const removeTask =(id)=> {

        let newTodoList = todoList.filter((todo)=> todo.id !== id)
        setTodoList(newTodoList)
    }

    const editTask =(id)=> {

        setTodoList([
            ...todoList.map((todo)=> todo.id == id ? {...todo, edit: true} : {...todo})
        ]) 
    }

    const saveTask =(id, editInput)=> {

        setTodoList([
            ...todoList.map((todo)=> todo.id == id ? {...todo, edit: false, text: editInput} : {...todo})
        ])
    }

    const listTodo = todoList.map((todo)=> {

            return <TodoItem key={todo.id} todo={todo} removeTask={removeTask} toggleTask={toggleTask} editTask={editTask} saveTask={saveTask}/>
    })

    return (

        <section className = 'container'>

            <div className='todo__wrapper'>
                <Header />
                <TodoForm addTask={addTask}/>
                <div>
                    <ul className='todo__list'>
                        {listTodo}
                    </ul>
                </div>
            </div>
           
        </section>
    );
}

export default App;
