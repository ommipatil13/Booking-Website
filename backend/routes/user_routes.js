import Express from 'express';
import { deleteUser, getAllUsers, login, signup, updateUser } from '../controllers/user_controllers.js';

const userRouter = Express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signup);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

//login
userRouter.post('/login', login)


export default userRouter;
