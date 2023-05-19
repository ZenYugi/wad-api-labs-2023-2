import express from 'express';
import { topRateds } from './movieTopRated';

const router = express.Router(); 

router.get('/', (req, res) => {
    res.json(topRateds);
});

export default router;