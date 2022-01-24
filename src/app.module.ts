import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/controller/todo.controller';
import { todoRepository } from './todo/todo/repository/todo.repository';
import { TodoService } from './todo/todo/service/todo.service';

@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, todoRepository, TodoService],
})
export class AppModule {}
