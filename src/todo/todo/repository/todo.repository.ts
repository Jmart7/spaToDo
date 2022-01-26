import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "../entities/todo.dto";

@Injectable()
export class TodosRepository {
    constructor(
        @InjectRepository(Todo)
        private todoDatabase: Repository<Todo>,
    ) { }

    getTodos(): Promise<Todo[]> {
        return this.todoDatabase.find()
    }

    addTodos(newTodo: string) {
        this.todoDatabase.insert({
            title: newTodo
        })
    }

    updateTodos(idToEdit: number, newTodo: string) {
        this.todoDatabase.update(
            idToEdit,
            {
                title: newTodo
            }
        )
    }

    async deleteTodos(idToEdit: number): Promise<void> {
        await this.todoDatabase.delete(idToEdit)
    }
}