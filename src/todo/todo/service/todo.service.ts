import { Todo } from "../entities/todo.dto";
import { TodosRepository } from "../repository/todo.repository"
import { Injectable } from "@nestjs/common";

@Injectable()
export class TodoService {
    constructor(
        private todoRepository: TodosRepository,
    ) { }

    getTodos(): Promise<Todo[]> {
        return this.todoRepository.getTodos();
    }

    newTodo(newTodo: string) {
        return this.todoRepository.addTodos(newTodo);
    }

    editTodo(idToEdit: number, updatedTodo: string) {
        return this.todoRepository.updateTodos(idToEdit, updatedTodo)
    }

    deleteTodo(idToDelete: number) {
        return this.todoRepository.deleteTodos(idToDelete);
    }
}