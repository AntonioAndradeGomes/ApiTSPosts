import express, { Application } from 'express';
import morgan from 'morgan';

import IndexRoutes from './routes/index_routes';
import PostRoutes from './routes/post_routes';

export class App {
    
    private app: Application;


    constructor(private porta? : number | string) {
        this.app = express();
        this.configuracoes();
        this.middlewares();
        this.routes();
    }

    configuracoes(){
        this.app.set('port', this.porta || 3000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/posts', PostRoutes);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Servidor executando na porta', this.app.get('port'));
    }
}