import express from 'express';
import { upcomings } from './movieUpcoming';
import Upcoming from './upcomingModel'

const router = express.Router(); 

router.get('/', async (req, res) => {
    const upcomings = await Upcoming.find();
    res.status(200).json(upcomings);
});

export default router;