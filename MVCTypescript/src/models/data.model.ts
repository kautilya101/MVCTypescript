import { api } from "./api.model";

export class Model{
    image!: string;
    title!: string;
    teaser!: string;
    author!: string;
    urlTitle!: string;
    html!: string;
    images!: Object[];
    constructor(data : api){
        this.image = data.image;
        this.title = data.title
        this.teaser = data.teaser
        this.author = data.author
        this.urlTitle = data.urlTitle
        this.html = data.html
        this.images = data.images  
    }
}