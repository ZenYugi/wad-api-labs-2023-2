import userModel from '../api/users/userModel';
import genreModel from '../api/genres/genreModel';
import popularModel from '../api/populars/popularModel';
import upcomingModel from '../api/upcomings/upcomingModel';
import genres from './genres';
import users from './users';
import populars from './populars';
import upcomings from './upcomings';
import dotenv from 'dotenv';
import movieModel from '../api/movies/movieModel';
import movies from './movies.js';


dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}


async function loadGenres() {
  console.log('load genre Data');
  try {
    await genreModel.deleteMany();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load genres Data: ${err}`);
  }
}

async function loadPopulars() {
  console.log('load popular Data');
  try {
    await popularModel.deleteMany();
    await popularModel.collection.insertMany(populars);
    console.info(`${populars.length} popular movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load populars Data: ${err}`);
  }
}

async function loadUpcomings() {
  console.log('load upcoming Data');
  try {
    await upcomingModel.deleteMany();
    await upcomingModel.collection.insertMany(upcomings);
    console.info(`${upcomings.length} upcoming movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load populars Data: ${err}`);
  }
}





// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}




if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
  loadMovies();
  loadPopulars();
  loadUpcomings();
 
}

