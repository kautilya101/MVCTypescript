"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
// let cors = require('cors')
const express_1 = __importDefault(require("express"));
const constants_1 = require("./utils/constants");
const main_routes_1 = __importDefault(require("./routes/main.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/", main_routes_1.default);
app.listen(constants_1.port, () => {
    console.log(`working on port : ${constants_1.port}`);
});
