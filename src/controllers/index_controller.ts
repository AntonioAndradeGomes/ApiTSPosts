import {Request, Response} from 'express';

export function indexRota (req: Request, res : Response) : Response{
    return res.json({message: 'API funcionando!'})
}