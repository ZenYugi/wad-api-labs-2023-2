# Assignment 2 - Web API.

Name: Aaron O' Brien

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)

 + Added an API GET for popular movies 
 + Added an API GET for latest movies 
 + Added an API GET for upcoming movies
 + Added an API GET for top rated movies
 + Created and stored a mongoose collection for upcoming movies
 + Created and stored a mongoose collection for popular movies
 + Added A Login Page and included in the site header
 + Added A SignUp Page and included in the site header
 + Created Protected Routes for pages not needed to be visible when not logged in.

## Setup requirements.

To include my movies react app from Assignment 1, I created a copy of it in a folder and moved it to my current folder on here. After that I use the commands "npm install" and then "npm start" to run the react app on the browser. 

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

______________________
NODEENV=development
PORT=8080
HOST=
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/populars| GET | Gets a list of popular movies 
- /api/topRateds | GET | Gets a list of the top rated movies
- /api/upcomings | GET | Get a list of upcoming movies
- /api/latest | GET | Get a list of latest movies



## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

I used the protected route command on my index of my app. This prevents non-users from viewing pages from my app without logging in. Once they selected one my pages below, they are redirected to the login page (Output Function). Once logged in (eg. user1, test1) they can have access to other pages.

 + "/movies/favorites" element={<FavoriteMoviesPage />}
 + "/movies/upcoming" element={<Upcoming />} 
 + "/reviews/:id" element={ <MovieReviewPage /> } 
 + "/movies/:id" element={<MoviePage />} 
         
 + "/reviews/form" element={ <AddMovieReviewPage }
 + "/movies/top_rated" element={<TopRated />} 
 + "/movies/now_playing" element={<NowPlaying />}
 + "/movies/popular" element={<Popular />} 
 + "/movies/latest" element={<NewMovie />} 

 + "/credits/:id" element={ <MovieCreditPage /> } 
 + "/tvs/favorites" element={<FavoriteTvsPage />} 
 + "/reviews/:id" element={ <TvReviewPage /> } 
 + "/tvs/:id" element={<TvDetailsPage />} 
          
 + "/reviews/form" element={ <AddTvReviewPage /> } 
 + "/tv/on_the_air" element={<OnTheAir />} 
      

## Integrating with React App

I found it simply enough to intergrate with my react app. Again all I needed was move my react app folder into the this project. The use "npm install" and "npm start". However I was not able to complete API requests from the front-app. Will be explained in Youtube video. The app itself I working as good now that I have my TV pages accesable on the brower. I didn't make much changes to the presntation execpt adding the login and signuup pages.

## Independent learning (if relevant)

Briefly explain any non-standard features developed for the app.   

