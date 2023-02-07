import { Request, Response } from "express";
import cors from 'cors';
// let cors = require('cors')
import express from 'express';

import {port} from './utils/constants'
import router from "./routes/main.routes";

const app = express();
app.use(cors());

app.use("/", router);

app.listen(port, () =>{
    console.log(`working on port : ${port}`);
})