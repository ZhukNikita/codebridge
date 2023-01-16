import axios from 'axios';
import {AxiosResponse} from 'axios'
import {Articles} from "../models/Articles";

const API_URL = 'https://api.spaceflightnewsapi.net/v3/articles'

export default class GetServices {
    static async articles(number:number): Promise<AxiosResponse<Articles[]>> {
        return axios.get<Articles[]>(`${API_URL}`, {params:{_limit:number}})
    }
}