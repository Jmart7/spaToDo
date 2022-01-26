import React, {useState, useEffect, useRef} from 'react' ;
import './GetComponent.css'

const url = 'http://localhost:3010/todo'

const UseEffectGetComponent = () => {
    const [todo, setTodos] = useState ([])
    const [title, setTitle] = useState ([])

    const getTodos = async () => {
        const response = await fetch(url, {
            headers: {
                "Accept": 'application/json',
                "Content-type": "application/json"
            }
        });
        const todo = await response.json();
        setTodos(todo)
        // console.log(todos);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title);
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

    const editTodos = (urlToEdit) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'edita2' })
        };
        fetch(urlToEdit, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
    }
    useEffect(() => {
        getTodos();
    }, []);
    
    return (
        <>
            <h3>To-Do List</h3>
            <div className='addTodo'>
                <article>
                    <form className='form' onSubmit={(e) => handleSubmit(e)}>
                        <div className='formBlankSpace'>
                            <label htmlFor='to-do'></label>
                            <input type="text" 
                            id='title' 
                            name='title' 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                    </form>
                    <button type="push" className="addButton" onClick={() => {addTodos(title); return getTodos()}}>
                    Add
                    </button>
                </article>
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
                            <button onClick={() => {editTodos(url + '/' + id); return getTodos()}} className='editButton'>Edit</button>
                        </label>
                        <label className='form-controlDelete'>
                            <a onClick={() => {deleteTodos(url + '/' + id); return getTodos()}} className='deleteButton'>Delete</a>
                        </label></>
                    );
                    })}
                </ul>
            </div>
        </>
      );
}

export default UseEffectGetComponent;