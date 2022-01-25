import { Controller, Get, Body, Post, Injectable, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { get } from 'http';
import { TodoDTO } from '../todo.dto';
import {TodoService} from '../service/todo.service'
// let todosData = todos;


@Controller('todo')
export class TodoController {
    // @Get()
    constructor (
        private TodoService: TodoService,
    ){}
    @Get()
    getTodos() : Promise<TodoDTO[]>{
        return this.TodoService.getTodos();
    }
    @Post()
    createTodo(@Body() createTodo: string) {
    return this.TodoService.newTodo(createTodo);
    }
    @Put(":id")
    // @Param(':id')
    updateTodo(@Body() updateTodo: string, @Param() params) {
        return this.TodoService.editTodo(params.id, updateTodo);
    }
    @Delete(':id')
    deleteTodo(@Param() params) {
        return this.TodoService.deleteTodo(params.id);
    }
}


