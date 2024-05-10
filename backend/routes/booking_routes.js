import Express from "express";
import { newBooking } from "../controllers/booking_controller.js";

const bookingRouter = Express.Router();

bookingRouter.post('/', newBooking)



export default bookingRouter;