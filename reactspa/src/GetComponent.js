import React, {useState, useEffect, useRef} from 'react' ;
import './GetComponent.css'
import {Link, Navigate, useNavigate} from 'react-router-dom' 
//url used in backend
const url = 'http://localhost:3010/todo'

const UseEffectGetComponent = (props) => {
    const [todo, setTodos] = useState ([])
    const [title, setTitle] = useState ([])
    const [editState , setEditState] = useState({
        id:0,
        isEditting: false
    })
    //handlers
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleOnClick = (idToEdit) => {
        setEditState({
            id: idToEdit,
            isEditting: true,
        })
    }

    const handleCancel = () => {
        setEditState({
            id: editState.id,
            isEditting: false
        })
    }
    //Backend functions
    const getTodos = async () => {
        const response = await fetch(url, {
            headers: {
                "Accept": 'application/json',
                "Content-type": "application/json"
            }
        });
        const todo = await response.json();
        setTodos(todo)
    }

    const addTodos = async (titleOfTodo) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: titleOfTodo })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }

    const deleteTodos = (urlForDelete) => {
        fetch(urlForDelete, {method : 'DELETE'})
            .then(() => this.setState({status: 'Deleted'}))
    }

    const EditTodos = (urlToEdit, title) => {
        console.log(urlToEdit)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title })
        };
        fetch(urlToEdit, requestOptions)
            .then(console.log(urlToEdit),
            response => response.json())
        handleCancel()
        window.location.reload(true);
    }

    useEffect(() => {
        getTodos();
    }, []);

    const taskListContent = (
    <div className='Everything'>
        <h1>To-Do List</h1>
        <div className='addTodo'>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className='formBlankSpace'>
                    <label htmlFor='to-do'></label>
                    <input type="text"
                    className='formToAdd' 
                    value={title}
                    placeholder="Add a new To-do"
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
            </form>
            <button type="push" className="addButton" onClick={() => {addTodos(title); return getTodos()}}>Add</button>
        </div>
        <div className='todoGet'>
            <ul className='todos'>
                {todo.map((elem) => {
                const { id, title } = elem;
                return (
                    <><label key={id} className='form-control'>
                        <input type="checkbox" name="checkbox" className='inputCheckbox' />
                    </label>
                    <label>
                        <a className='form-controlTitle'>{title}</a>
                        <a onClick={() => {handleOnClick(id)}} className='editLink' >Edit</a>
                    </label>
                    <label className='form-controlDelete'>
                        <a onClick={() => {deleteTodos(url + '/' + id); return getTodos()}} className='deleteButton'>Delete</a>
                    </label></>
                );
                })}
            </ul>
        </div>
    </div>
    )
    
    const editContent = (
        <div className='Everything'>
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                <div className='formBlankSpace'>
                        <label htmlFor='to-do'></label>
                        <input type="text" 
                        id='title' 
                        name='title' 
                        value={title}
                        className='formToEdit'
                        placeholder={"Edit to-do"} 
                        onChange={(e) => setTitle(e.target.value)}
                        />
                        <button onClick={() => {EditTodos(url + '/' + editState.id, title)}} className='editButton'>Edit</button>
                        <button onClick={handleCancel} className='cancelButton'>Cancel</button>
                </div>
            </form>
        </div>
    )
    if (editState.isEditting) {
        return editContent; 
    } else { 
        return  taskListContent; 
    }
}

export default UseEffectGetComponent;