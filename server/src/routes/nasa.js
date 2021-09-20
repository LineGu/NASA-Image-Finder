import express from 'express';
import nasaController from '../controllers/nasa';
const router = express.Router();

router.get('/', nasaController.getNasaImg);

export default router;
