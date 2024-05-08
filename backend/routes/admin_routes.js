import Express from "express";
import { addAdmin, adminLogin } from "../controllers/admin_controllers.js";

const adminRouter = Express.Router();

adminRouter.post('/signup', addAdmin);
adminRouter.post('/login', adminLogin);

export default adminRouter;