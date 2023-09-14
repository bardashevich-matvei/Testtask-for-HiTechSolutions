## Application functionalities

In application realized API functional for Movies and Genres manipulation. As a main storage used MongoDB. Fpr the start of working with application you just follow the steps below

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start
```

## API Description

## Movies API

- POST create a movie
  api/movies

- DELETE delete a movie  
  api/movies/:id

- PATCH update a movie
  api/movies/:id

- POST search for movies  
  api/movies/search

- GET get all movies with pagination  
  api/movies?limit=5&offset=0

## Genres API

- POST create a new genre  
  api/genres

- DELETE delete a genre  
  api/genres

- GET get all genres  
  api/genres