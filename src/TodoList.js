import TodoItem from './TodoItem';
import './css/TodoList.css';
import {useSearchParams} from 'react-router-dom';


function TodoList (props) {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const {todoList, removeTask, toggleTask, editTask,saveTask} = props;
    const statusFilter = searchParams.get('filter');
  
    const filterList = !statusFilter ? todoList : todoList.filter((todo)=> {

        if(statusFilter === 'active'){
            return todo.active;
        } else if (statusFilter==='complete'){
            return todo.complete;
        } 
            return true;
    });

    return (
        <ul className='todo__list'>
            {filterList.map((todo)=>{
               return (<TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    removeTask={removeTask} 
                    toggleTask={toggleTask}  
                    editTask={editTask} 
                    saveTask={saveTask}/> 
                ) 
            })}
        </ul>
    )
}

export default TodoList;