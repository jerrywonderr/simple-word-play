# Duplicate Character Remover

A simple react app to remove duplicate characters from a string.
## Start the app
### Static Server
To start the app, you can follow these steps.
- Clone this repo locally
- Navigate to the `app` directory.
- Run `npx serve build` to start a local server to serve the bundled files on localhost. If you do not have the serve package installed, there'll be a prompt to enter 'y', just enter 'y'. It will install the package and start the server after that. Once the server is all setup, you will be able to access the app on `http://localhost:3000` on your system.
### Development Server (Alternative)
Alternatively, after navigating to the `app` directory, run `yarn install` to install all dependencies, then run `yarn start`. This will start the development server. Once the process is complete, you can navigate to `http://localhost:3000` to view the app.



## Extras
- The default package manager used when building the app is yarn, to use npm, simply navigate to the app directory, delete the yarn.lock file and run `npm install`. This will set up a package-lock.json file and get all modules using npm. This is just to resolve conflicts that may arise by using packages from different managers.
```bash
# after cloning the repo
cd app
rm yarn.lock # delete yarn.lock file
npm install # re-install all packages
```

