import { Injectable } from "@nestjs/common";
import { TodoDTO } from "../todo.dto";

@Injectable()
export class todoRepository {
    private todosArray: TodoDTO[] = [];
    
    getTodos() : TodoDTO[] {
        return this.todosArray;
    }

    addTodos(newTodo: TodoDTO) {
        let todoToBeAdded = new TodoDTO((this.todosArray.length + 1).toString(), newTodo);
        return this.todosArray.push(todoToBeAdded);
    }



    // getTodos(
    //     id?: string,
    //     title?: string,
    // )
}
