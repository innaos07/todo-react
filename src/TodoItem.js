import './css/todo-item.css';
import EditedArea from './EditedArea';

function TodoItem(props){

    const {todo, removeTask, toggleTask, editTask, saveTask} = props;
    const isEdited = todo.edit;
    
    const handlerDelete =()=> {
        removeTask(todo.id);
    }

    const handlerToggle =(e)=> {
        e.preventDefault();
        toggleTask(todo.id);
    }

    const handlerEdit =()=> {
        editTask(todo.id);
    } 

    return (
        
            <li className='todo__item' key={todo.id} >
               { isEdited ?
                    <EditedArea todo={todo}  saveTask={saveTask}/> :
                    <span 
                        onClick={handlerToggle} 
                        className={todo.complete ? 'todo__task--completed' : 'todo__task--active'}>{todo.text}
                    </span>
                }
    
                { isEdited ? 
                    null :
                    <button className='todo__btn-edit' onClick={handlerEdit}></button>
                }

                <button className='todo__btn-delete' onClick={handlerDelete}></button>
            </li> 
       
    )
}

export default TodoItem;