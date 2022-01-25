import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TodoDTO } from "../todo.dto";

@Injectable()
export class todoRepository{
    constructor(
        @InjectRepository(TodoDTO)
        private todosRepository: Repository<TodoDTO>,
    ) {}

    getTodos() : Promise<TodoDTO[]>{
        return this.todosRepository.find()
    }

    addTodos(newTodo: string){
        this.todosRepository.insert({
            title: newTodo
        })
    }

    updateTodos(idToEdit: number,newTodo: string){
        this.todosRepository.update(
            idToEdit,
            {
            title: newTodo
            }
        )
    }

    async deleteTodos(idToEdit: number): Promise<void>{
        await this.todosRepository.delete(idToEdit)
    }
}





// @Injectable()
// export class todoRepository {
//     private todosArray: TodoDTO[] = [];
    
//     getTodos() : TodoDTO[] {
//         return this.todosArray;
//     }

//     addTodos(newTodo: TodoDTO) {
//         console.log(newTodo);
//         let todoToBeAdded = new TodoDTO((this.todosArray.length + 1), newTodo.title);
//         return this.todosArray.push(todoToBeAdded);
//     }

//     editTodo(idToEdit: number, updatedTodo: TodoDTO){
//         this.todosArray = this.todosArray.map((item) => {
//             if (item.id == idToEdit) {
//                 item.title = updatedTodo.title;
//             }

//             return item; 
//         });
//     }

//     deleteTodo(idToEdit: number, deleteTodo: TodoDTO){
//         console.log(idToEdit)
//         this.todosArray = this.todosArray.filter((item) =>{
//             console.log(item)
//             return item.id != idToEdit
//         })
//     }



    // getTodos(
    //     id?: string,
    //     title?: string,
    // )

