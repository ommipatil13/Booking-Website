import Express from 'express';
import { getAllUsers, signup } from '../controllers/user_controllers.js';

const router = Express.Router();

router.get('/', getAllUsers);
router.post('/signup', signup);

export default router;
