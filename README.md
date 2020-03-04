# Steps

Install dependencies:
```bash
npm install
```

## nano-react-app

This project was created with [nano-react-app](https://github.com/adrianmcli/nano-react-app). This is a streamlined version of `create-react-app`.

## firebase

We will use Firebase Firestore and Firebase Hosting. [Connect the project to your firebase project](https://firebase.google.com/docs/web/setup)

In order to add the **Firebase SDK**, we will not use ~~Reserved URLs~~. Instead, we'll bundle the SDK. This way we will have a better developper experience and slightly better performance. So the SDK is part of the dependencies in the `package.json` file.


The `db.js` file initialize firebase but you need to provide the [firebase config object](https://support.google.com/firebase/answer/7015592) in a `src/firebase-config.json` file like this:
```json
{
    "apiKey": "...",
    "authDomain": "...",
    "databaseURL": "...",
    "projectId": "...",
    "storageBucket": "...",
    "messagingSenderId": "...",
    "appId": "..."
}
```

## material-ui
We use components of the [material-ui](https://material-ui.com/) library. This library is part of the dependencies in the `package.json` file.

## react-router
We use the [react-router](https://reacttraining.com/react-router/web/guides/quick-start) library to handle navigation inside the app. This library is part of the dependencies in the `package.json` file.

## react hooks
One way to add state to a component in React is to use Hooks. Learn about [React Hooks](https://reactjs.org/docs/hooks-overview.html)

# nano-react-app-template

The template project for [nano-react-app](https://github.com/adrianmcli/nano-react-app).

- `npm start` — This will spawn a development server with a default port of `1234`.
- `npm run build` — This will output a production build in the `dist` directory.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements in your Javascript:

```js
import "./index.css";
```

## Babel transforms

The Babel preset [babel-preset-nano-react-app](https://github.com/adrianmcli/babel-preset-nano-react-app) and a small amount of configuration is used to support the same transforms that Create React App supports.

The Babel configuration lives inside `package.json` and will override an external `.babelrc` file, so if you want to use `.babelrc` remember to delete the `babel` property inside `package.json`.
