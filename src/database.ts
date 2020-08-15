import {createPool} from 'mysql2/promise';

export async function connect(){
    
    const conexao =  await createPool({
        host: 'localhost',
        user: 'root',
        password: 'rootroot',
        database: 'api_ts',
        connectionLimit: 10
    });

    return conexao;
}