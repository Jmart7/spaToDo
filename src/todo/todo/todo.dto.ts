export class TodoDTO {
    static id(id: any): (value: TodoDTO, index: number, array: TodoDTO[]) => TodoDTO {
        throw new Error("Method not implemented.");
    }
    id? : number;
    title : string;

    constructor(id, title){
        this.id = id;
        this.title = title;
    }
}