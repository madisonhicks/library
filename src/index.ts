import express from "express";
import path from "path";
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Running on port ${port}`));