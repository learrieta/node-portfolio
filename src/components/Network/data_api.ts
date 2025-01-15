import { Info } from "../../models/info";



export async function fetchNotes(): Promise<Info[]>{
    const response = await fetch("http://localhost:1337/", {method: "GET"});
    return response.json();
}


export async function fetchFunNotes(): Promise<Info[]>{
    const response = await fetch("http://localhost:1337/awesome/applicant", {method: "GET"});
    return response.json();
}