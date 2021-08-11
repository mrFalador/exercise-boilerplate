### EXERCISE APP

This is a app to test communication with Metropolitan API

Stack:  [Node](https://nodejs.org/en/), [Express](https://expressjs.com), [color-thief](https://lokeshdhakar.com/projects/color-thief/)

### instalation

For install need:

```bash
$ npm install
```

### environment

The `.env` file is required, see the [.env.example](.env.example) for details.

### run app

```bash
$ npm run dev
```
In the browser, enter the url http://localhost:PORT/api/list,
where PORT is the port number on which the application is running.

After about 2 minutes, a list of works of art will appear.
You need to wait 2 minutes, since API requests occur approximately once every 1 second

The result will be written to the results file.json in the project root