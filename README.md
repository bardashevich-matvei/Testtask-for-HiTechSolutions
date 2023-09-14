## Application functionalities

In application realized API functional for Movies and Genres manipulation. As a main storage used MongoDB. For the start of working with application just follow the steps below

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
  Request body example:  
```bash
{
    "title": "test",
    "description": "bla bla bla",
    "releaseDate": "2023-09-13T23:09:19.303Z",
    "genres": ["horror"]
}
```

- DELETE delete a movie  
  api/movies/:id

- PATCH update a movie
  api/movies/:id  
  Request body example:  
```bash
{
    "title": "test",
    "description": "bla bla bla",
    "releaseDate": "2023-09-13T23:09:19.303Z",
    "genres": ["comedy"]
}
```

- POST search for movies  
  api/movies/search  
  Request body example:  
```bash
{
    "limit": 22,
    "offset": 10,
    "sortField": "title",
    "descending": false,
    "operation": "and"
    "stringFilters": [{
        "fieldName": "title",
        "exactMatch": false,
        "values": ["test"]
    },
    {
        "fieldName": "description",
        "exactMatch": false,
        "values": ["bla"]
    }]
}
```  
The "operation" field determines whether the selection will be strict or not. “and” is strict, “or” is non-strict. By default the selection is non-strict. Each field is optional. By default "limit"=10, "offset"=0 and "operation"=or

- GET get all movies with pagination  
  api/movies?limit=5&offset=0  

"limit" and "offset" are optional params. By default "limit"=10 and "offset"=0

## Genres API

- POST create a new genre  
  api/genres
  Request body example:  
```bash
  {
    "name": "comedy"
  }
```

- DELETE delete a genre  
  api/genres

- GET get all genres  
  api/genres
