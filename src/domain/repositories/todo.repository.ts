import { CreateTodoDto, UpdateTodoDto } from "../dto";
import { TodoEntity } from "../entities/todo.entity";





export abstract class TodoRepository {

    abstract create( createTodoDto: CreateTodoDto ): Promise<TodoEntity>;

    //todo: paginación
    abstract getAll(): Promise<TodoEntity[]>

    abstract findById( id: number ): Promise<TodoEntity>;

    abstract updateById( updateTodoDto: UpdateTodoDto ): Promise<TodoEntity>;

    abstract deletById( id: number ): Promise<TodoEntity>;
}