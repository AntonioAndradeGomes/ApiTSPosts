import {Request, Response} from 'express';
import {connect} from '../database';
import {Post} from '../interface/Post_interface';

export async function getPosts (req: Request, res : Response) : Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    return res.json(posts[0]);
}

export async function createPost(req : Request, res: Response){
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query(
        'INSERT INTO posts SET ? ', [newPost]
    );
    return res.json({
        message: 'Post Criado!'
    });
}

export async function getPost(req: Request, res: Response): Promise<Response>{
    const id = req.params.id;
    const conn = await connect();
    const  posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    return res.json(posts[0]);
}

export async function deletePost(req: Request, res: Response){
    const id = req.params.id;
    const conn = await connect();
    await conn.query('DELETE FROM posts WHERE id = ?', [id]);
    res.json({message : 'Post deletado!'});
}

export async function updatePost(req: Request, res: Response){
    const id = req.params.id;
    const updatePost: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost, id]);
    res.json({message : 'Post atualizado!'});
}