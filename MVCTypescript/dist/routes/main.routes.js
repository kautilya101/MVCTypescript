"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const mainController = require('../controller/main.controller')
const main_controller_1 = __importDefault(require("../controller/main.controller"));
const router = express_1.default.Router();
router.get('/', main_controller_1.default);
exports.default = router;
