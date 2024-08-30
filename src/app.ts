import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import path from 'path';




(async()=> {
    main();
})();


function main() {
    
    const server = new Server({
        port: envs.PORT,
        public_Path: envs.PUBLIC_PATH
    });
    
    server.start();
}