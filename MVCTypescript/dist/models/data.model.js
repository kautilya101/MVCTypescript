"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    constructor(data) {
        this.image = data.image;
        this.title = data.title;
        this.teaser = data.teaser;
        this.author = data.author;
        this.urlTitle = data.urlTitle;
        this.html = data.html;
        this.images = data.images;
    }
}
exports.Model = Model;
