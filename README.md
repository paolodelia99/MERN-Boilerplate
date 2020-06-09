# MERN Boilerplate

Are you looking for a MERN boilerplate for auth included. That's the Boilerplate for you!

## Tecnologies Used

- **MongoDb and Mongoose** - MongoDb as a Database and mongoose as as a Object Data Modeling library for MongoDB and Node.js
- **Express** - as a backend Framework
- **React** - as a Frontend Framework
- **Node** - runtime JavaScript
- **Redux** - for linking the Frontend with the Backend
- **JsonWebToken** - for creating JSON-based access tokens
- **bcryptjs** -  for hashing the user passwords

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

Remember to change to `"name"` in the `package.json` and in the `package-lock.json`

## Todo

- [ ] Tests
    - [x] Backend (api)
    - [ ] FrontEnd
- [ ] More comments

## Contributing

Feel Free to report bug or contribute to improve this boilerplate

## Author

Paolo D'Elia

## License

MIT
