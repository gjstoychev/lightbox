## Intro

The purpose of this app is:
1. To serve the SPA (HTML files and CSS+JS bundles that conforms the app)
2. To act as an API (retrieve the images through the Flickr API, serve them locally)
3. The first request to the webserver should return the SPA code. Subsequent interactions shouldn’t make requests to the webserver, only to the API to request data.
4. Backend must be implemented with NodeJS.


## Getting started

Download the project or clone it using Git:
```git clone https://github.com/gjstoychev/lightbox.git```

Enter the project directory:
```cd lightbox```

Configure and install the project by calling the configure script:
```npm run config```

The configure should:
1. Install backend node_modules if they are missing
2. Clone the frontend folder if it is missing
3. Install front node_modules if they are missing

After the configuration you can start the application:
```npm start```

Which should:
1. Start the backend API at port 8080
2. Start the frontend SPA at port 3000 and open you browser

If you intend to only start the backend Api without the frontend, please use:
```npm run api```

This way you can start the frontend project separately.


## Available Scripts

In the project directory, you can run:

### `npm run config`
1. Install backend node_modules if they are missing
2. Clone the frontend folder if it is missing
3. Install front node_modules if they are missing

### `npm start`
1. Starts the backend API at port 8080
2. Starts the frontend SPA at port 3000

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### ```npm run api```
1. Starts the backend API at port 8080
