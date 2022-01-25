import { TodoDTO } from "../todo.dto";
import {todoRepository} from "../repository/todo.repository"
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(TodoDTO)
        private todoRepository: todoRepository,
    ){}

    getTodos(): Promise<TodoDTO[]> {
        return this.todoRepository.getTodos();
    }

    newTodo(newTodo: string) {
        return this.todoRepository.addTodos(newTodo);
    }

    editTodo(idToEdit: number, updatedTodo: string) {
        return this.todoRepository.updateTodos(idToEdit, updatedTodo)
    }

    deleteTodo(idToDelete: number){
        return this.todoRepository.deleteTodos(idToDelete);
    }
}




// @Injectable()
// export class TodoService {
//     constructor(
//         @InjectRepository(TodoDTO)
//         private todoRepository: todoRepository,
//     ){}

//     getTodos(): TodoDTO[] {
//         return this.todoRepository.getTodos();
//     }

//     newTodo(newTodo: TodoDTO) {
//         return this.todoRepository.addTodos(newTodo);
//     }

//     editTodo(idToEdit: number, updatedTodo: TodoDTO) {
//         return this.todoRepository.editTodo(idToEdit, updatedTodo)
//     }

//     deleteTodo(idToDelete: number, deleteTodo: TodoDTO){
//         return this.todoRepository.deleteTodo(idToDelete, deleteTodo);
//     }
// }


// const newTodo: TodoDTO = {
//     id: (todos.length + 1).toString(),

// }
