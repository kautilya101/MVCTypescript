
import {Request,Response} from "express";
import { Model } from "../models/data.model";

import fetcher from "../repositories/homluv.repositories";
import ModelMapping from "../services/main.services";
import { url } from "../utils/constants";



const getMainController = async (req : Request,res : Response) => {
    let middleWareResponse : Model[] = []
    const {category,search,title} = req.query;
    let response;
    try{
        if(category){
            response = await fetcher(url + `category?pagesize=${req.query.pagesize}&page=${req.query.page}&category=${category}&ctr=5`);
        }
        else if(search){
            response = await fetcher(url + `articles?pagesize=${req.query.pagsize}&page=${req.query.page}&search=${search}&ctr=12`);
        }
        else if(title){
            response = await fetcher(url + `detail?title=${title}`);
        }
        else{
            response = await fetcher(url + `articles?pagesize=${req.query.pagesize}&page=${req.query.page}&ctr=14`);
        }

        middleWareResponse = ModelMapping(response);

        res.status(200).send(middleWareResponse);
        
    }
    catch(err){
        console.log(err);
    }
}

export default getMainController;
