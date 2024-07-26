import express from 'express';
import * as controller from "../controllers/usersController";
import {auth} from "../middlewares/middlewares"
const router = express.Router();


router.route('/login').post(controller.login);
router.route('/register').post(auth, controller.register);


export default router;