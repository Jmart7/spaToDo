import React, {useState, useEffect} from 'react' ;
import './GetComponent.css'

const url = 'http://localhost:3010/todo'

const UseEffectGetComponent = () => {
    const [todo, setTodos] = useState ([])

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

    const addTodos = async (titleOfTodo) => {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ title: titleOfTodo })
        // };
        // fetch(url, requestOptions)
        //     .then(response => response.json())
        //     .then(data => this.setState({ postId: data.id }));
    }

    useEffect(() => {
        getTodos();
    }, []);
    
    return (
        <>
            <h3>To-Do List</h3>
            <div className='addTodo'>
                <input
                type="text"
                id="new-todo-input"
                className="input"
                name="text"
                autoComplete="off"
                />
                <button type="submit" className="addButton">{addTodos}
                Add
                </button>
            </div>
            <div className='todoGet'>
                <ul className='todos'>
                    {todo.map((elem) => {
                    const { id, title } = elem;
                    return (
                        <><label key={id} className='form-control'>
                            <input type="checkbox" name="checkbox" />
                            {title}
                            <a href= {'http://localhost:3010/todo' + id} className='deleteButton'>Delete</a>
                        </label></>
                    );
                    })}
                </ul>
            </div>
        </>
      );
}

export default UseEffectGetComponent;