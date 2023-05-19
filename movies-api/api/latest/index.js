import express from 'express';
import { latests } from './movieLatest';

const router = express.Router(); 

router.get('/', (req, res) => {
    res.json(latests);
});

export default router;