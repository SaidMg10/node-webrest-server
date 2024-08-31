import { Router } from "express";
import { TodosController } from "./controller";



export class TodoRoutes {


    static get routes(): Router {

        const router = Router();

        const todoControler = new TodosController();

        router.get( '/', todoControler.getTodos );
        router.get( '/:id', todoControler.getTodoById );
        router.post( '/', todoControler.createTodo );
        router.put( '/', todoControler.updateTodo );
        router.delete( '/:id', todoControler.deleteTodo );
        return router;
    }

}