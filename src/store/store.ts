import { Articles } from "../models/Articles";
import {makeAutoObservable} from "mobx";
import GetServices from "../services/GetServices";



export default class Store {
    articles = [] as Articles[]
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }
    setLoading(bool: boolean){
        this.isLoading = bool
    }
    setArticles(articles: Articles[]){
        this.articles = articles;

    }
    async GetArticles(number:number){
        this.setLoading(true)
        try {
            const response = await GetServices.articles(number)
            this.setArticles(response.data)
        }
        catch (e:any){
            console.log(e.response?.data?.message)
        }
        finally{
         this.setLoading(false)
        }
    }
}