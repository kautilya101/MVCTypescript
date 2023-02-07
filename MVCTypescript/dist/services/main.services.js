"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_model_1 = require("../models/data.model");
function ModelMapping(data) {
    let Response = [];
    data.map((item) => {
        let mappedData = new data_model_1.Model(item);
        Response.push(mappedData);
    });
    return Response;
}
exports.default = ModelMapping;
