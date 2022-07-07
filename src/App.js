
import './css/App.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import Nav from './Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';


function App() {

    const [todoList, setTodoList] = useState(()=>{
        const initialValue = JSON.parse(localStorage.getItem('todo'));
        return initialValue || [];
    });

    useEffect(()=> {
        localStorage.setItem('todo', JSON.stringify(todoList))
    }, [todoList]);
  
    const addTask =(userInput)=> { 

        if(userInput) {
            const newTask = {
                id: Math.random().toString(36).substr(3),
                text: userInput,
                complete: false,
                edit: false,
                active: true,
           }

        setTodoList([...todoList, newTask]);
        };
    }

    const toggleTask =(id)=> {
        setTodoList([
            ...todoList.map((todo)=> todo.id == id ? {...todo, complete: !todo.complete, active: !todo.active,} : {...todo})
        ]);
    }

    const removeTask =(id)=> {
        let newTodoList = todoList.filter((todo)=> todo.id !== id)
        setTodoList(newTodoList)
    }

    const editTask =(id)=> {
        setTodoList([
            ...todoList.map((todo)=> todo.id == id ? {...todo, edit: true} : {...todo})
        ]); 
    }

    const saveTask =(id, editInput)=> {
        setTodoList([
            ...todoList.map((todo)=> todo.id == id ? {...todo, edit: false, text: editInput} : {...todo})
        ]);
    }
    
    return (

        <section className = 'container'>
            <div className='todo__wrapper'>
                <BrowserRouter>
                    <>  
                        <Header />
                        <TodoForm addTask={addTask}/>
                        <Nav />
                        <Routes>
                            <Route path="/"  element={
                               <TodoList todoList={todoList} 
                                         removeTask={removeTask} 
                                         toggleTask={toggleTask} 
                                         editTask={editTask} 
                                         saveTask={saveTask}/>}/>
                        </Routes>
                    </>
                </BrowserRouter>
            </div>  
        </section>

    );
}

export default App;
