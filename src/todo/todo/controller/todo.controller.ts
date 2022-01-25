import { Controller, Get, Body, Post, Injectable, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { get } from 'http';
import { TodoDTO } from '../todo.dto';
import { todos } from '../todos-mock';
import {TodoService} from '../service/todo.service'
// let todosData = todos;


@Controller('todo')
export class TodoController {
    // @Get()
    constructor (
        private TodoService: TodoService,
    ){}
    @Get()
    getTodos() : TodoDTO[]{
        return this.TodoService.getTodos();
    }
    @Post()
    createTodo(@Body() createTodo: TodoDTO) {
    return this.TodoService.newTodo(createTodo);
    }
    @Put(":id")
    // @Param(':id')
    updateTodo(@Body() updateTodo: TodoDTO, @Param() params) {
        return this.TodoService.editTodo(params.id, updateTodo);
    }
    @Delete(':id')
    deleteTodo(@Body() deleteTodo: TodoDTO, @Param() params) {
        return this.TodoService.deleteTodo(params.id, deleteTodo);
    }
}


