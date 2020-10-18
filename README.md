### Tech Stack
#### FrontEnd 
* React
* HTML
* SCSS
#### BackEnd
* Local Json Server

### Task requirements
#### Main Tasks
1. Implement the main page with the random posts from different users. 
    > source - /posts
2. Implement the user own page with his posts.
    > source - /users/:id
3. Each post may contain the comments. By default, the comments are hidden.
    > Under each post there is a comments section, by default, it's closed
   
#### Additional Tasks
4. Implement post management: create, update, delete.
    > Implemented post management for Posts
5. Implement authorization.
    > Implemented authorization with firebase
6. Make the app responsive.
7. Make dark and light themes.
    > Implemented dark and light themes with `styled-components`
8. Make an app localizable.
    > Implemented localization with `react-i18next`
## How to run project
1. ### `npm install`
2. ### `npm run json:server`
3. ### `npm start`
## Available Scripts
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run json:server`
Launches json server, to be able to send requests and get the responses from the server.<br>
Port is 3000
### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
