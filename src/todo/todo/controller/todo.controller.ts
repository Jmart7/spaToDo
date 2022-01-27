import { Controller, Get, Body, Post, Put, Param, Delete } from '@nestjs/common';
import { Todo } from '../entities/todo.dto';
import { TodoService } from '../service/todo.service'

@Controller('todo')
export class TodoController {
    constructor(
        private TodoService: TodoService,
    ) { }

    @Get()
    getTodos(): Promise<Todo[]> {
        return this.TodoService.getTodos();
    }

    @Post()
    createTodo(@Body("title") createTodo: string) {
        return this.TodoService.newTodo(createTodo);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() contactData: Todo): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.TodoService.editTodo(contactData);
    }  
    
    // @Put(":id")
    // updateTodo(@Body() updateTodo: string, @Param() params) {
    //     return this.TodoService.editTodo(params.id, updateTodo);
    // }

    @Delete(':id')
    deleteTodo(@Param() params) {
        return this.TodoService.deleteTodo(params.id);
    }
}


