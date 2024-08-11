import axios from "axios"

const BASE_URL = 'http://127.0.0.1:5002'

const client = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,//5s
})

export function getBarData(){
    return client.get('/data/bar')
}

export function getPathData(){
    return client.get('/data/path')
}

export function getPieData(){
    return client.get('/data/pie')
}

// export function getScatterData(){
//     return client.get('/data/scatter')
// }

// export function getForceData(){
//     return client.get('/data/force')
// }