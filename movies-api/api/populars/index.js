import express from 'express';
import { populars } from './moviePopular';
import Popular from './popularModel';

const router = express.Router(); 

router.get('/', async (req, res) => {
    const populars = await Popular.find();
    res.status(200).json(populars);
});

export default router;