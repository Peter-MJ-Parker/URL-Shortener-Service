# URL-Shortener-Service

A URL shortener service.

Use a server to host this package.

Use postman to get and post requests.

This can act as an api to use in other projects.

# Run

- npm install
- Create `.env` file in root directory
  - Specify a port with `PORT={PORT}`
  - Specify a MongoURI with `CONNECT={mongo string}`
    - Do NOT include `{}` or spaces in these variables.
- npm run build
  - Builds a JavaScript project from TypeScript files..
- npm run start
  - Runs the JavaScript project using nodemon to stay running.
- npm run rebuild
  - Used in case you make a change to the bot while nodemon is running.
  - Rebuilds the project and restarts nodemon.

[OPTIONAL]

- npm install -g pm2 (Needs admin/root permission)
- npm run pm2
  - Runs the script using a process manager.
