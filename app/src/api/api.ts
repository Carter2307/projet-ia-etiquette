import { ErrorResponse } from "react-router-dom";
import { ServerResponse } from "../types/types";


const SERVERURL = "http://localhost:3000"

export async function get<T>(url:string): Promise<ServerResponse<T> | null> {
    const headers = new Headers();
    const token = JSON.parse(localStorage.getItem("auth") || "").token as string
    headers.append("Content-Type", "application/json")
    headers.append("Authorization", token)

    try {
        const response = await fetch(`${SERVERURL}${url}`, { headers });

        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            return null;
        }
        
        const data = await response.json() as ServerResponse<T>;
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }

}


export const post: <T>(url:string, data: T) => Promise<ServerResponse<T | any> | ErrorResponse> = async (url, data) => {

    const headers = new Headers();
    headers.append("Content-Type", "application/json")

    try {
        
        const response = await fetch(`${SERVERURL}${url}`, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        });

        if(response.ok) {
            return await response.json();
        }

    } catch (error: any) {
        return error
    }
}