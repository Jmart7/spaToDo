import { Module } from '@nestjs/common';
import { TodoController } from './todo/todo/controller/todo.controller';
import { TypeOrmModule } from '@Nestjs/typeorm'
import { todoModule } from './todo/todo/module/todo.module';
import { Connection } from 'typeorm';
import { Todo } from './todo/todo/entities/todo.dto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mysql',
      entities: [Todo],
      synchronize: true,
    }),
    todoModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
