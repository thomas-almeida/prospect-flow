import { Router } from 'express';
import { fetchIgStores } from '../controllers/fetchController.js';

const router = Router();

router.get("/fetch/ig-stores", fetchIgStores)

export default router;
