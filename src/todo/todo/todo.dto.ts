import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoDTO{
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    title: string;
}

// export class TodoDTO {
//     static id(id: any): (value: TodoDTO, index: number, array: TodoDTO[]) => TodoDTO {
//         throw new Error("Method not implemented.");
//     }
//     id? : number;
//     title : string;

//     constructor(id, title){
//         this.id = id;
//         this.title = title;
//     }
// }