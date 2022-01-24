import { Injectable } from "@nestjs/common";
import { TodoDTO } from "../todo.dto";

@Injectable()
export class todoRepository {
    private todosArray: TodoDTO[] = [];
    
    getTodos() : TodoDTO[] {
        return this.todosArray;
    }

    addTodos(newTodo: string) {
        let todoToBeAdded = new TodoDTO((this.todosArray.length + 1).toString(), newTodo);
        this.todosArray.push(todoToBeAdded);
        return this.todosArray.
    }



    // getTodos(
    //     id?: string,
    //     title?: string,
    // )
}
