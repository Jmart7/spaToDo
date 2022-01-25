import { TodoController } from "../controller/todo.controller";
import { TodoService } from "../service/todo.service";
import { todoRepository } from "../repository/todo.repository";
import { Module } from "@nestjs/common";
import { TodoDTO } from "../todo.dto";
import { TypeOrmModule } from "@nestjs/typeorm";



@Module({
    imports: [TypeOrmModule.forFeature([TodoDTO])],
    exports: [todoModule],
    controllers: [TodoController],
    providers: [todoRepository, TodoService],
  })
  export class todoModule {}