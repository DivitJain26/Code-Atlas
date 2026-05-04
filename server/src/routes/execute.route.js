import express from 'express';
import { Python } from '../controllers/execute.controller.js';

const router = express.Router();

router.post('/python', Python);
   

 
export default router;