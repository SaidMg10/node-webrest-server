import express from 'express';
import path from 'path';


interface Options {
    port: number;
    public_Path?: string;

}


export class Server {


    private app = express();
    private readonly port: number;
    private readonly publicPath: string;


    constructor(options: Options) {
        const { port, public_Path = 'public' } = options;
        this.port = port;
        this.publicPath = public_Path;
    }


    async start() {

        //* Midlewares

        //* Public Folder

        this.app.use( express.static( this.publicPath ) );


        this.app.get('*', ( req, res ) => {
            const indexPathSearch = path.join( __dirname + `../../../${this.publicPath}/index.html` );
            res.sendFile(indexPathSearch);
            return;
        })


        this.app.listen(this.port, () => {
            console.log(`server running in port ${ this.port }`);
        });

    }


}