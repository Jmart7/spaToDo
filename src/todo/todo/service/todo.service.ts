import { TodoDTO } from "../todo.dto";
import { todos } from "../todos-mock";
import {todoRepository} from "../repository/todo.repository"
import { Injectable } from "@nestjs/common";

@Injectable()
export class TodoService {
    constructor(
        private todoRepository: todoRepository,
    ){}

    getTodos(): TodoDTO[] {
        return this.todoRepository.getTodos();
    }

    newTodo(newTodo: TodoDTO) {
        return this.todoRepository.addTodos(newTodo);
    }

    editTodo(idToEdit: number, updatedTodo: TodoDTO) {
        return this.todoRepository.editTodo(idToEdit, updatedTodo)
    }

    deleteTodo(idToDelete: number, deleteTodo: TodoDTO){
        return this.todoRepository.deleteTodo(idToDelete, deleteTodo);
    }
}


// const newTodo: TodoDTO = {
//     id: (todos.length + 1).toString(),

// }
