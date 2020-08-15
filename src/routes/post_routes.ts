import {Router} from 'express';
import {getPosts, createPost, getPost, deletePost, updatePost} from '../controllers/post_controller';
const router = Router();

router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:id')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default router;