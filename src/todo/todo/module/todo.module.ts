import { TodoController } from "../controller/todo.controller";
import { TodoService } from "../service/todo.service";
import { TodosRepository } from "../repository/todo.repository";
import { Module } from "@nestjs/common";
import { Todo } from "../entities/todo.dto";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
    exports: [TodosRepository, TodoService],
    controllers: [TodoController],
    providers: [TodosRepository, TodoService],
  })
  export class todoModule {}