import {Router} from 'express';
import {indexRota} from '../controllers/index_controller';

const router = Router();

router.route('/').get(indexRota);

export default router;