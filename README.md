# MERN Boilerplate

Are you looking for a MERN boilerplate for auth included. That's the Boilerplate for you!

## Tecnologies Used

- MongoDb and Mongoose - MongoDb as a Database and mongoose as ..
- Express - as a backend Framework
- React - as a Frontend Framework
- Node - 
- Redux - for linking the Frontend with the Backend
- JsonWebToken -
- bcryptjs - 

## Get Started

`git clone repoURL`

### Add a default.json file in config folder with the folowing

```
{
  "mongoURI": "<your_mongoDB_Atlas_uri_with_credentials>",
  "jwtSecret": "secret",
}
```

### Install server dependencies

```bash
npm install
```

### Install client dependencies

```bash
cd client
npm install
```

### Run both Express & React from root

Because I install concurrently as a dev dependency you can run both the server and the client with just one command

```bash
npm run dev
```

### Build for production

```bash
cd client
npm run build
```