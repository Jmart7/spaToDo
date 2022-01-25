import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo/controller/todo.controller';
import { todoRepository } from './todo/todo/repository/todo.repository';
import { TodoService } from './todo/todo/service/todo.service';
import { TypeOrmModule } from '@Nestjs/typeorm'
import { todoModule } from './todo/todo/module/todo.module';
import { Connection } from 'typeorm';
import { TodoDTO } from './todo/todo/todo.dto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3000,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [TodoDTO],
      synchronize: true,
    }),
  todoModule],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService, todoRepository],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
