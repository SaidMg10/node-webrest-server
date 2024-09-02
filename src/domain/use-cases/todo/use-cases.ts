import { CreateTodo } from "./create-todo";
import { DeleteTodo } from "./delete-todo";
import { GetTodo } from "./get-todo";
import { GetTodos } from "./get-todos";
import { UpdateTodo } from "./update-todo";

export const todoUseCase = {
    CreateTodo,
    DeleteTodo,
    UpdateTodo,
    GetTodo,
    GetTodos
}