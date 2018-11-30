# Full stack babel-eslint

This is a simple REST Api.

## Requirements
It could be ran with Docker or without it. 
In order to run with Docker you need: 
 - Docker 

Believe or not, you need just this amazing tool (Docker).

Maybe, you are wondering "What I need to run  this api without Docker". Let me say that
latest version of NodeJs are required along with latest version of npm. 

### Clone

```bash
    git clone https://github.com/joaquinicolas/full-stack-api-babel.git
```
### Running the api

To run the api without Docker follow this steps: 
```bash
    cd full-stack-api-babel
    npm run build
    npm run serve
```

Open http://127.0.0.1:8080/

Or just run a Docker's container:
```bash
    docker run -p :8080:8080 -d joaquinnicolas96/xappia
```

At this point, open http://127.0.0.1:8080/

## API

There are some available endpoints: 

- /: Returns all data
- /:id : Returns data filter by id
  