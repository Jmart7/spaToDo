import { ConsoleLogger, Injectable } from "@nestjs/common";
import { TodoDTO } from "../todo.dto";
import { todos } from "../todos-mock";

@Injectable()
export class todoRepository {
    private todosArray: TodoDTO[] = [];
    
    getTodos() : TodoDTO[] {
        return this.todosArray;
    }

    addTodos(newTodo: TodoDTO) {
        console.log(newTodo);
        let todoToBeAdded = new TodoDTO((this.todosArray.length + 1), newTodo.title);
        return this.todosArray.push(todoToBeAdded);
    }

    editTodo(idToEdit: number, updatedTodo: TodoDTO){
        this.todosArray = this.todosArray.map((item) => {
            if (item.id == idToEdit) {
                item.title = updatedTodo.title;
            }

            return item; 
        });
    }

    deleteTodo(idToEdit: number, deleteTodo: TodoDTO){
        console.log(idToEdit)
        this.todosArray = this.todosArray.filter((item) =>{
            console.log(item)
            return item.id != idToEdit
        })
    }



    // getTodos(
    //     id?: string,
    //     title?: string,
    // )
}
