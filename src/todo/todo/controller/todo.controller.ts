import { Controller, Get, Body, Post, Injectable } from '@nestjs/common';
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
    createTodo(@Body() createTodo: string) {
    return this.TodoService.newTodo(createTodo);
    }
}


