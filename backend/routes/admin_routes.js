import Express from "express";
import { addAdmin, adminLogin, getAdmins } from "../controllers/admin_controllers.js";

const adminRouter = Express.Router();

adminRouter.post('/signup', addAdmin);
adminRouter.post('/login', adminLogin);
adminRouter.get('/', getAdmins)

export default adminRouter;