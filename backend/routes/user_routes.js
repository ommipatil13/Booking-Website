import Express from 'express';
import { getAllUsers, signup, updateUser } from '../controllers/user_controllers.js';

const router = Express.Router();

router.get('/', getAllUsers);
router.post('/signup', signup);
router.put('/:id', updateUser)

export default router;
