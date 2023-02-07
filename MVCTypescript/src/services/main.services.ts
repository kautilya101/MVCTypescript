import { api } from "../models/api.model";
import { Model } from "../models/data.model";


export default function ModelMapping(data: api[]) { 
     let Response: Model[] = [];  
    data.map((item: api) => { 
           let mappedData = new Model(item);    
           Response.push(mappedData);  
    });  return Response;}