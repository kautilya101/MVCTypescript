import express  from 'express';


// const mainController = require('../controller/main.controller')
import mainController from '../controller/main.controller'
const router  = express.Router();

router.get('/',mainController);

export default router;