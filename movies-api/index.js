import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';

//New 
import popularsRouter from './api/populars';
import topRatedRouter from './api/topRateds';
import upcomingRouter from './api/upcomings';
import latestRouter from './api/latest';
//import ontheairRouter from './api/tvonair';

import './db';
import './seedData';
//... other imports
import usersRouter from './api/users';
import passport from './authenticate';




dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};


const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(passport.initialize());

// Add passport.authenticate to middleware stack for protected routes​
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);


app.use('/api/genres', genresRouter);

app.use('/api/populars', popularsRouter);

app.use('/api/topRateds', topRatedRouter);

app.use('/api/upcomings', upcomingRouter);

app.use('/api/latests', latestRouter);

//app.use('/api/tvonair', ontheairRouter);

//Users router
app.use('/api/users', usersRouter);

app.use(errHandler);






app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
